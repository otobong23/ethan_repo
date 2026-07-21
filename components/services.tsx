import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Zap, DollarSign, Globe, Home, Briefcase } from 'lucide-react'

const services = [
  {
    id: 'private-equity',
    icon: TrendingUp,
    title: 'Private Equity Investments',
    description: 'Identify and evaluate high-growth private businesses with strong long-term potential.',
    benefits: ['Exclusive opportunities', 'Capital appreciation', 'Professional due diligence', 'Strategic exposure'],
    minimum: '£25,000',
    duration: '3–10 Years',
  },
  {
    id: 'cryptocurrency',
    icon: Zap,
    title: 'Cryptocurrency Investment Advisory',
    description: 'Professional guidance on cryptocurrency strategies based on research and diversification.',
    benefits: ['Diversified exposure', 'Market research', 'Risk management', 'Long-term planning'],
    minimum: '£2,000',
    duration: 'Flexible',
  },
  {
    id: 'stock-portfolio',
    icon: DollarSign,
    title: 'Stock Portfolio Management',
    description: 'Professional management focusing on long-term capital appreciation and risk-adjusted returns.',
    benefits: ['Diversification', 'Market analysis', 'Portfolio optimization', 'Risk management'],
    minimum: '£10,000',
    duration: 'Flexible',
  },
  {
    id: 'forex',
    icon: Globe,
    title: 'Global Currency Market Advisory',
    description: 'Strategic guidance on currency markets through disciplined analysis and risk management.',
    benefits: ['Global exposure', 'Macroeconomic insights', 'Diversification', 'Market education'],
    minimum: '£5,000',
    duration: 'Flexible',
  },
  {
    id: 'land-banking',
    icon: Home,
    title: 'Land Banking Advisory',
    description: 'Identify strategically located land with long-term appreciation potential.',
    benefits: ['Capital appreciation', 'Tangible assets', 'Long-term wealth', 'Strategic locations'],
    minimum: '£15,000',
    duration: '5–20 Years',
  },
  {
    id: 'consulting',
    icon: Briefcase,
    title: 'Investment Consulting',
    description: 'Personalized consulting to develop strategic investment plans aligned with your goals.',
    benefits: ['Custom strategies', 'Financial planning', 'Portfolio optimization', 'Investment education'],
    minimum: 'Consultation Based',
    duration: 'Flexible',
  },
]

export function Services() {
  return (
    <section id="services" className="w-full py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Investment Services
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Comprehensive investment solutions tailored to your financial goals and risk profile.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>

                <div className="mb-6 space-y-2">
                  <h4 className="font-semibold text-navy text-sm uppercase tracking-wider">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 border-t border-gray-200 pt-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Minimum Investment</span>
                    <span className="font-semibold text-navy">{service.minimum}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Duration</span>
                    <span className="font-semibold text-navy">{service.duration}</span>
                  </div>
                </div>

                <Link href={`/services/${service.id}`} className="w-full mt-6 flex items-center justify-center gap-2 text-navy font-semibold hover:text-gold transition-colors group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Process Overview */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h3 className="font-serif text-3xl font-bold text-navy mb-8 text-center">
            Our Investment Process
          </h3>

          <div className="grid md:grid-cols-5 gap-4 md:gap-2">
            {[
              { step: '1', title: 'Consultation', desc: 'Initial assessment' },
              { step: '2', title: 'Analysis', desc: 'Detailed evaluation' },
              { step: '3', title: 'Strategy', desc: 'Custom planning' },
              { step: '4', title: 'Execution', desc: 'Implementation' },
              { step: '5', title: 'Monitoring', desc: 'Ongoing oversight' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold mx-auto">
                    {item.step}
                  </div>
                  {idx < 4 && <ArrowRight className="w-5 h-5 text-gold hidden md:block ml-2" />}
                </div>
                <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
