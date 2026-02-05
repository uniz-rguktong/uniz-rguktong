# UniZ TurboRepo Migration Plan (Zero-Downtime Strategy)

## Executive Summary
This plan details the conversion of the current "Meta-Repo" (folder of independent repositories) into a high-performance **Turborepo Monorepo**. 

**Primary Goal**: Enable shared types, unified config, and parallel execution.
**Strict Constraint**: Ensure NO downtime and NO accidental redeployments on Vercel during the migration phase.

---

## Phase 1: Local Orchestration Layer (Safe Mode)
*Objective: Enable Turbo features locally without breaking the Git structure or Vercel pointers.*

1.  **Initialize Turbo in Root**:
    *   Install `turbo` as a dev dependency in the root.
    *   Create `turbo.json` to define pipelines (`build`, `dev`, `lint`).
2.  **Define Workspace Topology**:
    *   Update root `package.json` to recognize `uniz-*` as workspaces.
    *   **Crucial Step**: This allows `npm install` at the root to install all dependencies for all services at once (hoisting), saving massive disk space and install time.
3.  **Local Testing**:
    *   Verify `npx turbo run dev` starts all services in parallel.
    *   Verify `npx turbo run build` builds all services.

**Risk**: Low. This only changes the user's local interaction. Vercel ignores the root repo because it is likely connected to the individual service repos (submodules).

---

## Phase 2: Shared Libraries (The "Don't Repeat Yourself" Fix)
*Objective: Centralize shared code.*

1.  **Create `packages/` directory**:
    *   `packages/config`: Shared ESLint, TypeScript, and Prettier configs.
    *   `packages/types`: Move all shared interfaces/enums from `uniz-shared` here.
2.  **Refactor Services**:
    *   Update `uniz-auth-service`, `uniz-user-service`, etc., to import from `@uniz/types` instead of local copies.
    *   Update `package.json` in services to depend on `"@uniz/types": "*"`.

**Risk**: Moderate. Requires editing service code. 
**Mitigation**: Done on a feature branch (`chore/monorepo-refactor`). No merge to `main` until tests pass.

---

## Phase 3: The "Grand Unification" (Git Consolidation)
*Objective: Move from Submodules to a Single Git Tree.*

*This is the big shift. Currently, Vercel pulls from individual Git repos. To use Turbo fully on Vercel, we must eventually switch Vercel to pull from the Root Repo.*

**Zero-Deployment Strategy:**
1.  **De-Submodule**: Remove `.git` folders from `uniz-*` directories. Commit files directly to Root Repo.
2.  **Vercel Configuration (Shadow Project)**:
    *   Create *new* Vercel projects (e.g., `uniz-auth-v2`) connected to the **Root Repo**.
    *   Configure "Root Directory" to `uniz-auth-service`.
    *   Deploy and test these shadow projects.
3.  **The Switch**:
    *   Once Shadow Projects are verified green, swap domains.
    *   Delete old Vercel projects connected to the old individual repos.

---

## Immediate Action Items (Safe Start)

We can perform **Phase 1** immediately with zero risk to production.

1.  [ ] Add `turbo` to root `package.json`.
2.  [ ] Create `turbo.json`.
3.  [ ] Configure `workspaces` in root.
4.  [ ] Run broad `npm install` to link everything.

Shall we proceed with **Phase 1**?
