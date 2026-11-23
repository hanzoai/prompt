# `@hanzo/prompt`

Canonical unified system prompt (`# Hanzo Rules`) for **Hanzo App** (Web, Desktop, Mobile), **Hanzo CLI** (`hanzo`), **Hanzo MCP** (19 canonical tools), and any MCP-compatible AI coding agent.

- **Single source of truth**: [`PROMPT.md`](./PROMPT.md)
- **Portable MCP server**: `npx -y hanzo mcp` (19 canonical tools: `fs`, `exec`, `code`, `git`, `fetch`, `workspace`, `browser`, `computer`, `ui`, `kai`, `think`, `plan`, `memory`, `tasks`, `tracker`, `coding`, `research`, `skills`, `hanzo`)
- **Progressive skill discovery**: [`https://hanzoskills.com/llms.txt`](https://hanzoskills.com/llms.txt) (`skills search/detect → get → apply`, never bulk-loaded upfront)
- **Onboarding**: [`https://hanzoskills.com/hanzo.md`](https://hanzoskills.com/hanzo.md)

## Install

```sh
curl -fsSL https://raw.githubusercontent.com/hanzoai/prompt/main/install.sh | sh
```

Writes `~/.hanzo/PROMPT.md`. Or via Hanzo CLI:

```sh
hanzo prompt install --refresh
hanzo prompt show
hanzo prompt skills deploy
```

## JavaScript / TypeScript

```ts
import { HANZO_PROMPT, buildHanzoPrompt } from '@hanzo/prompt'

const system = buildHanzoPrompt('Surface: Hanzo Desktop')
```

## MCP Client Config

```json
{
  "mcpServers": {
    "hanzo": {
      "command": "npx",
      "args": ["-y", "hanzo", "mcp"]
    }
  }
}
```

Use `npx.cmd` on Windows when the client requires the executable wrapper.

## License

BSD-3-Clause — see [`LICENSE`](./LICENSE).
