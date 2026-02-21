# Sirr Web — Claude Development Guide

## Purpose

Self-hostable browser UI for Sirr. Talks directly to a Sirr server via its HTTP API.
No server-side rendering required — can be served as a static site.

## Stack (TBD)

Likely: SvelteKit or Next.js + Tailwind. Decide before starting implementation.

## Key Constraints

- Never display secret values in the UI (list endpoint returns metadata only — enforce this)
- Never cache or persist secret values in localStorage, sessionStorage, or service workers
- SIRR_SERVER and SIRR_TOKEN are runtime config (env vars or a config endpoint) — not baked into the build
- The app is a thin client for the Sirr HTTP API — no additional backend

## Config

```
SIRR_SERVER=http://localhost:8080
SIRR_TOKEN=your-master-key
```

## Pre-Commit Checklist

Before every commit and push, review and update if needed:

1. **README.md** — Does it reflect new features, config, or setup steps?
2. **CLAUDE.md** — New constraints or stack decisions worth recording?
