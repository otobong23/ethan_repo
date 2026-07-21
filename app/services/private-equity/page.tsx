'use client'

import { ServiceDetailLayout } from '@/components/service-detail-layout'
import { TrendingUp, CheckCircle, Shield, Target } from 'lucide-react'

export default function PrivateEquityPage() {
  const faqs = [
    {
      question: 'What is private equity?',
      answer:
        'Private equity involves investing capital into private (non-publicly traded) companies with strong growth potential. Unlike publicly traded stocks, private equity investments give you ownership stakes in businesses before they reach the public markets, allowing you to participate in their growth over an extended investment horizon.',
    },
    {
      question: 'How does private equity differ from publicly traded stocks?',
      answer:
        'Private equity involves direct ownership in non-public companies with longer investment horizons (typically 3-10 years), while stocks are investments in publicly traded companies that can be bought/sold anytime. Private equity offers more control and potential for higher returns but requires a longer commitment and has lower liquidity.',
    },
    {
      question: 'Why should investors include private equity in their portfolios?',
      answer:
        'Private equity can provide portfolio diversification, potential for higher returns compared to public markets, and exposure to growing businesses. It also allows investors to participate in value creation through business growth and operational improvements.',
    },
    {
      question: 'Who is private equity suitable for?',
      answer:
        'Private equity is typically suitable for investors with sufficient capital (minimum £25,000), a long-term investment horizon (3-10+ years), and comfort with lower liquidity. It works well for experienced investors, high-net-worth individuals, and those seeking portfolio diversification.',
    },
    {
      question: 'What is your deal sourcing process?',
      answer:
        'We identify opportunities through our extensive network, direct relationships with business owners, and rigorous market research. We focus on high-growth industries and businesses with strong management teams and clear paths to value creation.',
    },
    {
      question: 'How long is a typical private equity investment?',
      answer:
        'Most private equity investments have a timeline of 3-10 years, though some may extend longer depending on the business growth trajectory and exit opportunities. We provide clear timelines during the initial consultation.',
    },
    {
      question: 'What returns should I expect?',
      answer:
        'While past performance does not guarantee future results, private equity investments typically target returns that outpace public market benchmarks. Actual returns depend on the specific investment, market conditions, and business performance.',
    },
    {
      question: 'What are the main risks in private equity?',
      answer:
        'Key risks include illiquidity (difficulty exiting), longer time horizons, business-specific risks, and market conditions. We manage these through rigorous due diligence, diversification across multiple investments, and ongoing monitoring.',
    },
  ]

  return (
    <ServiceDetailLayout
      title="Private Equity Investments"
      subtitle="Invest in carefully selected private businesses with strong growth potential"
      heroDescription="Identify and evaluate high-growth private businesses with strong long-term potential. Our private equity service focuses on sourcing quality investment opportunities before they become publicly available, allowing you to participate in business growth over extended investment horizons."
      faqs={faqs}
    >
      <div className="space-y-16">
        {/* What is Private Equity */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">What is Private Equity?</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Private equity represents ownership stakes in non-publicly traded companies with strong growth potential. Unlike stocks you can buy and sell on the stock market, private equity investments involve direct participation in business growth over extended periods.
            </p>
            <p>
              Rather than purchasing speculation, you&apos;re investing in carefully vetted businesses where our team conducts extensive due diligence to ensure alignment with your financial goals and risk tolerance.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-light-gray p-6 rounded-lg">
                <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gold" /> Long-term Focus
                </h4>
                <p className="text-sm">Investments typically span 3-10 years, allowing businesses to mature and create significant value.</p>
              </div>
              <div className="bg-light-gray p-6 rounded-lg">
                <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-gold" /> Value Creation
                </h4>
                <p className="text-sm">We focus on businesses with clear paths to profitability and operational improvement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Investment Approach */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Our Investment Approach</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Every investment follows a rigorous, multi-step process designed to identify opportunities with strong fundamentals and growth potential.
          </p>
          <div className="space-y-4">
            {[
              { step: 'Deal Sourcing', desc: 'Identify promising businesses through our extensive network and market research' },
              { step: 'Initial Evaluation', desc: 'Screen opportunities based on industry, growth potential, and fit with our criteria' },
              { step: 'Due Diligence', desc: 'Conduct comprehensive financial, legal, and operational analysis' },
              { step: 'Financial Analysis', desc: 'Model cash flows, valuations, and potential returns' },
              { step: 'Risk Assessment', desc: 'Identify and mitigate potential risks through our risk framework' },
              { step: 'Investment Committee Review', desc: 'Internal approval process ensuring alignment with investment criteria' },
              { step: 'Investor Participation', desc: 'Present opportunity to qualified investors with full transparency' },
              { step: 'Ongoing Monitoring', desc: 'Track performance and provide regular updates throughout investment period' },
              { step: 'Exit Strategy', desc: 'Plan and execute exit to realize returns for investors' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-4 border-b border-gray-200 last:border-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-navy text-white text-sm font-semibold">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">{item.step}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries We Focus On */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Industries We Focus On</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Technology', 'FinTech', 'Healthcare', 'Logistics', 'Consumer Goods', 'Renewable Energy', 'Manufacturing', 'Real Estate'].map((industry) => (
              <div key={industry} className="bg-light-gray p-6 rounded-lg text-center">
                <p className="font-semibold text-navy">{industry}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Exclusive Opportunities', desc: 'Access investment opportunities before they become publicly available' },
              { title: 'Long-term Capital Appreciation', desc: 'Participate in business growth over extended investment horizons' },
              { title: 'Portfolio Diversification', desc: 'Diversify beyond traditional public markets and fixed income' },
              { title: 'Professional Due Diligence', desc: 'Benefit from comprehensive research and evaluation' },
              { title: 'Strategic Business Exposure', desc: 'Gain exposure to growing industries and emerging businesses' },
              { title: 'Transparent Communication', desc: 'Receive regular updates on investment performance and milestones' },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Requirements */}
        <section className="bg-light-gray p-8 rounded-lg">
          <h2 className="font-serif text-3xl font-bold text-navy mb-8">Investment Requirements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Minimum Investment</p>
              <p className="font-serif text-3xl font-bold text-navy">£25,000</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Typical Duration</p>
              <p className="font-serif text-3xl font-bold text-navy">3–10 Years</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Risk Profile</p>
              <p className="font-serif text-3xl font-bold text-emerald">Moderate to High</p>
            </div>
          </div>
          <p className="text-gray-700 mt-8">
            Private equity is ideal for experienced investors with long-term horizons, sufficient capital, and comfort with lower liquidity. It works well for high-net-worth individuals, institutional investors, and those seeking portfolio diversification.
          </p>
        </section>
      </div>
    </ServiceDetailLayout>
  )
}
