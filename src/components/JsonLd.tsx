import { siteContent } from '@/data/content'
import { siteUrl } from '@/lib/site'

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteContent.meta.brandName,
    description: siteContent.meta.description,
    url: siteUrl,
    logo: `${siteUrl}${siteContent.meta.logo}`,
    email: siteContent.contact.email,
    telephone: siteContent.contact.mobile.map((n) => n.replace(/\s/g, '')),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteContent.contact.location,
      addressLocality: 'Accra',
      addressCountry: 'GH',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: siteContent.meta.parentOrg,
      url: `https://${siteContent.contact.websites[0]}`,
    },
    sameAs: [
      ...siteContent.contact.websites.map((w) => `https://${w}`),
      siteContent.contact.social.facebook,
      siteContent.contact.social.twitter,
      siteContent.contact.social.instagram,
      siteContent.contact.social.linkedin,
      siteContent.contact.social.youtube,
    ].filter(Boolean),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
