import { useEffect } from 'react'
import { company } from '../data/company'

/**
 * Seo sets the document title, meta description, canonical URL,
 * Open Graph tags, Twitter card metadata, and JSON-LD structured data.
 */
export default function Seo({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${company.name}`
      : `${company.name} — Trading, Distribution & Channel Partners`
    const metaDescription = description || company.shortDescription
    const canonicalUrl = `https://aggroupco.in${path}`

    document.title = fullTitle

    // Meta description
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = metaDescription

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    // Open Graph tags
    const ogTags = {
      'og:title': fullTitle,
      'og:description': metaDescription,
      'og:type': 'website',
      'og:url': canonicalUrl,
      'og:image': '/images/branding/logo.jpeg',
      'og:site_name': company.name,
    }
    for (const [property, content] of Object.entries(ogTags)) {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    // Twitter card tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': metaDescription,
      'twitter:image': '/images/branding/logo.jpeg',
    }
    for (const [name, content] of Object.entries(twitterTags)) {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    // JSON-LD structured data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: company.name,
      url: 'https://aggroupco.in',
      logo: '/images/branding/logo.jpeg',
      description: company.shortDescription,
      foundingDate: '2023',
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.line1 + ', ' + company.address.line2,
        addressLocality: 'Budgam',
        postalCode: '191111',
        addressRegion: 'Jammu & Kashmir',
        addressCountry: 'IN',
      },
      telephone: company.phone,
      email: company.email,
      sameAs: [company.social.facebook, company.social.instagram],
    }

    let script = document.querySelector('script[data-seo-jsonld]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-jsonld', '')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(jsonLd)
  }, [title, description, path])

  return null
}