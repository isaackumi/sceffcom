import { siteContent } from '@/data/content'
import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import NewsletterForm from './NewsletterForm'
import SiteLogo from '@/components/ui/SiteLogo'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-midnight text-stone">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <SiteLogo size="md" showName={false} className="[&_img]:ring-2 [&_img]:ring-gold/30" />
            <p className="mt-4 font-display text-2xl font-medium text-stone md:text-3xl">
              {siteContent.meta.brandName}
            </p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-gold-light">
              {siteContent.meta.brandTagline}
            </p>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-stone/90">
              {siteContent.footer.description}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="label-gold mb-5 !text-gold-light">Navigate</p>
            <ul className="space-y-3">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-stone/90 transition-colors hover:text-gold-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label-gold mb-5 !text-gold-light">Programs</p>
            <ul className="space-y-3">
              {siteContent.footer.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-base font-medium text-stone/90 transition-colors hover:text-gold-light"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label-gold mb-5 !text-gold-light">Reach us</p>
            <ul className="space-y-4 text-base text-stone/90">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{siteContent.contact.location}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="space-y-1">
                  {siteContent.contact.mobile.map((m) => (
                    <a key={m} href={`tel:${m.replace(/\s/g, '')}`} className="block hover:text-gold-light">
                      {m}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="space-y-1">
                  {siteContent.contact.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block hover:text-gold-light">
                      {e}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-12 h-px bg-stone/10" />

        <div className="max-w-lg">
          <p className="font-display text-2xl text-stone md:text-3xl">Stay updated</p>
          <p className="mt-2 text-base text-stone/85">Program updates, workshops, and language initiatives.</p>
          <div className="mt-5">
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-stone/20 pt-8 text-base text-stone/80 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {siteContent.meta.orgLegalName}</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-gold-light">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gold-light">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
