import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { TrackRecord } from '@/components/track-record'
import { FAQ } from '@/components/faq'
import { Blog } from '@/components/blog'
import { Newsletter } from '@/components/newsletter'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <TrackRecord />
      <FAQ />
      <Blog />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  )
}
