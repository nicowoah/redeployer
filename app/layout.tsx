import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
})


export const metadata: Metadata = {
  title: 'Redeployer | Website Builds, AI Automation and Ongoing Support',
  description:
    'Redeployer is a digital agency that builds custom websites, AI automation workflows, and provides continuous monthly support for businesses of all sizes. Fast launches, no lock-in.',
  keywords: [
    'digital agency',
    'website design',
    'AI automation',
    'small business website',
    'web development',
    'monthly support retainer',
    'no contract web agency',
  ],
  metadataBase: new URL('https://redeployer.co'),
  alternates: {
    canonical: 'https://redeployer.co',
  },
  openGraph: {
    title: 'Redeployer | Website Builds, AI Automation and Ongoing Support',
    description:
      'Custom websites, AI automation, and continuous support for businesses of all sizes. Fast launches, project-based pricing, no lock-in.',
    url: 'https://redeployer.co',
    siteName: 'Redeployer',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redeployer | Website Builds, AI Automation and Ongoing Support',
    description:
      'Custom websites, AI automation, and continuous support for businesses of all sizes. Fast launches, project-based pricing, no lock-in.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Redeployer',
  url: 'https://redeployer.co',
  description:
    'Digital agency specializing in custom website builds, AI automation workflows, and continuous monthly support for businesses of all sizes.',
  email: 'hello@redeployer.co',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@redeployer.co',
  },
  offers: [
    { '@type': 'Offer', name: 'Website Builds', description: 'Custom-built websites designed to convert, launched fast.' },
    { '@type': 'Offer', name: 'AI Automation', description: 'Automation systems that save time and capture more leads.' },
    { '@type': 'Offer', name: 'Continuous Support', description: 'Ongoing monthly retainer for updates, improvements, and support. No lock-in, month-to-month.' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
