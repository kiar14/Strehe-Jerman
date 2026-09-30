@AGENTS.md

## Before editing

Work is spread across `claude/*` branches that aren't always merged into `main`. Run `git fetch origin` and `git log --oneline HEAD..origin/<branch>` for each branch; if one has website changes you don't have, tell the user and merge it first. Skip `claude/upbeat-gates-qobdbb` (unrelated skill files, never merge).

## Before pushing

- `npm run typecheck` and `npm run lint` must pass.
- Don't commit the `next-env.d.ts` change that `next dev` makes (`git checkout -- next-env.d.ts`).
