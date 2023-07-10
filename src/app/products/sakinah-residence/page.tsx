import { Metadata } from 'next'
import { Calculator, CustomBanner, Denah, ProductFacilities, ProductLocation, Siteplan, Specification } from '@/views'

export const metadata: Metadata = {
  title: "Products - Sakinah Residence",
  description: "This is sakinah residence products",
}

export default function Product() {
  return (
    <>
      <CustomBanner title='Sakinah Residence' />
      <Specification />
      <Calculator />
      <Denah />
      <ProductFacilities />
      <Siteplan />
      <ProductLocation />
    </>
  )
}
