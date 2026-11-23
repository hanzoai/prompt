import test from 'node:test';
import assert from 'node:assert/strict';
import {
  HANZO_PROMPT,
  HANZO_RULES,
  HANZO_SKILLS_INDEX_URL,
  HANZO_MCP_URL,
  buildHanzoPrompt,
} from './index.mjs';

test('exports canonical # Hanzo Rules prompt', () => {
  assert.equal(HANZO_PROMPT, HANZO_RULES);
  assert.ok(HANZO_PROMPT.startsWith('# Hanzo Rules'));
  for (const heading of [
    '**Voice**',
    '**Workflow**',
    '**Naming**',
    '**Stack**',
    '**Skills & MCP**',
    '**Endpoints**',
    '**Auth**',
    '**SuperAdmin**',
    '**Secrets**',
    '**Infra**',
    '**Unified lifecycle**',
    '**Data**',
    '**Lux**',
    '**Networks**',
    '**Docs**',
    '**Estate**',
    '**Browser MCP**',
  ]) {
    assert.ok(HANZO_PROMPT.includes(heading), `missing section ${heading}`);
  }
  assert.ok(HANZO_PROMPT.includes('hanzoskills.com/llms.txt'));
  assert.ok(HANZO_PROMPT.includes('Hanzo MCP'));
});

test('buildHanzoPrompt appends runtime surface, MCP, environments, and skills', () => {
  const out = buildHanzoPrompt({
    surface: 'Hanzo Desktop',
    mcpUrl: HANZO_MCP_URL,
    environments: ['ra (online)', 'dgx (online)'],
    skills: [{ slug: 'hanzo-app', url: 'https://hanzoskills.com/hanzo-app.md', description: 'Hanzo App guide' }],
  });
  assert.ok(out.includes('# Hanzo Rules'));
  assert.ok(out.includes('Runtime surface: Hanzo Desktop.'));
  assert.ok(out.includes(`Hanzo MCP: ${HANZO_MCP_URL}.`));
  assert.ok(out.includes('Connected environments: ra (online); dgx (online).'));
  assert.ok(out.includes(HANZO_SKILLS_INDEX_URL));
  assert.ok(out.includes('$hanzo-app'));
});
