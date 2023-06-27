import Image from 'next/image'
import { Banner } from '@/views'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Banner 
        title="Menikmati Asri dan Indahnya"
        subtitle="Hunian yang Harmonis"
        owner="Karya Cipta Sakinah"
        buttonText="Jelajahi Sekarang"
      />
    </main>
  )
}
