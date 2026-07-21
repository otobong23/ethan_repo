'use client'

import { Mail, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your newsletter signup logic here
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="newsletter" className="w-full py-20 bg-linear-to-r from-navy via-navy/95 to-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-8">
          <Mail className="w-16 h-16 text-gold shrink-0 hidden sm:block" />

          <div className="flex-1">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Stay Ahead of the Markets
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl">
              Receive investment insights, market commentary, and educational resources delivered directly to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-[#e6c200] transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {submitted && (
              <p className="mt-4 text-emerald font-semibold">
                ✓ Thank you! Check your email for confirmation.
              </p>
            )}

            <p className="text-sm text-gray-300 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
