# Deployment Guide

## Objective

This document serves as a guide to deploying the service and outlines how the Continuous Deployment (CD) for this service is carried out.

## Prerequisites

_Note: Mention any dependencies for these components, any other requirements, or pre-checks like deploying multitenants before ndc release, changelog format, etc._

## When is my change released?

- Every commit to the main triggers the [release pipeline](https://buildkite.com/hasura/release-ndc-postgres-config-server/builds/752).
- By default, it releases to staging. To release into prod, enable the gate, i.e., `Release to production`.

## Pipelines:

[Release ndc-postgres-config-server](https://buildkite.com/hasura/release-ndc-postgres-config-server)

## Tools and Source code:

- **Buildkite**
  The Buildkite pipeline configurations are housed in this repository at `/.buildkite/*.yml`. File `release-config-server.yaml` is triggered for each commit to the main.

  - Updates the file `ddn/cloud/images/<environment>/kustomization.yaml` with the image tag to release in respective environments.

- **ArgoCD**
  Listens to the config changes in the file `ddn-cloud/images/<environment>/kustomization.yaml` and auto-deploys it. Access the ArgoCD dashboard [here](https://argocd.hasura-app.io/), search by `<component>-<environment>-region`, e.g., postgres-ndc-config-server-prod-asia-south1.

- **k8s**
  Workloads are deployed in the Kubernetes environment, and `ndc-postgres-config-server` is deployed in the data-plane. Its deployment and service files are found in [here](https://github.com/hasura/ddn-cloud/tree/main/components/region/ndc-config-server).

## Deployment Workflow

[Release ndc-postgres-config-server](https://buildkite.com/hasura/release-ndc-postgres-config-server/builds/752/dag)

## Checklist

_Note: Update the checkpoints for any dependency._

## Rollback

Deployment updates are sent in the Slack channels configured. Check out the doc [here](https://docs-internal.hasura-app.io/books/hasura-v3-deployment-operations/page/v3-deployments-slack-notification-configuration). To rollback, under the notification sent, look for the tag under _Component's Image Tag_ and update the tag in `ddn/cloud/images/<environment>/kustomization.yaml` to rollback.
