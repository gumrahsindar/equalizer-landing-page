import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Equalizer Landing Page',
  description: 'We make your music sound extraordinary.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='lg:container'>{children}</body>
    </html>
  )
}
