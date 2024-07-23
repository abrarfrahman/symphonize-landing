export const metadata = {
  title: 'Home - Symphonize.ai',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/*  <Zigzag /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  )
}
