@AGENTS.md

# Working on this repository

## Start from the latest work, not just `main`

Changes for this site are often made in separate Claude sessions, each on its own `claude/*` branch, and not every branch has been merged into `main`. Before editing anything:

1. Run `git fetch origin` and, for every remote branch, `git log --oneline HEAD..origin/<branch>` to find commits that are not on your branch.
2. If any branch has website changes you don't have, tell the user which commits they are and bring them in (merge) before starting. Do not build on top of an older version of the site.
3. `claude/upbeat-gates-qobdbb` holds unrelated skill files (Remotion / client-website skills). It is not part of the website and must not be merged.

When a piece of work is finished, suggest merging its branch into `main` so the next session starts from it.

## Checks

- `npm run typecheck` and `npm run lint` must pass before pushing.
- `next dev` writes `next-env.d.ts` with dev-only paths; restore it (`git checkout -- next-env.d.ts`) instead of committing it.
