import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Website',
  description: 'admin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
