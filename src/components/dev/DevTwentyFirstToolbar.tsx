'use client'

import { TwentyFirstToolbar } from '@21st-extension/toolbar-next'
import { ReactPlugin } from '@21st-extension/react'

const isDev = process.env.NODE_ENV === 'development'

/**
 * 21st.dev toolbar — select elements in the running app and send structured UI edits to your editor AI.
 *
 * Requirements:
 * - Install the **21st** VS Code extension (`21st-dev.21st-extension` — see `.vscode/extensions.json`).
 * - Run `npm run dev`, then use the toolbar / Command Palette → setup if prompted.
 *
 * Only loads in development so production stays clean.
 */
export function DevTwentyFirstToolbar() {
  if (!isDev) return null

  return (
    <TwentyFirstToolbar
      config={{
        plugins: [ReactPlugin],
      }}
      enabled
    />
  )
}
