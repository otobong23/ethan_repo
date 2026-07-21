import Image from 'next/image'
import { Check } from 'lucide-react'
import { USER_CONSTANT } from '@/constants/profile.constant'

export function About() {
  const coreValues = [
    'Integrity',
    'Transparency',
    'Discipline',
    'Professionalism',
    'Long-Term Thinking',
    'Client First',
    'Strategic Decision Making',
    'Continuous Learning',
  ]

  return (
    <section id="about" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Heading */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            About {USER_CONSTANT.fullName}
          </h2>
          <p className="text-xl text-gold font-semibold">
            Private Equity Manager & Investment Strategist
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {USER_CONSTANT.fullName} is a Private Equity Manager and Investment Strategist dedicated to helping individuals, entrepreneurs, and businesses grow wealth through carefully selected investment opportunities. His investment philosophy combines disciplined research, strategic risk management, and long-term value creation across multiple asset classes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With experience spanning private equity, cryptocurrency, public markets, venture capital, and alternative investments, {USER_CONSTANT.firstName} focuses on identifying opportunities that align with each client&apos;s financial goals and risk profile.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Rather than pursuing short-term speculation, his approach emphasizes sustainable wealth creation through structured investment planning, market analysis, and portfolio diversification. Whether working with experienced investors or those beginning their investment journey, {USER_CONSTANT.firstName} provides professional guidance designed to simplify complex financial decisions.
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/about.jpeg"
              alt={USER_CONSTANT.fullName}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Investment Philosophy */}
        <div className="bg-light-gray rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="font-serif text-3xl font-bold text-navy mb-4">
            Investment Philosophy
          </h3>
          <p className="text-lg text-gray-700 italic leading-relaxed">
            "Markets reward patience, discipline, and informed decision-making. Every investment should be based on research, proper risk management, and long-term value rather than emotion or speculation."
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-light-gray rounded-xl p-8">
            <h4 className="font-serif text-2xl font-bold text-navy mb-3">Mission</h4>
            <p className="text-gray-700">
              To help individuals and businesses make informed investment decisions that create sustainable long-term wealth.
            </p>
          </div>
          <div className="bg-light-gray rounded-xl p-8">
            <h4 className="font-serif text-2xl font-bold text-navy mb-3">Vision</h4>
            <p className="text-gray-700">
              To become a trusted global investment advisor recognized for integrity, strategic insight, and consistent value creation.
            </p>
          </div>
          <div className="bg-light-gray rounded-xl p-8">
            <h4 className="font-serif text-2xl font-bold text-navy mb-3">Impact</h4>
            <p className="text-gray-700">
              Creating measurable wealth growth through transparent strategies and long-term partnership with our investors.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="font-serif text-3xl font-bold text-navy mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {coreValues.map((value) => (
              <div key={value} className="flex items-center gap-3 bg-light-gray rounded-lg p-4">
                <Check className="w-5 h-5 text-emerald shrink-0" />
                <span className="font-medium text-navy">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
