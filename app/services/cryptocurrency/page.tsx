'use client'

import { ServiceDetailLayout } from '@/components/service-detail-layout'
import { Zap, TrendingUp, Shield, Zap as ZapIcon } from 'lucide-react'

export default function CryptocurrencyPage() {
  const faqs = [
    {
      question: 'Which cryptocurrencies do you recommend?',
      answer:
        'We conduct extensive market research to identify opportunities across Bitcoin, Ethereum, stablecoins, Layer-1 ecosystems, and tokenized assets. Our recommendations are based on your risk profile, investment goals, and market analysis rather than speculation.',
    },
    {
      question: 'Do you provide wallet guidance?',
      answer:
        'Yes, we provide guidance on secure wallet management, custody solutions, and best practices for holding digital assets. Security is paramount, and we ensure you understand the options available.',
    },
    {
      question: 'How risky is cryptocurrency investment?',
      answer:
        'Cryptocurrency carries significant volatility and risk, including market risks, technological risks, and regulatory uncertainty. We manage these through diversification, position sizing, portfolio rebalancing, and comprehensive risk management frameworks.',
    },
    {
      question: 'Can I diversify my crypto investments?',
      answer:
        'Absolutely. We help construct diversified crypto portfolios that balance exposure across different asset classes, reducing concentration risk while capturing growth opportunities.',
    },
    {
      question: 'What is your investment philosophy for crypto?',
      answer:
        'We emphasize long-term investing, risk-adjusted allocation, research-driven decisions, and diversification. We avoid speculation and focus on sustainable, fundamentally sound investments.',
    },
    {
      question: 'How do you manage volatility?',
      answer:
        'We manage volatility through position sizing, portfolio diversification across assets and sectors, regular rebalancing, and clear risk parameters tailored to your comfort level.',
    },
    {
      question: 'How frequently do you rebalance portfolios?',
      answer:
        'Rebalancing frequency depends on your investment goals and market conditions. We typically conduct quarterly reviews with rebalancing as needed, ensuring your portfolio stays aligned with your objectives.',
    },
    {
      question: 'What are your market research processes?',
      answer:
        'Our research combines technical analysis, fundamental evaluation of projects, on-chain data analysis, macroeconomic trends, and regulatory monitoring to inform investment recommendations.',
    },
  ]

  return (
    <ServiceDetailLayout
      title="Cryptocurrency Investment Advisory"
      subtitle="Professional guidance on digital asset strategies and diversification"
      heroDescription="Professional guidance on cryptocurrency investment strategies based on market research, portfolio diversification, and long-term digital asset opportunities. We provide strategic advisory rather than guaranteed returns, focusing on disciplined analysis and risk management."
      faqs={faqs}
    >
      <div className="space-y-16">
        {/* What We Offer */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">What We Offer</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our cryptocurrency advisory service provides strategic guidance rather than guaranteed returns. We focus on research-driven decisions, disciplined portfolio construction, and long-term value creation in the digital asset space.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Portfolio Construction', desc: 'Build diversified crypto portfolios tailored to your risk tolerance and goals' },
              { title: 'Risk Management', desc: 'Implement comprehensive frameworks to manage volatility and concentration risk' },
              { title: 'Market Research', desc: 'Benefit from deep analysis of projects, technology, and market trends' },
              { title: 'Asset Allocation', desc: 'Optimize allocation across cryptocurrencies and asset classes' },
              { title: 'Long-term Planning', desc: 'Develop strategies aligned with your long-term financial objectives' },
              { title: 'Diversification Strategies', desc: 'Create multi-asset crypto portfolios to reduce risk' },
            ].map((service, idx) => (
              <div key={idx} className="bg-light-gray p-6 rounded-lg">
                <h4 className="font-semibold text-navy mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Supported Assets */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Digital Assets We Cover</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Bitcoin', 'Ethereum', 'Stablecoins', 'Layer-1 Ecosystems', 'Tokenized Assets', 'Emerging Protocols'].map((asset) => (
              <div key={asset} className="bg-white border-2 border-gold p-6 rounded-lg text-center">
                <p className="font-semibold text-navy">{asset}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Philosophy */}
        <section className="bg-navy text-white p-8 rounded-lg">
          <h2 className="font-serif text-3xl font-bold mb-8">Our Investment Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Long-Term Investing', desc: 'Focus on sustained value creation rather than short-term speculation' },
              { title: 'Risk-Adjusted Allocation', desc: 'Balance growth opportunities with appropriate risk management' },
              { title: 'Research-Driven Decisions', desc: 'Base recommendations on thorough analysis, not market sentiment' },
              { title: 'Diversification', desc: 'Spread exposure across assets, sectors, and market conditions' },
            ].map((item, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Management Framework */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Risk Management Framework</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Cryptocurrency investing involves significant risks. We manage these through multiple strategies:
          </p>
          <div className="space-y-4">
            {[
              { title: 'Position Sizing', desc: 'Limit individual positions to appropriate percentages of portfolio' },
              { title: 'Portfolio Diversification', desc: 'Spread investments across multiple assets and ecosystems' },
              { title: 'Regular Rebalancing', desc: 'Maintain target allocations through periodic portfolio adjustments' },
              { title: 'Volatility Management', desc: 'Monitor volatility and adjust strategies based on market conditions' },
              { title: 'Risk Limits', desc: 'Establish clear parameters for risk exposure based on your objectives' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-4 border-b border-gray-200 last:border-0">
                <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Market Research Process */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Our Market Research Process</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Investment recommendations are based on comprehensive research combining multiple analytical approaches:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Fundamental Analysis', desc: 'Evaluate project technology, team, adoption, and long-term potential' },
              { title: 'Technical Analysis', desc: 'Analyze price trends, support/resistance levels, and market patterns' },
              { title: 'On-Chain Analysis', desc: 'Monitor blockchain metrics, transaction volumes, and holder behavior' },
              { title: 'Macroeconomic Analysis', desc: 'Track interest rates, inflation, and broader economic trends' },
              { title: 'Regulatory Monitoring', desc: 'Stay informed on regulatory developments and compliance requirements' },
              { title: 'Market Sentiment', desc: 'Gauge market sentiment while maintaining disciplined decision-making' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-navy mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
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
              <p className="font-serif text-3xl font-bold text-navy">£2,000</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Duration</p>
              <p className="font-serif text-3xl font-bold text-navy">Flexible</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Risk Profile</p>
              <p className="font-serif text-3xl font-bold text-emerald">High</p>
            </div>
          </div>
          <p className="text-gray-700 mt-8">
            Cryptocurrency investment is suitable for investors who understand digital assets, can tolerate significant volatility, have a long-term investment horizon, and can afford potential losses.
          </p>
        </section>
      </div>
    </ServiceDetailLayout>
  )
}
