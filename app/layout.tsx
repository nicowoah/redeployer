import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import MotionProvider from '@/components/MotionProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['500', '600', '700'],
})


export const metadata: Metadata = {
  title: 'Redeployer | Website Builds, AI Automation and Ongoing Support',
  description:
    'Redeployer builds custom websites, AI automation, and continuous monthly support for small and local businesses. Simple monthly pricing, no setup fee, no lock-in.',
  keywords: [
    'digital agency',
    'website design',
    'AI automation',
    'small business website',
    'web development',
    'monthly website plan',
    'no contract web agency',
  ],
  metadataBase: new URL('https://redeployer.co'),
  alternates: {
    canonical: 'https://redeployer.co',
  },
  openGraph: {
    title: 'Redeployer | Website Builds, AI Automation and Ongoing Support',
    description:
      'Custom websites, AI automation, and continuous support for small and local businesses. Simple monthly pricing, no setup fee, no lock-in.',
    url: 'https://redeployer.co',
    siteName: 'Redeployer',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redeployer | Website Builds, AI Automation and Ongoing Support',
    description:
      'Custom websites, AI automation, and continuous support for small and local businesses. Simple monthly pricing, no setup fee, no lock-in.',
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
  '@type': 'ProfessionalService',
  name: 'Redeployer',
  url: 'https://redeployer.co',
  description:
    'Custom website builds, AI automation, and continuous monthly support for small and local businesses.',
  priceRange: '$149-$299 per month',
  offers: [
    {
      '@type': 'Offer',
      name: 'Redeployer Starter',
      description:
        'Website and Google Business. Custom-designed site up to 5 pages, hosting, SSL and uptime monitoring, Google Business Profile setup, a basic booking request form, and mobile-optimized fast load times. No setup fee, cancel anytime.',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '149',
        priceCurrency: 'USD',
        unitCode: 'MON',
        billingIncrement: 1,
      },
    },
    {
      '@type': 'Offer',
      name: 'Redeployer System',
      description:
        'The full end-to-end system for running your front desk. Everything in Starter plus ongoing local SEO optimization, online booking synced to your calendar, missed-call text-back, automated SMS and email appointment reminders, automatic review requests after sessions, and an instant response to every new inquiry. No setup fee, cancel anytime, 30-day setup guarantee.',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '299',
        priceCurrency: 'USD',
        unitCode: 'MON',
        billingIncrement: 1,
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Framer Motion SSRs its `initial` state as inline opacity:0. Without JS
            those sections would never fade in, so force them visible. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2.5 focus:font-sans focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
