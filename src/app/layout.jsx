
import './globals.css'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import { Roboto } from 'next/font/google'
import {ThemeProvider} from '../context/ThemeContext'
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
})


export const metadata = {
  title: 'Kaan Okluçam',
  description: 'Kaan Okluçam Cv',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        
      </head>

      <body className={roboto.className}>
        <ThemeProvider>
          <Navbar/>
            {children}
          <Footer/>
        </ThemeProvider>
      </body>
      
    </html>
  )
}
