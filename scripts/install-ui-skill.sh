#!/usr/bin/env bash
# Install UI UX Pro Max skill into .cursor/skills (from sibling kasatumi clone or upstream)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SKILL_DIR="$ROOT/.cursor/skills/ui-ux-pro-max"
KASATUMI_SKILL="/Users/isaackumi/devel/kasatumi-nextjs/.cursor/skills/ui-ux-pro-max"

if [[ -d "$SKILL_DIR" ]]; then
  echo "Skill already present at $SKILL_DIR"
  exit 0
fi

mkdir -p "$ROOT/.cursor/skills"

if [[ -d "$KASATUMI_SKILL" ]]; then
  echo "Copying skill from kasatumi-nextjs..."
  cp -R "$KASATUMI_SKILL" "$SKILL_DIR"
  exit 0
fi

echo "Cloning ui-ux-pro-max-skill from GitHub..."
git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git /tmp/ui-ux-pro-max-skill
mkdir -p "$SKILL_DIR"
cp -R /tmp/ui-ux-pro-max-skill/. "$SKILL_DIR/"
rm -rf /tmp/ui-ux-pro-max-skill
echo "Installed to $SKILL_DIR"
