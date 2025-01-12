# ianvs-prettier-plugin-sort-imports-bug

## Environment

- Node: 22.12.0
- pnpm: 9.15.2

## Steps to Reproduce

1. `pnpm install`
1. `pnpm without-plugin`: Prettier throws much more helpful error
1. `pnpm with-plugin`: Plugin throws an error that's not particularly helpful

![Screenshot of reproduction](screenshot.png)
