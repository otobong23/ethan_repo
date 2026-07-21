import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      category: 'Navigation',
      links: [
        { label: 'Home', href: '#' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      category: 'Resources',
      links: [
        { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' },
        { label: 'Newsletter', href: '#newsletter' },
        { label: 'Privacy Policy', href: '#' },
      ],
    },
    {
      category: 'Legal',
      links: [
        { label: 'Terms of Use', href: '#' },
        { label: 'Risk Disclosure', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Disclaimer', href: '#' },
      ],
    },
  ]

  return (
    <footer className="w-full bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold text-navy rounded-lg flex items-center justify-center font-serif font-bold">
                EL
              </div>
              <span className="font-serif font-bold text-lg">Ethan Ledger</span>
            </div>
            <p className="text-gray-300 text-sm">
              Private Equity Manager & Investment Strategist
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <p>+44 7446318580</p>
              <p>ethanledger90@gmail.com</p>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.category}>
              <h4 className="font-semibold text-white mb-4">{section.category}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Ethan Ledger. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              Professional Investment Guidance | Private Equity | Wealth Management
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
