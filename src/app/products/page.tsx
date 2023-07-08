import { Metadata } from 'next'
import { CustomBanner, ProductBrand, Footer } from '@/views'
import { Navbar } from '@/components'

export const metadata: Metadata = {
  title: "Products - Sakinah Residence",
  description: "This is sakinah residence products",
}

export default function Product() {
  return (
    <>
      <Navbar activeNav='/products'/>
      <CustomBanner title='Produk' />
      <ProductBrand />
      <Footer />
    </>
  )
}
