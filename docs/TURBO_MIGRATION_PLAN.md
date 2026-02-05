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

## Phase 2: Shared Libraries (Started & Proven)
*   **Completed**:
    *   Created `@uniz/shared` workspace in `packages/shared`.
    *   Synchronized `UserRole` enums to ensure no data loss.
    *   Refactored `uniz-auth-service` to consume `@uniz/shared`.
    *   Verified `npx turbo run build` works for Auth + Shared.

## Phase 3: The "Grand Unification" (In Progress)
*   **Completed**:
    *   De-submoduled `uniz-auth-service` and `uniz-shared`.
    *   Committed changes to Root Repo (git push pending network).
*   **Next Steps (For You)**:
    1.  **De-submodule the rest**: Run `git rm --cached uniz-XXX`, `rm -rf uniz-XXX/.git`, `git add uniz-XXX` for user, cron, etc.
    2.  **Push**: Ensure the git push completes.
    3.  **Vercel Migration**:
        *   Create **New Project** in Vercel.
        *   Import `uniz-rguktong` (Root Repo).
        *   **Root Directory**: Set to `uniz-auth-service` (for the Auth project).
        *   **Framework**: Next.js (or Other).
        *   Deploy!
        *   *Repeat for each service.*

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
