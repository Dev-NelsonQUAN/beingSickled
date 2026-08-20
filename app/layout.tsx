import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://beingsickled.org'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Being Sickled Health Foundation',
    template: '%s | Being Sickled Health Foundation',
  },
  description:
    'Improving awareness, education, advocacy, and practical support for people living with sickle cell disorder across Africa.',
  keywords: [
    'Sickle Cell Disorder',
    'Sickle Cell Awareness',
    'Health Foundation Africa',
    'Sickle Cell Advocacy',
    'Being Sickled',
    'Sickle Cell Support Nigeria',
  ],
  authors: [{ name: 'Being Sickled Health Foundation' }],
  creator: 'Being Sickled Health Foundation',
  publisher: 'Being Sickled Health Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Being Sickled Health Foundation',
    description:
      'Awareness, support, and opportunities for people living with sickle cell disorder across Africa.',
    url: siteUrl,
    siteName: 'Being Sickled Health Foundation',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Being Sickled Health Foundation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Being Sickled Health Foundation',
    description:
      'Awareness, support, and opportunities for people living with sickle cell disorder across Africa.',
    images: ['/og-image.jpg'],
    creator: '@beingsickled',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={poppins.variable}
      data-scroll-behavior="smooth"
    >
      <body 
        className="font-sans antialiased overflow-x-hidden text-[#1b1b1d] bg-white"
        suppressHydrationWarning
      >
        <Header />
        <main className="overflow-x-hidden w-full min-h-screen">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}


// import { Analytics } from '@vercel/analytics/next'
// import type { Metadata, Viewport } from 'next'
// import { Poppins } from 'next/font/google'
// import { Header } from '@/components/header'
// import { Footer } from '@/components/footer'
// import './globals.css'

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800', '900'],
//   variable: '--font-poppins',
//   display: 'swap',
// })

// export const metadata: Metadata = {
//   title: 'Being Sickled Health Foundation',
//   description: 'Awareness, support, and opportunities for people living with sickle cell disorder across Africa.',
//   generator: 'v0.app',
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// }

// export const viewport: Viewport = {
//   colorScheme: 'light dark',
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: 'white' },
//     { media: '(prefers-color-scheme: dark)', color: 'black' },
//   ],
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html 
//       lang="en" 
//       className={poppins.variable}
//       data-scroll-behavior="smooth"
//     >
//       <body 
//         className="font-sans antialiased overflow-x-hidden text-[#1b1b1d]"
//         suppressHydrationWarning
//       >
//         <Header />
//         <div className="overflow-x-hidden w-full">
//           {children}
//         </div>
//         <Footer />
//         {process.env.NODE_ENV === 'production' && <Analytics />}
//       </body>
//     </html>
//   )
// }


// import { Analytics } from '@vercel/analytics/next'
// import type { Metadata, Viewport } from 'next'
// import { Poppins } from 'next/font/google'
// import { Header } from '@/components/header'
// import { Footer } from '@/components/footer'
// import './globals.css'

// // Load Poppins font with common weights
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800', '900'],
//   variable: '--font-poppins',
//   display: 'swap',
// })

// export const metadata: Metadata = {
//   title: 'Being Sickled Health Foundation',
//   description: 'Awareness, support, and opportunities for people living with sickle cell disorder across Africa.',
//   generator: 'v0.app',
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// }

// export const viewport: Viewport = {
//   colorScheme: 'light dark',
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: 'white' },
//     { media: '(prefers-color-scheme: dark)', color: 'black' },
//   ],
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className={poppins.variable}>
//       <body className="font-sans antialiased overflow-x-hidden text-[#1b1b1d]">
//         <Header />
//         <div className="overflow-x-hidden w-full">
//           {children}
//         </div>
//         <Footer />
//         {process.env.NODE_ENV === 'production' && <Analytics />}
//       </body>
//     </html>
//   )
// }



// // import { Analytics } from '@vercel/analytics/next'
// // import type { Metadata, Viewport } from 'next'
// // import { Header } from '@/components/header'
// // import { Footer } from '@/components/footer'
// // import './globals.css'

// // export const metadata: Metadata = {
// //   title: 'Being Sickled Health Foundation',
// //   description: 'Awareness, support, and opportunities for people living with sickle cell disorder across Africa.',
// //   generator: 'v0.app',
// //   icons: {
// //     icon: [
// //       {
// //         url: '/icon-light-32x32.png',
// //         media: '(prefers-color-scheme: light)',
// //       },
// //       {
// //         url: '/icon-dark-32x32.png',
// //         media: '(prefers-color-scheme: dark)',
// //       },
// //       {
// //         url: '/icon.svg',
// //         type: 'image/svg+xml',
// //       },
// //     ],
// //     apple: '/apple-icon.png',
// //   },
// // }

// // export const viewport: Viewport = {
// //   colorScheme: 'light dark',
// //   themeColor: [
// //     { media: '(prefers-color-scheme: light)', color: 'white' },
// //     { media: '(prefers-color-scheme: dark)', color: 'black' },
// //   ],
// // }

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body className="antialiased overflow-x-hidden">
// //         <Header />
// //         <div className="overflow-x-hidden w-full">
// //           {children}
// //         </div>
// //         <Footer />
// //         {process.env.NODE_ENV === 'production' && <Analytics />}
// //       </body>
// //     </html>
// //   )
// // }