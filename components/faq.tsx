'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const faqCategories = [
  {
    category: 'General',
    items: [
      {
        q: 'What investment services do you provide?',
        a: 'I offer comprehensive services including private equity investments, cryptocurrency advisory, stock portfolio management, global currency market advisory, land banking, and personalized investment consulting.',
      },
      {
        q: 'Who can invest?',
        a: 'I work with individual investors, entrepreneurs, and businesses. Investment requirements vary by service, with minimums typically ranging from £2,000 to £25,000.',
      },
      {
        q: 'Do you work internationally?',
        a: 'Yes, I serve clients across 15+ countries with tailored strategies aligned to local markets and regulations.',
      },
      {
        q: 'How do I get started?',
        a: 'Schedule a consultation to discuss your financial goals, investment experience, and risk tolerance. From there, we&apos;ll develop a personalized investment strategy.',
      },
    ],
  },
  {
    category: 'Private Equity',
    items: [
      {
        q: 'What is private equity?',
        a: 'Private equity involves investing in privately-held companies not traded on public markets. These investments typically offer long-term growth potential through business expansion and value creation.',
      },
      {
        q: 'How long are private equity investments?',
        a: 'Typical investment horizons range from 3-10 years, allowing sufficient time for business growth and exit opportunities.',
      },
      {
        q: 'What returns should I expect?',
        a: 'Returns vary based on the quality of investment, market conditions, and company performance. I focus on value creation over time rather than guaranteeing specific returns.',
      },
    ],
  },
  {
    category: 'Cryptocurrency',
    items: [
      {
        q: 'Which cryptocurrencies do you recommend?',
        a: 'Recommendations depend on market conditions, your risk profile, and investment goals. I focus on established cryptocurrencies with strong fundamentals and long-term potential.',
      },
      {
        q: 'How risky is cryptocurrency?',
        a: 'Cryptocurrency is volatile. I manage risk through diversification, position sizing, and disciplined entry/exit strategies aligned to your risk tolerance.',
      },
      {
        q: 'Can I diversify my crypto investments?',
        a: 'Absolutely. Diversification across multiple cryptocurrencies, time horizons, and strategies reduces concentration risk and improves risk-adjusted returns.',
      },
    ],
  },
]

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeItems, setActiveItems] = useState<{ [key: number]: boolean }>({})

  const toggleItem = (idx: number) => {
    setActiveItems((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }

  const currentCategory = faqCategories[activeCategory]

  return (
    <section id="faq" className="w-full py-20 bg-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700">
            Find answers to common questions about our services and investment process.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {faqCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeCategory === idx
                  ? 'bg-navy text-white'
                  : 'bg-white text-navy hover:bg-gray-50'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 bg-white rounded-2xl overflow-hidden shadow-md">
          {currentCategory.items.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200 last:border-0">
              <button
                onClick={() => toggleItem(idx)}
                className="w-full px-6 py-4 flex items-start gap-4 hover:bg-light-gray transition-colors text-left"
              >
                <ChevronDown
                  className={`w-5 h-5 text-gold shrink-0 mt-1 transition-transform ${
                    activeItems[idx] ? 'rotate-180' : ''
                  }`}
                />
                <h3 className="font-semibold text-navy pr-4">{item.q}</h3>
              </button>

              {activeItems[idx] && (
                <div className="px-6 pb-4 text-gray-700 bg-light-gray">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Didn&apos;t find your answer?
          </p>
          <Link href="/#contact" className="px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-[#0a1830] transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
