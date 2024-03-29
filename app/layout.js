"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header/Page'
import Footer from './components/Footer/Page'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }



export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      
      
      <body className={inter.className}>
      {/* <!-- start page-wrapper --> */}
        <div class="page-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      {/* <!-- start page-wrapper --> */}
        <script src="/assets/js/jquery.min.js" async></script>
        <script src="/assets/js/bootstrap.bundle.min.js" async></script>
      
        <script src="/assets/js/modernizr.custom.js" async></script>
        <script src="/assets/js/jquery-plugin-collection.js" async></script>
        
        <script src="/assets/js/script.js" async></script>
      </body>
      
    </html>
  )
}
