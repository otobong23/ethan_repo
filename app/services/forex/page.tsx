'use client'

import { ServiceDetailLayout } from '@/components/service-detail-layout'
import { Globe, TrendingUp, Shield, BarChart3 } from 'lucide-react'

export default function ForexPage() {
  const faqs = [
    {
      question: 'What is currency market investing?',
      answer:
        'Currency market investing (forex) involves trading or investing in foreign exchange pairs, speculating on or positioning for changes in currency values. This can provide portfolio diversification and opportunities based on macroeconomic trends.',
    },
    {
      question: 'Is Forex suitable for beginners?',
      answer:
        'Forex trading can be complex and carries significant risks. We recommend beginners start with currency exposure through diversified portfolios and educational sessions before direct forex involvement. Our advisory service provides guidance to ensure you understand the risks.',
    },
    {
      question: 'How do you manage currency market risk?',
      answer:
        'We manage risk through position sizing limits, careful analysis of macroeconomic factors, diversification across currency pairs, understanding of leverage implications, and constant monitoring of geopolitical developments.',
    },
    {
      question: 'What currency pairs do you focus on?',
      answer:
        'We provide strategic guidance on major pairs (EUR/USD, GBP/USD), minor pairs, cross pairs, and emerging market currencies based on your risk profile and investment objectives.',
    },
    {
      question: 'How frequently do you reassess currency strategies?',
      answer:
        'We conduct regular reviews as macroeconomic conditions change. We monitor economic data releases, central bank policies, geopolitical events, and adjust strategies accordingly.',
    },
    {
      question: 'What macroeconomic factors influence currency markets?',
      answer:
        'Key factors include interest rates, inflation, employment data, GDP growth, trade balances, geopolitical developments, and central bank policies. Our research team monitors these continuously.',
    },
    {
      question: 'Can I use currency investments for portfolio hedging?',
      answer:
        'Yes, currency positions can be used to hedge other portfolio exposures or provide diversification. We help you understand how currency exposure fits your overall investment strategy.',
    },
    {
      question: 'What are the main risks in currency investing?',
      answer:
        'Key risks include currency volatility, geopolitical events, central bank policy changes, and liquidity risks. We manage these through rigorous analysis, position limits, and comprehensive risk frameworks.',
    },
  ]

  return (
    <ServiceDetailLayout
      title="Global Currency Market Advisory"
      subtitle="Strategic guidance on foreign exchange opportunities and currency diversification"
      heroDescription="Strategic guidance on currency market investments, macroeconomic trends, and foreign exchange opportunities. This advisory service is designed for investors seeking exposure to global currency markets through disciplined analysis and risk management."
      faqs={faqs}
    >
      <div className="space-y-16">
        {/* What is Currency Market Investing */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">What is Currency Market Investing?</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            The foreign exchange market (forex) is where currencies are traded globally. Currency market investing involves positioning for or capitalizing on changes in exchange rates between different currencies, providing portfolio diversification and opportunities based on macroeconomic trends.
          </p>
          <div className="bg-light-gray p-8 rounded-lg">
            <h3 className="font-semibold text-navy mb-4">Key Characteristics:</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                'Largest and most liquid financial market globally',
                'Trading occurs 24/5 across major financial centers',
                'Driven by macroeconomic fundamentals and geopolitical events',
                'Offers portfolio diversification benefits',
                'Can be used for hedging or speculation',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-emerald font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Advisory Services */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Our Advisory Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Market Outlook', desc: 'Regular analysis of currency market trends and positioning recommendations' },
              { title: 'Macroeconomic Analysis', desc: 'Deep dive into economic factors driving currency movements' },
              { title: 'Currency Diversification', desc: 'Recommendations for diversifying portfolio currency exposure' },
              { title: 'Risk Assessment', desc: 'Evaluate your risk tolerance and position sizing' },
              { title: 'Strategy Planning', desc: 'Develop customized currency strategies aligned with your goals' },
              { title: 'Trading Education', desc: 'Educational resources to improve your market understanding' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-navy mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Markets Covered */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Markets We Cover</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-navy mb-4">Major Pairs</h3>
              <ul className="space-y-2 text-gray-700">
                {['EUR/USD', 'GBP/USD', 'USD/JPY', 'USD/CHF'].map((pair) => (
                  <li key={pair} className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gold" />
                    {pair}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-navy mb-4">Other Pairs</h3>
              <ul className="space-y-2 text-gray-700">
                {['Minor Pairs', 'Cross Pairs', 'Emerging Markets', 'Exotic Pairs'].map((category) => (
                  <li key={category} className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald" />
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Research Process */}
        <section className="bg-navy text-white p-8 rounded-lg">
          <h2 className="font-serif text-3xl font-bold mb-8">Our Research Process</h2>
          <p className="text-gray-100 mb-8">
            Currency movements are driven by macroeconomic fundamentals and geopolitical factors. Our research combines multiple approaches:
          </p>
          <div className="space-y-4">
            {[
              { title: 'Economic Data Analysis', desc: 'Monitor inflation, employment, GDP, and other key metrics' },
              { title: 'Central Bank Policy', desc: 'Track monetary policy decisions and forward guidance' },
              { title: 'Inflation Trends', desc: 'Analyze inflation differentials between currency regions' },
              { title: 'Employment Reports', desc: 'Review job creation and labor market strength' },
              { title: 'Geopolitical Analysis', desc: 'Monitor political developments affecting currency values' },
              { title: 'Technical Analysis', desc: 'Combine technical patterns with fundamental analysis' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-4 border-b border-white border-opacity-20 last:border-0">
                <BarChart3 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Management */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Risk Management Framework</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Currency markets involve significant risks. We manage these through disciplined approaches:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Volatility Management', desc: 'Understand and manage currency pair volatility' },
              { title: 'Leverage Awareness', desc: 'Understand implications of leverage in currency trading' },
              { title: 'Capital Preservation', desc: 'Focus on protecting capital alongside growth' },
              { title: 'Diversification', desc: 'Diversify across multiple currency pairs and strategies' },
              { title: 'Position Sizing', desc: 'Limit position sizes to appropriate risk levels' },
              { title: 'Stop Loss Strategy', desc: 'Implement protective measures to limit losses' },
            ].map((item, idx) => (
              <div key={idx} className="bg-light-gray p-6 rounded-lg border-l-4 border-emerald">
                <h4 className="font-semibold text-navy mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Global Market Exposure', desc: 'Access currency opportunities worldwide' },
              { title: 'Portfolio Diversification', desc: 'Diversify beyond traditional asset classes' },
              { title: 'Macroeconomic Insights', desc: 'Benefit from expert macroeconomic analysis' },
              { title: 'Hedging Opportunities', desc: 'Protect portfolio against currency risks' },
              { title: 'Market Education', desc: 'Develop deeper understanding of currency markets' },
              { title: 'Strategic Positioning', desc: 'Position for identified macroeconomic trends' },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white border-2 border-gold rounded-lg p-6">
                <h4 className="font-semibold text-navy mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
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
              <p className="font-serif text-3xl font-bold text-navy">£5,000</p>
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
            Currency market advisory is suitable for experienced investors, those seeking portfolio diversification, and investors interested in macroeconomic-driven investments. Understanding of currency markets is important before participation.
          </p>
        </section>
      </div>
    </ServiceDetailLayout>
  )
}
