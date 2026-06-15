# SCEFFCOM CONSULT — Next.js site

Clone of the [kasatumi-nextjs](https://github.com/isaackumi/language-watch-foundation) stack, branded for **SCEFFCOM CONSULT** (Strategic Context & Effective Communication).

## Quick start

```bash
cd /Users/isaackumi/devel/sceffcom-nextjs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy and adjust:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (sitemap, OG, JSON-LD). Default: `https://sceffcom.com` |

## Content & branding

Edit **`src/data/content.ts`** — hero, about, services, team, contact, footer.

Site URL helper: **`src/lib/site.ts`**.

## Fonts

- **Body:** system UI stack (no Google Fonts at build time).
- **Headings:** **Bagoss Condensed** — local files in `public/fonts/bagoss-font-family/` (`@font-face` in `src/app/globals.css`).

## 21st.dev (dev toolbar)

1. `npm install` (includes `@21st-extension/toolbar-next` + `@21st-extension/react`).
2. Install VS Code extension: **`21st-dev.21st-extension`** (see `.vscode/extensions.json`).
3. Run `npm run dev` — toolbar loads via `src/components/dev/DevTwentyFirstToolbar.tsx`.
4. Select elements (e.g. `#hero__21st`) and send edits to Cursor.

## Cursor rules & UI skill

- **Rule:** `.cursor/rules/sceffcom-nextjs-ui.mdc` (design system, stack, 21st workflow).
- **UI UX Pro Max skill:** run once if missing:

```bash
./scripts/install-ui-skill.sh
```

Then from repo root:

```bash
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "consulting training professional" --design-system -p "SCEFFCOM"
```

## Images

Replace placeholders under `public/images/` (hero slides reference `out1.jpeg`, `out2.jpeg`, `twi1.png`).

## Build

```bash
npm run build
npm run start
```

## Related

- **LWF site:** `/Users/isaackumi/devel/kasatumi-nextjs`
- **This site:** `/Users/isaackumi/devel/sceffcom-nextjs`
