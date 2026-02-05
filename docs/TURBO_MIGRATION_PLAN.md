# UniZ TurboRepo Migration Plan (Zero-Downtime Strategy)

## Executive Summary
This plan details the conversion of the current "Meta-Repo" (folder of independent repositories) into a high-performance **Turborepo Monorepo**. 

**Primary Goal**: Enable shared types, unified config, and parallel execution.
**Strict Constraint**: Ensure NO downtime and NO accidental redeployments on Vercel during the migration phase.

---

## Phase 1: Local Orchestration Layer (Done)
*   **Completed**:
    *   Initialized Turbo in Root.
    *   Created `turbo.json`.
    *   Configured `workspaces` in `package.json`.
    *   `npm install` verified hoisting working.

## Phase 2: Shared Libraries (Advanced Status)
*   **Completed**:
    *   Created `@uniz/shared` workspace in `packages/shared`.
    *   Synchronized `UserRole` enums and `JwtPayload` schema.
    *   **Refactored Services**:
        *   `uniz-auth-service`: Fully Migrated.
        *   `uniz-user-service`: Fully Migrated.
        *   `uniz-outpass-service`: Fully Migrated.
    *   rebuilt `@uniz/shared` to ensure types are fresh.

## Phase 3: The "Grand Unification" (Advanced Status)
*   **Completed**:
    *   De-submoduled: `auth`, `user`, `outpass`, `production-gateway`, `infra`, `shared`.
    *   Committed changes to Root Repo.
*   **Next Steps (Immediate)**:
    1.  **Refactor Remaining Services**: `academics`, `mail`, `notification`, `cron`.
        *   Add `@uniz/shared` dependency.
        *   Update imports: `import ... from '@uniz/shared'`.
        *   Delete `src/shared`.
        *   Remove `.git` folder.
    2.  **Push**: Execute `git push origin main` (retry if timeout).
    3.  **Vercel Migration**: Create new projects pointing to Root Repo structure.

## Deployment Guide
1.  **Vercel Dashboard** -> Add New Project -> Import `uniz-rguktong`.
2.  **Configuration**:
    *   Project Name: `uniz-auth-service` (match your old name if swapping).
    *   **Root Directory**: `uniz-auth-service`.
    *   Framework Preset: Next.js (or Other).
    *   Build Command: `cd .. && npx turbo run build --filter=uniz-auth-service` (Vercel automatic detection handles this usually, just select Root Directory).
3.  **Environment Variables**: Copy from old project.
4.  **Repeat** for all services.


## Why this is better?
*   **One Git Repo**: No more `push_all.sh` or confusing submodules.
*   **Smart Rebuilds**: Changing `@uniz/shared` automatically triggers redeploys for all apps on Vercel.
*   **Shared Code**: Real type safety across microservices.


---

## Immediate Action Items (Safe Start)

We can perform **Phase 1** immediately with zero risk to production.

1.  [ ] Add `turbo` to root `package.json`.
2.  [ ] Create `turbo.json`.
3.  [ ] Configure `workspaces` in root.
4.  [ ] Run broad `npm install` to link everything.

Shall we proceed with **Phase 1**?
