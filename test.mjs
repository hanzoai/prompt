import assert from 'node:assert/strict'
import test from 'node:test'
import {
  HANZO_MCP_URL,
  HANZO_PROMPT,
  HANZO_SKILLS_INDEX_URL,
  buildHanzoPrompt,
} from './index.mjs'

test('HANZO_PROMPT exposes canonical Hanzo Rules with 19 MCP tools and progressive skills', () => {
  assert.ok(HANZO_PROMPT.startsWith('# Hanzo Rules'))
  for (const section of [
    '## Voice',
    '## Workflow',
    '## Portability',
    '## Hanzo Setup',
    '## MCP — 19 Canonical Tools',
    '## Skills',
    '## Code',
    '## AI',
    '## API',
    '## IAM',
    '## Secrets',
    '## Source',
    '## Fleet',
    '## Data',
    '## Lux',
    '## Docs',
    '## Validation',
    '## Ship',
  ]) {
    assert.ok(HANZO_PROMPT.includes(section), `missing section: ${section}`)
  }
  for (const tool of [
    '`fs`',
    '`exec`',
    '`code`',
    '`git`',
    '`fetch`',
    '`workspace`',
    '`browser`',
    '`computer`',
    '`ui`',
    '`kai`',
    '`think`',
    '`plan`',
    '`memory`',
    '`tasks`',
    '`tracker`',
    '`coding`',
    '`research`',
    '`skills`',
    '`hanzo`',
  ]) {
    assert.ok(HANZO_PROMPT.includes(tool), `missing canonical MCP tool: ${tool}`)
  }
  assert.ok(HANZO_PROMPT.includes('https://hanzoskills.com'))
  assert.ok(HANZO_PROMPT.includes('npx -y hanzo mcp'))
  assert.ok(!HANZO_PROMPT.includes('Ilove'), 'must not contain bootstrap credentials')
  assert.equal(HANZO_SKILLS_INDEX_URL, 'https://hanzoskills.com/llms.txt')
  assert.equal(HANZO_MCP_URL, 'https://api.hanzo.ai/v1/mcp')
})

test('buildHanzoPrompt appends extra context without mutating canonical rules', () => {
  const combined = buildHanzoPrompt({ surface: 'Hanzo CLI', extra: 'Verify live.' })
  assert.ok(combined.startsWith('# Hanzo Rules'))
  assert.ok(combined.includes('Runtime surface: Hanzo CLI.'))
  assert.ok(combined.endsWith('Verify live.'))
})
