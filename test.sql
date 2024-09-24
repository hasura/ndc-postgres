-- Create tables in public schema
DROP TABLE IF EXISTS public.command_relationships;
DROP TABLE IF EXISTS public.model_relationships;
DROP TABLE IF EXISTS public.commands_arguments;
DROP TABLE IF EXISTS public.commands;
DROP TABLE IF EXISTS public.model_uniques;
DROP TABLE IF EXISTS public.model;
DROP TABLE IF EXISTS public.scalar_types;
DROP TABLE IF EXISTS public.object_types_fields;
DROP TABLE IF EXISTS public.object_types;
DROP TABLE IF EXISTS public.subgraphs;
DROP TABLE IF EXISTS public.builds;
DROP TABLE IF EXISTS public.projects;

CREATE TABLE public.projects (
    project_id TEXT PRIMARY KEY
);

CREATE TABLE public.builds (
    project_id TEXT NOT NULL REFERENCES public.projects(project_id),
    build_id TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    version TEXT NOT NULL,
    PRIMARY KEY (project_id, build_id)
);

CREATE TABLE public.subgraphs (
    project_id TEXT NOT NULL,
    build_id TEXT NOT NULL,
    subgraph TEXT NOT NULL,
    PRIMARY KEY (project_id, build_id, subgraph)
);

CREATE TABLE public.object_types (
    kind TEXT NOT NULL,
    version TEXT,
    object_type_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    graphql_type_name TEXT NOT NULL,
    graphql_input_type_name TEXT,
    description TEXT,
    project_id TEXT NOT NULL,
    build_id TEXT NOT NULL,
    subgraph TEXT NOT NULL,
    FOREIGN KEY (project_id, build_id) REFERENCES public.builds(project_id, build_id),
    FOREIGN KEY (project_id, build_id, subgraph) REFERENCES public.subgraphs(project_id, build_id, subgraph)
);

CREATE TABLE public.object_types_fields (
    object_type_id TEXT REFERENCES public.object_types(object_type_id),
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    project_id TEXT NOT NULL,
    build_id TEXT NOT NULL,
    subgraph TEXT NOT NULL,
    FOREIGN KEY (project_id, build_id) REFERENCES public.builds(project_id, build_id),
    FOREIGN KEY (project_id, build_id, subgraph) REFERENCES public.subgraphs(project_id, build_id, subgraph)
);

CREATE TABLE public.scalar_types (
    kind TEXT NOT NULL,
    version TEXT,
    name TEXT NOT NULL,
    graphql_type_name TEXT NOT NULL,
    project_id TEXT NOT NULL,
    build_id TEXT NOT NULL,
    subgraph TEXT NOT NULL,
    FOREIGN KEY (project_id, build_id) REFERENCES public.builds(project_id, build_id),
    FOREIGN KEY (project_id, build_id, subgraph) REFERENCES public.subgraphs(project_id, build_id, subgraph)
);

CREATE TABLE public.model (
    kind TEXT NOT NULL,
    version TEXT,
    name TEXT NOT NULL,
    object_type TEXT NOT NULL,
    model_id TEXT PRIMARY KEY,
    object_type_id TEXT REFERENCES public.object_types(object_type_id),
    source_data_connector_name TEXT,
    source_collection TEXT,
    select_many_query_root_field TEXT,
    project_id TEXT NOT NULL,
    build_id TEXT NOT NULL,
    subgraph TEXT NOT NULL,
    FOREIGN KEY (project_id, build_id) REFERENCES public.builds(project_id, build_id),
    FOREIGN KEY (project_id, build_id, subgraph) REFERENCES public.subgraphs(project_id, build_id, subgraph)
);

CREATE TABLE public.model_uniques (
    model_id TEXT REFERENCES public.model(model_id),
    query_root_field TEXT NOT NULL,
    unique_identifier TEXT[] NOT NULL,
    project_id TEXT NOT NULL,
    build_id TEXT NOT NULL,
    subgraph TEXT NOT NULL,
    FOREIGN KEY (project_id, build_id) REFERENCES public.builds(project_id, build_id),
    FOREIGN KEY (project_id, build_id, subgraph) REFERENCES public.subgraphs(project_id, build_id, subgraph)
);

CREATE TABLE public.commands (
    kind TEXT NOT NULL,
    version TEXT,
    command_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    graphql_root_field_name TEXT NOT NULL,
    graphql_root_field_kind TEXT NOT NULL,
    source_data_connector_name TEXT,
    source_data_connector_function TEXT,
    source_data_connector_procedure TEXT,
    description TEXT,
    output_type TEXT,
    project_id TEXT NOT NULL,
    build_id TEXT NOT NULL,
    subgraph TEXT NOT NULL,
    FOREIGN KEY (project_id, build_id) REFERENCES public.builds(project_id, build_id),
    FOREIGN KEY (project_id, build_id, subgraph) REFERENCES public.subgraphs(project_id, build_id, subgraph)
);

