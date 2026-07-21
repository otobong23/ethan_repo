import { USER_CONSTANT } from "@/constants/profile.constant"

export function TrackRecord() {
  const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Investors Advised', value: '250+' },
    { label: 'Assets Reviewed', value: '£50M+' },
    { label: 'Opportunities Evaluated', value: '500+' },
    { label: 'Successful Engagements', value: '200+' },
    { label: 'Countries Served', value: '15+' },
  ]

  const credentials = [
    'Certified Financial Analyst (CFA)',
    'Professional Investment Research',
    'Portfolio Strategy Development',
    'Private Equity Analysis',
    'Financial Market Research',
    'Investment Risk Assessment',
  ]

  const whyWork = [
    'Professional investment research',
    'Long-term wealth creation mindset',
    'Transparent communication',
    'Diversified investment approach',
    'Disciplined risk management',
    'Global investment perspective',
    'Client-centered advisory',
    'Ethical investment practices',
  ]

  return (
    <section id="philosophy" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
            Track Record
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A decade of proven expertise managing investment portfolios across diverse asset classes.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-light-gray rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <p className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl font-bold text-navy mb-8 text-center">
            Professional Credentials
          </h3>
          <div className="bg-light-gray rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <div className="w-5 h-5 bg-gold rounded-full mt-0.5 shrink-0"></div>
                  <span className="text-gray-700">{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Work With user */}
        <div>
          <h3 className="font-serif text-3xl font-bold text-navy mb-8 text-center">
            Why Work With {USER_CONSTANT.firstName}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWork.map((reason) => (
              <div key={reason} className="bg-white border-2 border-gold rounded-lg p-6 hover:shadow-lg transition-shadow">
                <p className="text-navy font-semibold text-center">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
