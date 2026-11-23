export declare const HANZO_PROMPT_REPO: string;
export declare const HANZO_PROMPT_RAW_URL: string;
export declare const HANZO_SKILLS_INDEX_URL: string;
export declare const HANZO_MCP_URL: string;
export declare const HANZO_PROMPT: string;
export declare const HANZO_RULES: string;

export interface HanzoPromptSkill {
  readonly slug: string;
  readonly url: string;
  readonly description: string;
}

export interface BuildHanzoPromptOptions {
  readonly surface?: string;
  readonly mcpUrl?: string;
  readonly environments?: readonly string[];
  readonly skills?: readonly HanzoPromptSkill[];
  readonly extra?: string;
}

export declare function buildHanzoPrompt(opts?: BuildHanzoPromptOptions): string;
