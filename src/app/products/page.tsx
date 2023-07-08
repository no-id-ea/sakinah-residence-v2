import Image from 'next/image'
import { Metadata } from 'next'
import { BannerProduct, ProductBrand, Footer } from '@/views'
import { Navbar } from '@/components'

export const metadata: Metadata = {
  title: "Products | Sakinah Residence",
  description: "This is sakinah residence products",
}

export default function Home() {
  return (
    <>
      <Navbar activeNav='/products'/>
      <BannerProduct />
      <ProductBrand />
      <Footer />
    </>
  )
}
