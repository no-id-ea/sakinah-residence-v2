import { Metadata } from 'next'
import { CustomBanner, ProductBrand } from '@/views'

export const metadata: Metadata = {
  title: "Products - Sakinah Residence",
  description: "This is sakinah residence products",
}

export default function Product() {
  return (
    <>
      <CustomBanner title='Mutiara Sakinah' />
      <ProductBrand />
    </>
  )
}
