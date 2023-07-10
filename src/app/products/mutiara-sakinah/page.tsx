import { Metadata } from 'next'
import { Calculator, CustomBanner, Denah, ProductFacilities, ProductLocation, Siteplan, Specification } from '@/views'

export const metadata: Metadata = {
  title: "Mutiara Sakinah",
  description: "This is sakinah residence products",
}

export default function Product() {
  return (
    <>
      <CustomBanner title='Mutiara Sakinah' />
      <Specification name='Mutiara Sakinah' />
      <Calculator />
      <Denah />
      <ProductFacilities />
      <Siteplan />
      <ProductLocation />
    </>
  )
}
