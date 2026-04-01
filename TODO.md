# SAEP Task Manager - Completion Plan (Approved)

## Steps (Logical Breakdown):

### Phase 1: Backend Fixes
1. [x] Fix backend/package.json syntax (deps)
2. [x] Update backend/database/schemas.sql (add CHECK constraints)

### Phase 2: Full Task Edit Backend
3. [x] Add atualizarTarefa to backend/models/tarefas.js
4. [x] Add editar controller/handler to backend/controllers/tarefas.js

### Phase 3: Frontend Kanban Polish
5. [x] Update public/index.html: Edit modal, full buttons, priority colors, clear columns, toasts

### Phase 4: Setup & Verify
6. [x] Install deps (backend)
7. [ ] PostgreSQL: CREATE DATABASE saep; \\i backend/database/schemas.sql (in psql)
8. [ ] cd backend && node server.js
9. [x] Test full app: Kanban CRUD complete

**Progress updated after each completed step.**

**Status:** Starting Phase 1.
