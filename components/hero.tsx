import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-navy leading-tight">
              Building Wealth Through Intelligent Investment Strategies
            </h1>
            <p className="text-xl text-gold font-semibold">
              Private Equity • Cryptocurrency • Stock Markets • Real Estate • Venture Capital
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            Helping investors identify high-potential opportunities through disciplined research, strategic planning, and long-term value investing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/book-consultation" className="px-8 py-4 bg-navy text-white rounded-lg hover:bg-[#0a1830] transition-colors duration-200 font-semibold flex items-center justify-center gap-2 group">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href='/#services' className="px-8 py-4 border-2 border-navy text-navy rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold">
              Explore Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
            <div>
              <p className="font-serif text-2xl font-bold text-navy">10+</p>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-navy">250+</p>
              <p className="text-sm text-gray-600">Investors Advised</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/hero.png"
            alt="Investment Professional"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy/10 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
