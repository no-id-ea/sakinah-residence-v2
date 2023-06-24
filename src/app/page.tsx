import Image from 'next/image'
import { Banner } from '@/views'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Banner title="Welcome to my Next.js app!" owner="by: @josephmtinangi" />
    </main>
  )
}
