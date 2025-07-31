import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Spectrum Hub - Tecnologia que entende o autismo | Plataforma IA para TEA",
  description:
    "Transformamos dados do dia a dia em insights clínicos que ajudam pais e terapeutas a cuidar com mais precisão, empatia e ciência. Plataforma inteligente para acompanhamento de TEA com IA, smartwatch e prontuário multiprofissional.",
  keywords: [
    "autismo",
    "TEA",
    "transtorno do espectro autista",
    "inteligência artificial",
    "terapia",
    "acompanhamento",
    "prontuário digital",
    "smartwatch",
    "análise comportamental",
    "ABA",
    "neurociência",
    "psicologia",
    "fonoaudiologia",
    "terapia ocupacional",
    "multiprofissional",
    "dados clínicos",
    "insights",
    "tecnologia assistiva",
  ],
  authors: [{ name: "Spectrum Hub" }],
  creator: "Spectrum Hub",
  publisher: "Spectrum Hub",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://spectrum.app",
    siteName: "Spectrum Hub",
    title: "Spectrum Hub - Tecnologia que entende o autismo",
    description:
      "Transformamos dados do dia a dia em insights clínicos que ajudam pais e terapeutas a cuidar com mais precisão, empatia e ciência.",
    images: [
      {
        url: "/images/spectrum-hub-og.png",
        width: 1200,
        height: 630,
        alt: "Spectrum Hub - Plataforma inteligente para cuidado com autismo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spectrum Hub - Tecnologia que entende o autismo",
    description:
      "Transformamos dados do dia a dia em insights clínicos que ajudam pais e terapeutas a cuidar com mais precisão, empatia e ciência.",
    images: ["/images/spectrum-hub-og.png"],
    creator: "@spectrumhub",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#6366f1",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "healthcare",
  classification: "Healthcare Technology",
  other: {
    "msapplication-TileColor": "#6366f1",
    "theme-color": "#ffffff",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://spectrum.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Spectrum Hub",
              description:
                "Plataforma inteligente que transforma dados do dia a dia em insights clínicos para cuidado com TEA (Transtorno do Espectro Autista)",
              url: "https://spectrum.app",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web, iOS, Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "BRL",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "150",
              },
              author: {
                "@type": "Organization",
                name: "Spectrum Hub",
                url: "https://spectrum.app",
              },
              publisher: {
                "@type": "Organization",
                name: "Spectrum Hub",
                logo: {
                  "@type": "ImageObject",
                  url: "https://spectrum.app/images/spectrum-hub-logo.png",
                },
              },
              featureList: [
                "Análise comportamental com IA",
                "Integração com smartwatch",
                "Prontuário multiprofissional",
                "Insights em tempo real",
                "Comunicação entre profissionais",
                "Acompanhamento de evolução",
                "Segurança LGPD",
                "Interface acessível",
              ],
              screenshot: "https://spectrum.app/images/spectrum-dashboard.png",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spectrum Hub",
              url: "https://spectrum.app",
              logo: "https://spectrum.app/images/spectrum-hub-logo.png",
              description: "Tecnologia que entende o autismo - Plataforma inteligente para cuidado com TEA",
              sameAs: [
                "https://twitter.com/spectrumhub",
                "https://linkedin.com/company/spectrum-hub",
                "https://instagram.com/spectrumhub",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-99999-9999",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressLocality: "São Paulo",
                addressRegion: "SP",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
