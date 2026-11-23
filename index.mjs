import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));

export const HANZO_PROMPT_REPO = 'https://github.com/hanzoai/prompt';
export const HANZO_PROMPT_RAW_URL = 'https://raw.githubusercontent.com/hanzoai/prompt/main/PROMPT.md';
export const HANZO_SKILLS_INDEX_URL = 'https://hanzoskills.com/llms.txt';
export const HANZO_MCP_URL = 'https://api.hanzo.ai/v1/mcp';

export const HANZO_PROMPT = readFileSync(join(HERE, 'PROMPT.md'), 'utf8').trim();
export const HANZO_RULES = HANZO_PROMPT;

/**
 * Compose the canonical Hanzo system prompt with optional runtime surface,
 * MCP endpoint, connected environments, and progressively matched skills.
 */
export function buildHanzoPrompt(opts = {}) {
  const parts = [HANZO_PROMPT];
  const extras = [];
  if (opts.surface) extras.push(`Runtime surface: ${opts.surface}.`);
  if (opts.mcpUrl) extras.push(`Hanzo MCP: ${opts.mcpUrl}.`);
  if (Array.isArray(opts.environments) && opts.environments.length > 0) {
    extras.push(`Connected environments: ${opts.environments.join('; ')}.`);
  }
  if (Array.isArray(opts.skills) && opts.skills.length > 0) {
    extras.push(
      `Matched skills (${HANZO_SKILLS_INDEX_URL}):\n` +
        opts.skills.map((s) => `- $${s.slug} (${s.url}): ${s.description}`).join('\n'),
    );
  }
  if (opts.extra) extras.push(String(opts.extra).trim());
  if (extras.length > 0) parts.push(extras.join('\n'));
  return parts.join('\n\n');
}
