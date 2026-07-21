'use client'

import { ServiceDetailLayout } from '@/components/service-detail-layout'
import { Home, TrendingUp, MapPin, CheckCircle } from 'lucide-react'

export default function LandBankingPage() {
  const faqs = [
    {
      question: 'What is land banking?',
      answer:
        'Land banking is the practice of purchasing strategically located undeveloped land for potential long-term appreciation. Investors acquire land positioned to benefit from infrastructure development, urban expansion, or population growth, holding it until its value increases significantly.',
    },
    {
      question: 'How are properties selected for land banking?',
      answer:
        'We analyze multiple factors: proximity to infrastructure projects, urban expansion plans, population growth projections, government development initiatives, accessibility, regulatory environment, and long-term appreciation potential. Each property undergoes comprehensive due diligence before recommendation.',
    },
    {
      question: 'How long should I hold land investments?',
      answer:
        'Land banking is a long-term strategy, typically 5-20+ years depending on local development timelines. Properties near active development may appreciate faster, while emerging areas may require longer holding periods.',
    },
    {
      question: 'What are the advantages of land banking over other real estate?',
      answer:
        'Land banking offers lower maintenance costs compared to developed properties, scarcity as a hedge against inflation, tangible asset ownership, and significant long-term appreciation potential without ongoing rental management responsibilities.',
    },
    {
      question: 'What are the risks in land banking?',
      answer:
        'Key risks include market risk, development delays, regulatory changes, and lower liquidity compared to other investments. We mitigate these through careful location selection, legal due diligence, and diversification across multiple properties.',
    },
    {
      question: 'How do you conduct due diligence on land investments?',
      answer:
        'Our due diligence includes: title verification, ownership checks, survey verification, regulatory compliance review, environmental assessments, infrastructure analysis, and market trend evaluation.',
    },
    {
      question: 'Can I sell my land investment before the planned holding period?',
      answer:
        'Yes, land is generally liquid compared to developed real estate, though sale prices may be lower if sold before significant appreciation. We discuss exit options during initial consultation.',
    },
    {
      question: 'What regions or countries do you focus on?',
      answer:
        'We focus on regions with strong economic growth, infrastructure development, and favorable regulatory environments. Geographic focus is tailored to diversification and individual risk preferences.',
    },
  ]

  return (
    <ServiceDetailLayout
      title="Land Banking Advisory"
      subtitle="Strategic land acquisition for long-term capital appreciation"
      heroDescription="Identify strategically located land acquisition opportunities with long-term appreciation potential based on infrastructure development, urban expansion, and regional growth. We help investors acquire tangible assets positioned to benefit from long-term market dynamics."
      faqs={faqs}
    >
      <div className="space-y-16">
        {/* What is Land Banking */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">What is Land Banking?</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Land banking is the acquisition of strategically located undeveloped land for potential long-term appreciation. Rather than developing the land immediately, investors hold it as an asset that benefits from future development, urban expansion, infrastructure projects, and population growth.
          </p>
          <div className="bg-light-gray p-8 rounded-lg">
            <h3 className="font-semibold text-navy mb-4">Land Banking Advantages:</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                'Lower maintenance costs compared to developed properties',
                'Tangible asset providing inflation hedge',
                'Scarcity creates long-term appreciation potential',
                'Simplified ownership without tenant/property management',
                'Flexible exit strategies when appreciation targets are met',
                'Portfolio diversification into real assets',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Selection Criteria */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Our Selection Criteria</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We identify land opportunities based on multiple fundamental factors that drive long-term appreciation:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Infrastructure Projects', desc: 'Proximity to planned highways, railways, ports, or airports' },
              { title: 'Urban Expansion', desc: 'Areas experiencing documented urban growth and development' },
              { title: 'Population Growth', desc: 'Regions with increasing populations driving demand' },
              { title: 'Government Development', desc: 'Properties in planned development zones or enterprise areas' },
              { title: 'Accessibility', desc: 'Strategic location with good connectivity and access' },
              { title: 'Future Demand', desc: 'Analysis of long-term demand drivers for the region' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border-2 border-gold rounded-lg p-6">
                <h4 className="font-semibold text-navy mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Process */}
        <section className="bg-navy text-white p-8 rounded-lg">
          <h2 className="font-serif text-3xl font-bold mb-8">Our Investment Process</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Property Identification', desc: 'Identify strategic land opportunities through research and network' },
              { step: '2', title: 'Market Analysis', desc: 'Conduct comprehensive analysis of growth drivers and potential' },
              { step: '3', title: 'Legal Due Diligence', desc: 'Verify ownership, titles, legal rights, and regulatory compliance' },
              { step: '4', title: 'Acquisition Guidance', desc: 'Guide purchase process ensuring favorable terms and protection' },
              { step: '5', title: 'Long-Term Holding', desc: 'Monitor property, maintain holdings, track development' },
              { step: '6', title: 'Exit Strategy', desc: 'Execute sale when appreciation targets or opportunities arise' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 pb-4 border-b border-white border-opacity-20 last:border-0">
                <div className="flex-shrink-0">
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

        {/* Why Choose Land Banking */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Why Investors Choose Land Banking</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Lower Maintenance',
                desc: 'Unlike developed properties, land requires minimal upkeep, reducing ongoing costs.',
              },
              {
                title: 'Scarcity Premium',
                desc: 'Land cannot be created; supply is finite, supporting long-term value appreciation.',
              },
              {
                title: 'Inflation Hedge',
                desc: 'Real assets like land historically protect against inflation and currency devaluation.',
              },
              {
                title: 'Long-Term Appreciation',
                desc: 'Strategic properties appreciate significantly as regions develop and demand increases.',
              },
              {
                title: 'Tangible Asset',
                desc: 'Physical ownership provides security and peace of mind compared to intangible investments.',
              },
              {
                title: 'Portfolio Diversification',
                desc: 'Add real estate exposure to diversify beyond stocks, bonds, and other financial assets.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-light-gray p-6 rounded-lg border-l-4 border-emerald">
                <h4 className="font-semibold text-navy mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Due Diligence */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Comprehensive Due Diligence</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Every land banking investment undergoes rigorous due diligence to protect your interests:
          </p>
          <div className="space-y-4">
            {[
              { title: 'Title Verification', desc: 'Confirm clear, marketable title with no encumbrances' },
              { title: 'Ownership Checks', desc: 'Verify current ownership and chain of title' },
              { title: 'Survey Verification', desc: 'Confirm property boundaries and land measurements' },
              { title: 'Regulatory Compliance', desc: 'Ensure compliance with all local laws and regulations' },
              { title: 'Environmental Assessment', desc: 'Review environmental status and any remediation needs' },
              { title: 'Market Analysis', desc: 'Evaluate comparable properties and market trends' },
              { title: 'Infrastructure Mapping', desc: 'Map proximity to planned infrastructure projects' },
              { title: 'Growth Projections', desc: 'Analyze long-term growth potential based on demographics' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-4 border-b border-gray-200 last:border-0">
                <Home className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
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
              <p className="font-serif text-3xl font-bold text-navy">£15,000</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Typical Duration</p>
              <p className="font-serif text-3xl font-bold text-navy">5–20 Years</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Risk Profile</p>
              <p className="font-serif text-3xl font-bold text-emerald">Moderate</p>
            </div>
          </div>
          <p className="text-gray-700 mt-8">
            Land banking is suitable for long-term investors seeking real asset exposure, those comfortable with multi-year holding periods, and investors interested in geographic diversification and inflation protection.
          </p>
        </section>

        {/* Risk Disclosure */}
        <section className="bg-white border-2 border-red-200 rounded-lg p-8">
          <h3 className="font-semibold text-navy mb-4">Key Risks to Understand:</h3>
          <ul className="space-y-3 text-gray-700">
            {[
              'Land values can fluctuate based on market conditions and development timelines',
              'Development delays or cancellations can affect appreciation potential',
              'Regulatory changes may impact future development opportunities',
              'Lower liquidity compared to stocks or bonds; sales may take time',
              'Property taxes and maintenance costs continue during holding period',
              'Geographic concentration risks if properties are in similar regions',
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </ServiceDetailLayout>
  )
}
