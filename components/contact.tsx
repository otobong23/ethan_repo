import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Icon } from '@iconify/react';

export function Contact() {
  const contactMethods = [
    {
      icon: 'ic:baseline-whatsapp',
      label: 'Phone',
      value: '+44 7446318580',
      action: 'Message Now',
    },
    {
      icon: 'lucide:mail',
      label: 'Email',
      value: 'ethanledger90@gmail.com',
      action: 'Send Email',
    },
    {
      icon: 'lucide:calendar',
      label: 'Schedule',
      value: 'Book a Consultation',
      action: 'Book Now',
    },
  ]

  return (
    <section id="contact" className="w-full py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Ready to Build Your Portfolio?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Book a professional consultation today and begin developing a structured investment strategy tailored to your goals.
          </p>
        </div>

        {/* Main CTA */}
        <div className="mb-16 text-center">
          <Link href="/book-consultation" className="px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-[#0a1830] transition-colors text-lg inline-flex items-center gap-2 group shadow-lg">
            Schedule Your Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map(method => {
            return (
              <div key={method.label} className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <Icon icon={method.icon} className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-semibold text-navy mb-2">{method.label}</h3>
                <p className="text-gray-700 mb-4 font-medium">{method.value}</p>
                {method.label === 'Schedule' ? (
                  <Link href="/book-consultation" className="text-navy font-semibold hover:text-gold transition-colors flex items-center justify-center gap-2 w-full">
                    {method.action}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <a href={method.label === 'Phone' ? `tel:${method.value}` : `mailto:${method.value}`} className="text-navy font-semibold hover:text-gold transition-colors flex items-center justify-center gap-2 w-full">
                    {method.action}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            )
          })}
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h3 className="font-serif text-2xl font-bold text-navy mb-6">Legal Disclaimer</h3>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              The information provided on this website is intended solely for educational and informational purposes and should not be interpreted as financial, investment, legal, or tax advice.
            </p>
            <p>
              All investments involve varying degrees of risk, including the potential loss of principal. Past performance does not guarantee future results.
            </p>
            <p>
              Prospective investors should conduct their own due diligence and consult qualified financial, legal, or tax professionals before making any investment decisions.
            </p>
            <p>
              Investment opportunities may be subject to eligibility requirements, regulatory restrictions, and applicable laws within the investor&apos;s jurisdiction.
            </p>
            <p className="font-semibold text-navy pt-4">
              By engaging with this portfolio and services, you acknowledge understanding these terms and the inherent risks of investing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
