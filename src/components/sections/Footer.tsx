import { siteContent } from '@/data/content'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-parchment">
      <div className="grain-overlay" aria-hidden />
      <div className="container relative z-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="font-display text-2xl font-medium text-ink">{siteContent.meta.brandName}</p>
            <p className="mt-2 text-sm font-medium text-terracotta">{siteContent.meta.brandTagline}</p>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-muted">
              {siteContent.footer.description}
            </p>
            <div className="mt-6 flex gap-2" role="list">
              {siteContent.contact.social.facebook && (
                <a
                  href={siteContent.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-forest hover:bg-forest hover:text-cream"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              )}
              {siteContent.contact.social.twitter && (
                <a
                  href={siteContent.contact.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                  className="flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-forest hover:bg-forest hover:text-cream"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
              {siteContent.contact.social.instagram && (
                <a
                  href={siteContent.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-forest hover:bg-forest hover:text-cream"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {siteContent.contact.social.linkedin && (
                <a
                  href={siteContent.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                  className="flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-forest hover:bg-forest hover:text-cream"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              {siteContent.contact.social.youtube && (
                <a
                  href={siteContent.contact.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe on YouTube"
                  className="flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-forest hover:bg-forest hover:text-cream"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-ink-faint">Navigate</h4>
            <ul className="space-y-3">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[15px] font-medium text-ink-muted transition-colors hover:text-terracotta">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-ink-faint">Programs</h4>
            <ul className="space-y-3">
              {siteContent.footer.services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-[15px] font-medium text-ink-muted transition-colors hover:text-terracotta">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-ink-faint">Reach us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                <p className="text-[15px] leading-relaxed text-ink-muted">{siteContent.contact.location}</p>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                <div className="space-y-1">
                  {siteContent.contact.mobile.map((mobile) => (
                    <a
                      key={mobile}
                      href={`tel:${mobile.replace(/\s/g, '')}`}
                      className="block cursor-pointer text-[15px] font-medium text-ink-muted transition-colors hover:text-terracotta"
                    >
                      {mobile}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                <div className="space-y-1">
                  {siteContent.contact.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block cursor-pointer text-[15px] font-medium text-ink-muted transition-colors hover:text-terracotta"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="editorial-divider my-12" />

        <div className="max-w-xl">
          <h4 className="font-display text-lg font-medium text-ink">Stay updated</h4>
          <p className="mt-2 text-[15px] text-ink-muted">
            Subscribe for program updates, workshops, and language initiatives.
          </p>
          <div className="mt-5">
            <NewsletterForm />
          </div>
        </div>

        <div className="editorial-divider my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} {siteContent.meta.orgLegalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-medium transition-colors hover:text-terracotta">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-medium transition-colors hover:text-terracotta">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
