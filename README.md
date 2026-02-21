# Sirr Web

Web app for [Sirr](https://github.com/SirrVault/sirr) — a browser UI for managing ephemeral secrets.

> Work in progress.

## What This Is

A minimal self-hostable web UI that sits in front of a Sirr server instance.
Point it at your server and you get a browser-based interface to push, view,
and delete secrets — useful for teams that don't want to install the CLI.

## Features (planned)

- Push secrets with TTL and read-count controls
- List active secrets (metadata only — values never shown)
- Delete / burn secrets manually
- Visual expiry countdown per secret
- Dark mode

## Development

```bash
npm install
npm run dev
```

## Related

- [SirrVault/sirr](https://github.com/SirrVault/sirr) — server (required backend)
- [SirrVault/cli](https://github.com/SirrVault/cli) — CLI alternative
