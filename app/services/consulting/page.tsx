'use client'

import { ServiceDetailLayout } from '@/components/service-detail-layout'
import { Briefcase, Users, Target, TrendingUp } from 'lucide-react'

export default function ConsultingPage() {
  const faqs = [
    {
      question: 'Who is investment consulting suitable for?',
      answer:
        'Investment consulting works for first-time investors building their first portfolio, business owners diversifying wealth, professionals seeking expert guidance, high-net-worth individuals managing complex portfolios, families planning multi-generational wealth, and institutional investors.',
    },
    {
      question: 'What does the consultation process involve?',
      answer:
        'The process begins with an initial consultation to understand your goals and situation, followed by comprehensive financial assessment, detailed goal analysis, customized strategy development, implementation guidance, and ongoing periodic reviews to keep your strategy on track.',
    },
    {
      question: 'How is investment consulting different from portfolio management?',
      answer:
        'Investment consulting provides advisory and strategic guidance; you maintain control and make decisions. Portfolio management involves delegating investment decisions to us. Consulting offers more control; management offers more convenience.',
    },
    {
      question: 'How long does the strategy development process take?',
      answer:
        'Initial strategy development typically takes 2-4 weeks depending on complexity. We gather information, conduct analysis, and present a comprehensive plan for your review and approval.',
    },
    {
      question: 'Can you help with existing portfolio optimization?',
      answer:
        'Yes, we frequently help clients optimize existing portfolios by rebalancing, identifying gaps, improving diversification, and adjusting strategies to better match evolving goals.',
    },
    {
      question: 'How often should I review my investment strategy?',
      answer:
        'We recommend annual reviews at minimum, with more frequent reviews during significant market changes or life changes. We provide ongoing support and can adjust strategies as needed.',
    },
    {
      question: 'What if my financial situation changes?',
      answer:
        'Investment strategies should evolve with your life changes. We offer flexibility to adjust your plan based on new circumstances, goals, or market conditions.',
    },
    {
      question: 'Do you provide tax optimization advice?',
      answer:
        'We provide general guidance on tax-efficient investing structures. However, we recommend consulting with qualified tax professionals for specific tax planning tailored to your situation.',
    },
  ]

  return (
    <ServiceDetailLayout
      title="Strategic Investment Consulting"
      subtitle="Personalized investment strategies aligned with your unique financial goals"
      heroDescription="Personalized investment consulting designed to help individuals and businesses develop strategic investment plans aligned with their financial objectives. We provide comprehensive guidance on asset allocation, portfolio design, and wealth management strategies."
      faqs={faqs}
    >
      <div className="space-y-16">
        {/* Overview */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Why Investment Consulting?</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Every investor has unique goals, risk tolerances, time horizons, and financial situations requiring personalized strategies. Rather than one-size-fits-all approaches, we develop customized investment plans designed specifically for your circumstances.
          </p>
          <div className="bg-light-gray p-8 rounded-lg border-l-4 border-gold">
            <p className="text-gray-700 leading-relaxed">
              Investment consulting empowers you with knowledge, strategy, and guidance to make informed decisions about your wealth. Whether you&apos;re beginning your investment journey or optimizing an existing portfolio, professional guidance helps you navigate complex decisions with confidence.
            </p>
          </div>
        </section>

        {/* Who This Service Is For */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Who This Service Is For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'First-Time Investors', desc: 'Building your first investment portfolio with professional guidance' },
              { icon: Briefcase, title: 'Business Owners', desc: 'Diversifying wealth beyond your primary business' },
              { icon: TrendingUp, title: 'Professionals', desc: 'High earners seeking to optimize wealth accumulation' },
              { icon: Target, title: 'High-Net-Worth Individuals', desc: 'Managing complex portfolios across multiple assets' },
              { icon: Users, title: 'Families', desc: 'Planning multi-generational wealth and legacy' },
              { icon: Briefcase, title: 'Institutions', desc: 'Organizations requiring sophisticated investment strategies' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-gold mb-3" />
                  <h4 className="font-semibold text-navy mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Areas We Help With */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Investment Consulting Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Goal Setting', desc: 'Define clear, measurable financial goals and investment objectives' },
              { title: 'Portfolio Design', desc: 'Create diversified portfolios aligned with your goals and timeline' },
              { title: 'Asset Allocation', desc: 'Optimize allocation across stocks, bonds, real estate, and alternatives' },
              { title: 'Risk Assessment', desc: 'Identify your risk tolerance and implement appropriate strategies' },
              { title: 'Investment Planning', desc: 'Develop comprehensive plans for wealth accumulation and growth' },
              { title: 'Wealth Preservation', desc: 'Implement strategies to protect and preserve accumulated wealth' },
              { title: 'Tax Efficiency', desc: 'General guidance on tax-efficient investment structures' },
              { title: 'Rebalancing Strategies', desc: 'Maintain optimal allocations through periodic adjustments' },
            ].map((item, idx) => (
              <div key={idx} className="bg-light-gray p-6 rounded-lg">
                <h4 className="font-semibold text-navy mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation Process */}
        <section className="bg-navy text-white p-8 rounded-lg">
          <h2 className="font-serif text-3xl font-bold mb-8">Our Consultation Process</h2>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Initial Consultation',
                desc: 'Get to know you, understand your situation, goals, and expectations',
              },
              {
                step: '2',
                title: 'Financial Assessment',
                desc: 'Comprehensive review of your current financial situation and assets',
              },
              {
                step: '3',
                title: 'Goal Analysis',
                desc: 'Detailed discussion of short-term and long-term financial objectives',
              },
              {
                step: '4',
                title: 'Strategy Development',
                desc: 'Create customized investment strategy with specific recommendations',
              },
              {
                step: '5',
                title: 'Implementation Guidance',
                desc: 'Support throughout the implementation of your investment strategy',
              },
              {
                step: '6',
                title: 'Periodic Reviews',
                desc: 'Regular check-ins to ensure strategy remains aligned with goals',
              },
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

        {/* Why Work With Us */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Why Choose Our Consulting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Personalized Advice', desc: 'Customized strategies designed specifically for your situation' },
              { title: 'Research-Driven', desc: 'Recommendations based on thorough analysis and market research' },
              { title: 'Long-Term Perspective', desc: 'Focus on sustainable wealth creation over extended periods' },
              { title: 'Transparent Process', desc: 'Clear communication throughout the consulting engagement' },
              { title: 'Experienced Team', desc: 'Work with professionals with years of investment experience' },
              { title: 'Ongoing Support', desc: 'Continued guidance and support after strategy implementation' },
              { title: 'Disciplined Approach', desc: 'Systematic process focused on fundamentals, not emotion' },
              { title: 'Educational Focus', desc: 'Help you understand your investments, not just follow advice' },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white border-2 border-gold rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-navy mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Requirements */}
        <section className="bg-light-gray p-8 rounded-lg">
          <h2 className="font-serif text-3xl font-bold text-navy mb-8">Engagement Requirements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Minimum Investment</p>
              <p className="font-serif text-3xl font-bold text-navy">Consultation</p>
              <p className="text-sm text-gray-600 mt-2">Based discussions</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Duration</p>
              <p className="font-serif text-3xl font-bold text-navy">Flexible</p>
              <p className="text-sm text-gray-600 mt-2">Ongoing as needed</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">Engagement Type</p>
              <p className="font-serif text-3xl font-bold text-emerald">Advisory</p>
              <p className="text-sm text-gray-600 mt-2">You maintain control</p>
            </div>
          </div>
          <p className="text-gray-700 mt-8">
            Investment consulting is accessible to investors at all levels. Whether you have £10,000 or £1,000,000 to invest, we provide professional guidance tailored to your specific circumstances.
          </p>
        </section>

        {/* Typical Engagement Outcomes */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">Typical Engagement Outcomes</h2>
          <div className="space-y-4">
            {[
              'Clearly defined investment goals with measurable milestones',
              'Customized investment strategy aligned with your risk tolerance',
              'Diversified portfolio recommendations across multiple asset classes',
              'Asset allocation framework tailored to your objectives',
              'Implementation roadmap with specific action steps',
              'Regular monitoring framework and review schedule',
              'Enhanced understanding of your investments and markets',
              'Confidence in your investment decisions and strategy',
            ].map((outcome, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 bg-light-gray rounded-lg">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald text-white text-sm font-bold">
                    ✓
                  </div>
                </div>
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ServiceDetailLayout>
  )
}
