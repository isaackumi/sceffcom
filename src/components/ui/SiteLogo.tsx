import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/data/content'
import { cn } from '@/lib/utils'

type SiteLogoProps = {
  size?: 'sm' | 'md' | 'lg'
  showName?: boolean
  className?: string
  linked?: boolean
}

const sizeMap = {
  sm: { px: 44, img: 'h-11 w-11', text: 'text-xl sm:text-2xl' },
  md: { px: 64, img: 'h-16 w-16 md:h-20 md:w-20', text: 'text-2xl md:text-3xl' },
  lg: { px: 96, img: 'h-24 w-24 md:h-28 md:w-28', text: 'text-3xl md:text-4xl' },
} as const

export default function SiteLogo({
  size = 'sm',
  showName = true,
  className,
  linked = true,
}: SiteLogoProps) {
  const { px, img, text } = sizeMap[size]

  const content = (
    <>
      <Image
        src={siteContent.meta.logo}
        alt={siteContent.meta.logoAlt}
        width={px}
        height={px}
        className={cn('shrink-0 rounded-full object-cover', img)}
        priority={size === 'sm'}
      />
      {showName && (
        <span className={cn('font-display font-semibold tracking-tight text-midnight', text)}>
          {siteContent.meta.navShort}
        </span>
      )}
    </>
  )

  const wrapperClass = cn('flex min-w-0 items-center gap-3', className)

  if (!linked) {
    return <div className={wrapperClass}>{content}</div>
  }

  return (
    <Link href="/" className={wrapperClass} aria-label={siteContent.meta.brandName}>
      {content}
    </Link>
  )
}
