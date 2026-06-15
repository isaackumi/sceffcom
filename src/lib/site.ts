import { siteContent } from '@/data/content'

/** Canonical site URL — override with NEXT_PUBLIC_SITE_URL in .env.local */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? siteContent.meta.siteUrl

export const siteName = siteContent.meta.title
