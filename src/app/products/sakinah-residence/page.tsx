import { Metadata } from 'next'
import { Calculator, CustomBanner, Denah, ProductFacilities, ProductLocation, Siteplan, Specification } from '@/views'

export const metadata: Metadata = {
  title: "Sakinah Residence",
  description: "This is sakinah residence products",
}

export default function Product() {
  return (
    <>
      <CustomBanner title='Sakinah Residence' />
      <Specification name='Sakinah Residence' />
      <Calculator />
      <Denah />
      <ProductFacilities />
      <Siteplan />
      <ProductLocation />
    </>
  )
}