CREATE TABLE public.commands_arguments (
    command_id TEXT REFERENCES public.commands(command_id),
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    project_id TEXT NOT NULL,
    build_id TEXT NOT NULL,
    subgraph TEXT NOT NULL,
    FOREIGN KEY (project_id, build_id) REFERENCES public.builds(project_id, build_id),
    FOREIGN KEY (project_id, build_id, subgraph) REFERENCES public.subgraphs(project_id, build_id, subgraph)
);

CREATE TABLE public.model_relationships (
    kind TEXT NOT NULL,
    version TEXT,
    relationship_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    source TEXT NOT NULL,
    source_object_type_id TEXT REFERENCES public.object_types(object_type_id),
    target_model_name TEXT NOT NULL,
    target_model_id TEXT REFERENCES public.model(model_id),
    target_model_relationship_type TEXT NOT NULL,
    mapping_source_field TEXT NOT NULL,
    mapping_target_field TEXT NOT NULL,
    project_id TEXT NOT NULL,
    build_id TEXT NOT NULL,
    subgraph TEXT NOT NULL,
    FOREIGN KEY (project_id, build_id) REFERENCES public.builds(project_id, build_id),
    FOREIGN KEY (project_id, build_id, subgraph) REFERENCES public.subgraphs(project_id, build_id, subgraph)
);

CREATE TABLE public.command_relationships (
    kind TEXT NOT NULL,
    version TEXT,
    relationship_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    source TEXT NOT NULL,
    source_object_type_id TEXT REFERENCES public.object_types(object_type_id),
    target_command_id TEXT REFERENCES public.commands(command_id),
    target_command_name TEXT NOT NULL,
    target_command_subgraph TEXT,
    mapping_source_field TEXT NOT NULL,
    mapping_target_argument TEXT NOT NULL,
    project_id TEXT NOT NULL,
    build_id TEXT NOT NULL,
    subgraph TEXT NOT NULL,
    FOREIGN KEY (project_id, build_id) REFERENCES public.builds(project_id, build_id),
    FOREIGN KEY (project_id, build_id, subgraph) REFERENCES public.subgraphs(project_id, build_id, subgraph)
);

-- Indexes for builds table
CREATE INDEX idx_builds_project_id ON public.builds(project_id);
CREATE INDEX idx_builds_created_at ON public.builds(created_at);

-- Indexes for subgraphs table
CREATE INDEX idx_subgraphs_project_id_build_id ON public.subgraphs(project_id, build_id);

-- Indexes for object_types table
CREATE INDEX idx_object_types_project_id_build_id ON public.object_types(project_id, build_id);
CREATE INDEX idx_object_types_name ON public.object_types(name);
CREATE INDEX idx_object_types_graphql_type_name ON public.object_types(graphql_type_name);

-- Indexes for object_types_fields table
CREATE INDEX idx_object_types_fields_object_type_id ON public.object_types_fields(object_type_id);
CREATE INDEX idx_object_types_fields_project_id_build_id ON public.object_types_fields(project_id, build_id);

-- Indexes for scalar_types table
CREATE INDEX idx_scalar_types_project_id_build_id ON public.scalar_types(project_id, build_id);
CREATE INDEX idx_scalar_types_name ON public.scalar_types(name);

-- Indexes for model table
CREATE INDEX idx_model_object_type_id ON public.model(object_type_id);
CREATE INDEX idx_model_project_id_build_id ON public.model(project_id, build_id);
CREATE INDEX idx_model_name ON public.model(name);

-- Indexes for model_uniques table
CREATE INDEX idx_model_uniques_model_id ON public.model_uniques(model_id);
CREATE INDEX idx_model_uniques_project_id_build_id ON public.model_uniques(project_id, build_id);

-- Indexes for commands table
CREATE INDEX idx_commands_project_id_build_id ON public.commands(project_id, build_id);
CREATE INDEX idx_commands_name ON public.commands(name);
CREATE INDEX idx_commands_graphql_root_field_name ON public.commands(graphql_root_field_name);

-- Indexes for commands_arguments table
CREATE INDEX idx_commands_arguments_command_id ON public.commands_arguments(command_id);
CREATE INDEX idx_commands_arguments_project_id_build_id ON public.commands_arguments(project_id, build_id);

-- Indexes for model_relationships table
CREATE INDEX idx_model_relationships_source_object_type_id ON public.model_relationships(source_object_type_id);
CREATE INDEX idx_model_relationships_target_model_id ON public.model_relationships(target_model_id);
CREATE INDEX idx_model_relationships_project_id_build_id ON public.model_relationships(project_id, build_id);

-- Indexes for command_relationships table
CREATE INDEX idx_command_relationships_source_object_type_id ON public.command_relationships(source_object_type_id);
CREATE INDEX idx_command_relationships_target_command_id ON public.command_relationships(target_command_id);
CREATE INDEX idx_command_relationships_project_id_build_id ON public.command_relationships(project_id, build_id);
