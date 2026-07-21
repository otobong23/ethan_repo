'use client'

import { ServiceDetailLayout } from '@/components/service-detail-layout'
import { DollarSign, TrendingUp, Globe, Target } from 'lucide-react'

export default function StockPortfolioPage() {
  const faqs = [
    {
      question: 'Do you recommend individual stocks or diversified portfolios?',
      answer:
        'We recommend diversified portfolios as they reduce risk through exposure to multiple companies, sectors, and geographies. While individual stock analysis is part of our research process, we build portfolios that balance growth, income, and risk management.',
    },
    {
      question: 'Can you help rebalance my existing portfolio?',
      answer:
        'Yes, we can assess your current portfolio and recommend rebalancing to align with your goals and risk tolerance. We provide periodic reviews and adjustments to maintain your target asset allocation.',
    },
    {
      question: 'How often is portfolio performance reviewed?',
      answer:
        'We provide quarterly performance reviews with comprehensive reporting. More frequent reviews can be arranged based on your preferences and market conditions.',
    },
    {
      question: 'What stocks do you focus on?',
      answer:
        'We focus on quality companies across multiple categories: blue-chip stocks for stability, dividend stocks for income, growth stocks for appreciation, value stocks for price efficiency, and international equities for diversification.',
    },
    {
      question: 'How do you handle market downturns?',
      answer:
        'During market downturns, we maintain our long-term perspective, avoid panic selling, and look for quality investments at attractive prices. Our diversified approach helps cushion against significant losses.',
    },
    {
      question: 'What is your investment process?',
      answer:
        'Our process includes research, company analysis, portfolio construction based on your goals and risk tolerance, ongoing monitoring, and periodic rebalancing to maintain alignment with your objectives.',
    },
    {
      question: 'Do you manage both growth and income portfolios?',
      answer:
        'Yes, we can construct portfolios focused on growth, income through dividends, or a balanced approach. Your specific goals and risk tolerance determine the portfolio mix.',
    },
    {
      question: 'How do you select individual stocks?',
      answer:
        'Stock selection is based on comprehensive fundamental analysis, financial health, competitive positioning, management quality, growth prospects, and valuation metrics.',
    },
  ]

  return (
    <ServiceDetailLayout
      title="Stock Portfolio Management"
      subtitle="Professional equity portfolio management for long-term wealth creation"
      heroDescription="Professional management and optimization of investment portfolios through diversified exposure to domestic and international equity markets. We focus on long-term capital appreciation and risk-adjusted returns through disciplined portfolio construction and ongoing monitoring."
      faqs={faqs}
    >
      <div className="space-y-16">
        {/* Our Philosophy */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Our Investment Philosophy</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We believe in investing for sustainable, long-term growth using disciplined portfolio management principles rather than short-term speculation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Quality Over Speculation', desc: 'Focus on well-established companies with strong fundamentals' },
              { title: 'Long-Term Perspective', desc: 'Build portfolios designed to appreciate over extended periods' },
              { title: 'Risk Management', desc: 'Protect capital through diversification and disciplined allocation' },
              { title: 'Research-Driven', desc: 'Base recommendations on thorough analysis, not market sentiment' },
            ].map((item, idx) => (
              <div key={idx} className="bg-light-gray p-6 rounded-lg border-l-4 border-gold">
                <h4 className="font-semibold text-navy mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Construction */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Portfolio Construction</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We construct portfolios using multiple diversification strategies:
          </p>
          <div className="space-y-4">
            {[
              { title: 'Company Diversification', desc: 'Spread investments across multiple companies to reduce single-company risk' },
              { title: 'Sector Allocation', desc: 'Balance exposure across different industries (technology, healthcare, finance, etc.)' },
              { title: 'Geographic Diversification', desc: 'Include both domestic and international equities for broader market exposure' },
              { title: 'Risk-Adjusted Investing', desc: 'Match portfolio composition to your risk tolerance and investment timeline' },
              { title: 'Market Cap Balance', desc: 'Include large-cap, mid-cap, and small-cap stocks for optimal risk-return profile' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-4 border-b border-gray-200 last:border-0">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald text-white text-sm font-semibold">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Process */}
        <section className="bg-navy text-white p-8 rounded-lg">
          <h2 className="font-serif text-3xl font-bold mb-8">Our Investment Process</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Research', desc: 'Analyze markets, industries, and individual companies' },
              { step: '2', title: 'Company Analysis', desc: 'Evaluate financial health, growth prospects, and valuations' },
              { step: '3', title: 'Portfolio Construction', desc: 'Build portfolios aligned with your goals and risk tolerance' },
              { step: '4', title: 'Market Monitoring', desc: 'Continuously track portfolio performance and market conditions' },
              { step: '5', title: 'Rebalancing', desc: 'Adjust portfolio allocations to maintain target weightings' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 pb-4 border-b border-white border-opacity-20 last:border-0">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gold text-navy text-sm font-semibold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Stocks */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Stock Categories We Focus On</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Blue Chip', desc: 'Large, established companies with stable earnings and strong market positions' },
              { title: 'Dividend Stocks', desc: 'Quality companies that distribute regular income to shareholders' },
              { title: 'Growth Stocks', desc: 'Companies with strong growth potential and increasing earnings' },
              { title: 'Value Stocks', desc: 'Quality companies trading at attractive prices relative to fundamentals' },
              { title: 'International Equities', desc: 'Exposure to non-domestic markets and emerging economies' },
              { title: 'Small/Mid-Cap', desc: 'Smaller companies with significant growth potential' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-navy mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Management */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Risk Management</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We protect your investments through comprehensive risk management strategies:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Diversification', desc: 'Spread investments across companies, sectors, and geographies' },
              { title: 'Position Limits', desc: 'Limit individual stock positions to appropriate portfolio percentages' },
              { title: 'Regular Reviews', desc: 'Quarterly performance reviews and portfolio assessments' },
              { title: 'Volatility Monitoring', desc: 'Track and manage portfolio volatility in relation to market conditions' },
              { title: 'Stop Loss Strategies', desc: 'Implement protective measures to limit potential losses' },
              { title: 'Rebalancing', desc: 'Maintain target allocations through periodic adjustments' },
            ].map((item, idx) => (
              <div key={idx} className="bg-light-gray p-6 rounded-lg">
                <h4 className="font-semibold text-navy mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Monitoring */}
        <section className="bg-white border-2 border-gold p-8 rounded-lg">
          <h2 className="font-serif text-3xl font-bold text-navy mb-6">Performance Monitoring</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We provide regular performance monitoring and reporting to ensure your portfolio stays on track:
          </p>
          <ul className="space-y-3">
            {[
              'Quarterly performance reports with detailed analysis',
              'Regular communication about portfolio changes and market developments',
              'Annual strategy review to assess progress toward goals',
              'Flexibility to adjust strategies based on life changes or market conditions',
              'Transparent fee structure with no hidden costs',
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <TrendingUp className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Investment Requirements */}
        <section className="bg-light-gray p-8 rounded-lg">
          <h2 className="font-serif text-3xl font-bold text-navy mb-8">Investment Requirements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Minimum Investment</p>
              <p className="font-serif text-3xl font-bold text-navy">£10,000</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Duration</p>
              <p className="font-serif text-3xl font-bold text-navy">Flexible</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Risk Profile</p>
              <p className="font-serif text-3xl font-bold text-emerald">Moderate</p>
            </div>
          </div>
          <p className="text-gray-700 mt-8">
            Stock portfolio management is suitable for investors seeking long-term capital appreciation, those wanting professional guidance, and those comfortable with market volatility over extended timeframes.
          </p>
        </section>
      </div>
    </ServiceDetailLayout>
  )
}
