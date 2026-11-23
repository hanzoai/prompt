# hanzoai/prompt

Canonical unified system prompt (`# Hanzo Rules`) shared by **Hanzo App** (Web, Desktop, Mobile), **Hanzo CLI** (`hanzoai/cli`), **Hanzo MCP**, and any agent runtime.

Designed for progressive skill discovery through **[hanzoskills.com](https://hanzoskills.com)** (`https://hanzoskills.com/llms.txt`, backed by `hanzoai/skills`) instead of loading all skills upfront.

## Install

### Shell / CLI

```sh
curl -fsSL https://raw.githubusercontent.com/hanzoai/prompt/main/install.sh | sh
```

Writes the canonical prompt to `~/.hanzo/PROMPT.md`. Or via Hanzo CLI:

```sh
hanzo prompt          # print canonical prompt
hanzo prompt install  # write ~/.hanzo/PROMPT.md
```

### Node / TypeScript (`@hanzo/prompt`)

```sh
pnpm add github:hanzoai/prompt
```

```ts
import { HANZO_PROMPT, buildHanzoPrompt } from '@hanzo/prompt';

const system = buildHanzoPrompt({
  surface: 'Hanzo Desktop',
  mcpUrl: 'https://api.hanzo.ai/v1/mcp',
});
```

### Direct Raw Fetch

```sh
curl -fsSL https://raw.githubusercontent.com/hanzoai/prompt/main/PROMPT.md
```

## Progressive Skills & MCP

- **Skills index**: `https://hanzoskills.com/llms.txt` — agents match only the specific `$skill` markdown needed for the current task.
- **Hanzo MCP**: `https://api.hanzo.ai/v1/mcp` + local `hanzo-mcp` / ZAP peers (`zsh/exec`, `fs`, `git`, `curl`, `browser/playwright`, `lsp`, `mcp__hanzo__agent`).

## Prompt Source

See [PROMPT.md](./PROMPT.md).
