'use client'

import Link from 'next/link'
import { ArrowRight, ArrowLeft, ChevronDown, Check } from 'lucide-react'
import { useState } from 'react'

interface ServiceDetailLayoutProps {
  title: string
  subtitle: string
  heroDescription: string
  faqs: { question: string; answer: string }[]
  children: React.ReactNode
}

export function ServiceDetailLayout({
  title,
  subtitle,
  heroDescription,
  faqs,
}: ServiceDetailLayoutProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/#services" className="flex items-center gap-2 text-navy hover:text-gold transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-navy mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gold font-semibold mb-6">{subtitle}</p>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-8">
            {heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book-consultation"
              className="px-8 py-4 bg-navy text-white rounded-lg hover:bg-[#0a1830] transition-colors font-semibold flex items-center justify-center gap-2 group"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* <button className="px-8 py-4 border-2 border-navy text-navy rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              Request Information
            </button> */}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Render children - service-specific content */}
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-light-gray py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-navy mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-navy text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="w-full bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8">Important Disclaimer</h2>
          <div className="space-y-4 text-gray-100 leading-relaxed">
            <p>
              All investments involve varying degrees of risk, including the potential loss of principal. Past performance does not guarantee future results.
            </p>
            <p>
              The information provided on this page is intended solely for educational and informational purposes and should not be interpreted as financial, investment, legal, or tax advice.
            </p>
            <p>
              Any examples or illustrations provided are for educational purposes only and do not represent promises or guarantees of returns.
            </p>
            <p>
              Before making any investment decision, we strongly recommend consulting with qualified financial, legal, or tax professionals who understand your personal circumstances and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="font-serif text-4xl font-bold text-navy mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Book a consultation with our investment team to discuss how this service aligns with your financial goals.
        </p>
        <Link
          href="/book-consultation"
          className="px-8 py-4 bg-navy text-white rounded-lg hover:bg-[#0a1830] transition-colors font-semibold inline-flex items-center gap-2 group"
        >
          Schedule Consultation
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  )
}
