import Image from 'next/image'
import { Banner, Info, Product, Faq } from '@/views'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Banner/>
      <Info />
      <Product />
      <Faq />
    </main>
  )
}
