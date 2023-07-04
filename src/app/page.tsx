import Image from 'next/image'
import { Banner, Info, Product, Faq, Branding, Footer } from '@/views'
import { Navbar } from '@/components'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Info />
      <Product />
      <Faq />
      <Branding />
      <Footer />
    </>
  )
}
