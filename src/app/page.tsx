// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles
// import styles from './page.module.css'
import './globals.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
const inter = Inter({ subsets: ['latin'], weight: ['700', '900'] })

export default function Home() {
  return (
    <>
        To be continued tomorrow
        <Header />
        <Navbar />
        <Sidebar />
      </>
  )
}
