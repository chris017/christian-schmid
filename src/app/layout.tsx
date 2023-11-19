import type { Metadata } from 'next'

import './globals.css'
import { Providers } from './providers'





export const metadata: Metadata = {
  title: 'Portfolio Website',
  description: 'Christian Schmid - Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full bg-white" lang="en">
      <body><Providers>{children}</Providers></body>
    </html>
  )
}
