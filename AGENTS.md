# Repository Guidelines

This repository is a container for skill directories pulled from upstream projects via `git subtree`. Treat it as a mirror: do not edit skill contents here; only sync from upstream and arrange under `skills/`.

## Project Structure
- Root `skills/` hosts all imported skills as `skills/<skill-name>`.
- Current subtrees:
  - `skills/dev-browser`: upstream from `SawyerHood/dev-browser` (`skills/dev-browser` path).
  - `skills/ast-grep`: docs subtree from `ast-grep/claude-skill` (`ast-grep` path).
- Add new skills by creating a remote and merging the desired upstream subdirectory into `skills/<name>`.

## Setup After Clone
- Add upstream remotes (once per clone):
  ```
  git remote add dev-browser https://github.com/SawyerHood/dev-browser.git
  git remote add ast-grep https://github.com/ast-grep/claude-skill.git
  ```
- Fetch upstreams before running the subtree workflow:
  ```
  git fetch dev-browser ast-grep
  ```

## Subtree Update Workflow (preserve upstream history, no squash)
- dev-browser (`skills/dev-browser`):
  ```
  git fetch dev-browser
  git switch --detach dev-browser/main
  git subtree split --prefix=skills/dev-browser --branch dev-browser-skills
  git switch main
  git subtree merge --prefix=skills/dev-browser dev-browser-skills
  ```
- ast-grep (`skills/ast-grep`):
  ```
  git fetch ast-grep
  git switch --detach ast-grep/main
  git subtree split --prefix=ast-grep --branch ast-grep-skill
  git switch main
  git subtree merge --prefix=skills/ast-grep ast-grep-skill
  ```
- New skill template:
  ```
  git remote add <name> <url>
  git fetch <name>
  git switch --detach <name>/<branch>
  git subtree split --prefix=<upstream/subdir> --branch <name>-split
  git switch main
  git subtree merge --prefix=skills/<name> <name>-split
  ```
  Keep the split branch for reuse or delete and recreate on each sync.

## Commit & PR Guidelines
- Purpose: record subtree syncs and directory moves only; avoid manual code edits in `skills/`.
- Commit messages: `chore: sync <skill> from upstream <branch> <date>` works well.
- PRs (if any): include the upstream ref/tag/commit hash and commands used to sync. No screenshots or local test steps are expected because code is mirrored, not developed here.
