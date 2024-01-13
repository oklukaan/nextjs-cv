
import './globals.css'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import { Roboto } from 'next/font/google'
import {ThemeProvider} from '../context/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
})


export const metadata = {
  title: 'Kaan Okluçam s',
  description: 'Kaan Okluçam Cv',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    
        
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
