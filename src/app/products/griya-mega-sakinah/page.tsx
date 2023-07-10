import { Metadata } from 'next'
import { Calculator, CustomBanner, Denah, ProductFacilities, ProductLocation, Siteplan, Specification } from '@/views'

export const metadata: Metadata = {
  title: "Griya Mega Sakinah",
  description: "This is sakinah residence products",
}

export default function Product() {
  return (
    <>
      <CustomBanner title='Griya Mega Sakinah' />
      <Specification name='Griya Mega Sakinah' />
      <Calculator />
      <Denah />
      <ProductFacilities />
      <Siteplan />
      <ProductLocation />
    </>
  )
}
