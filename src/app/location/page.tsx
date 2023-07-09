import { Metadata } from 'next'
import { CustomBanner, LocationMap, Footer } from '@/views'
import { Navbar } from '@/components'

export const metadata: Metadata = {
  title: "Locations - Sakinah Residence",
  description: "This is sakinah residence locations",
}

export default function Location() {
  return (
    <>
      <Navbar activeNav='/location'/>
      <CustomBanner title='Lokasi' />
      <LocationMap />
      <Footer />
    </>
  )
}
