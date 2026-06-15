import { siteContent } from '@/data/content'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-amber-500 bg-neutral-950 text-neutral-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_0%_100%,rgba(178,74,50,0.12),transparent_50%)]" />
      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <h3 className="font-heading text-3xl font-semibold tracking-tight text-white">
              {siteContent.meta.brandName}
            </h3>
            <p className="text-xl font-semibold text-primary-400">{siteContent.meta.brandTagline}</p>
            <p className="max-w-md text-lg leading-relaxed text-stone-300">{siteContent.footer.description}</p>
            <p className="text-base italic text-stone-400">{siteContent.meta.brandTagline}</p>
            <div className="flex gap-3 pt-4" role="list">
              {siteContent.contact.social.facebook && (
                <a
                  href={siteContent.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/5 p-3 text-white transition-colors hover:border-amber-400/50 hover:bg-amber-500 hover:text-neutral-950"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              )}
              {siteContent.contact.social.twitter && (
                <a
                  href={siteContent.contact.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                  className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/5 p-3 text-white transition-colors hover:border-amber-400/50 hover:bg-amber-500 hover:text-neutral-950"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              )}
              {siteContent.contact.social.instagram && (
                <a
                  href={siteContent.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/5 p-3 text-white transition-colors hover:border-amber-400/50 hover:bg-amber-500 hover:text-neutral-950"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              )}
              {siteContent.contact.social.linkedin && (
                <a
                  href={siteContent.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                  className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/5 p-3 text-white transition-colors hover:border-amber-400/50 hover:bg-amber-500 hover:text-neutral-950"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
              {siteContent.contact.social.youtube && (
                <a
                  href={siteContent.contact.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe on YouTube"
                  className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/5 p-3 text-white transition-colors hover:border-amber-400/50 hover:bg-amber-500 hover:text-neutral-950"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-8 font-heading text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-5">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-lg font-semibold text-stone-300 transition-colors hover:text-primary-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 font-heading text-xl font-semibold text-white">Our Services</h4>
            <ul className="space-y-5">
              {siteContent.footer.services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-lg font-semibold text-stone-300 transition-colors hover:text-primary-400">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 font-heading text-xl font-semibold text-white">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary-400" />
                <div>
                  <p className="text-lg font-semibold text-stone-200">{siteContent.contact.location}</p>
                  {siteContent.contact.address && (
                    <p className="text-stone-400">{siteContent.contact.address}</p>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-primary-400" />
                <div className="space-y-2">
                  {siteContent.contact.mobile.map((mobile) => (
                    <a
                      key={mobile}
                      href={`tel:${mobile.replace(/\s/g, '')}`}
                      className="block cursor-pointer text-lg font-semibold text-stone-200 transition-colors hover:text-primary-400"
                    >
                      {mobile}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-6 w-6 shrink-0 text-primary-400" />
                <div className="space-y-1">
                  {siteContent.contact.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block cursor-pointer text-lg font-semibold text-stone-200 transition-colors hover:text-primary-400"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="max-w-2xl">
            <h4 className="mb-4 font-heading text-2xl font-semibold text-white">Stay Updated</h4>
            <p className="mb-6 text-lg text-stone-300">
              Subscribe to our newsletter for updates on our programs, workshops, and language initiatives.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-lg font-semibold text-stone-400">
              © {new Date().getFullYear()} {siteContent.meta.orgLegalName}. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="/privacy" className="font-semibold text-stone-400 transition-colors hover:text-primary-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-semibold text-stone-400 transition-colors hover:text-primary-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
