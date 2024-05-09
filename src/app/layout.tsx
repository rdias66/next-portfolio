import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-poppins`}>
      <body>
        <script src="https://kit.fontawesome.com/9edb9e3e09.js"></script>
        {children}
      </body>
    </html>
  )
}
