#!/usr/bin/env sh
# Install the canonical Hanzo system prompt (`# Hanzo Rules`) to ~/.hanzo/PROMPT.md.
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/hanzoai/prompt/main/install.sh | sh
#   curl -fsSL https://raw.githubusercontent.com/hanzoai/prompt/main/install.sh | sh -s -- --print
set -eu

RAW_URL="${HANZO_PROMPT_URL:-https://raw.githubusercontent.com/hanzoai/prompt/main/PROMPT.md}"
DEST="${HANZO_PROMPT_PATH:-$HOME/.hanzo/PROMPT.md}"

if [ "${1:-}" = "--print" ]; then
  curl -fsSL "$RAW_URL"
  exit 0
fi

mkdir -p "$(dirname "$DEST")"
TMP="$DEST.tmp.$$"
curl -fsSL "$RAW_URL" -o "$TMP"
mv -f "$TMP" "$DEST"
printf "Installed Hanzo prompt to %s\n" "$DEST"
printf "Progressive skills index: https://hanzoskills.com/llms.txt\n"
printf "Hanzo MCP endpoint:       https://api.hanzo.ai/v1/mcp\n"
