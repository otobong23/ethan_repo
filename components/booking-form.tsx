'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const INVESTMENT_TYPES = [
  'Private Equity Investments',
  'Cryptocurrency Investment Advisory',
  'Stock Portfolio Management',
  'Global Currency Market Advisory (Forex)',
  'Land Banking Advisory',
  'Investment Consulting',
]

const PREFERRED_DATE_OPTIONS = [
  'Next 2 days',
  'Next 5 days',
  'Next 7 days',
  'Next 2 weeks',
  'Next month',
  'Flexible',
]

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentType: '',
    investmentAmount: '',
    preferredDates: [] as string[],
    message: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDateToggle = (date: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredDates: prev.preferredDates.includes(date)
        ? prev.preferredDates.filter((d) => d !== date)
        : [...prev.preferredDates, date],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      if (!formData.name || !formData.email || !formData.phone || !formData.investmentType || !formData.investmentAmount || formData.preferredDates.length === 0 || !formData.message) {
        setError('Please fill in all required fields')
        setIsLoading(false)
        return
      }

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit booking')
      }

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        investmentType: '',
        investmentAmount: '',
        preferredDates: [],
        message: '',
      })

      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
            placeholder="Your full name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
            placeholder="your@email.com"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
            placeholder="+44 7446 318 580"
            required
          />
        </div>

        {/* Investment Type */}
        <div>
          <label htmlFor="investmentType" className="block text-sm font-semibold text-foreground mb-2">
            Investment Type <span className="text-red-500">*</span>
          </label>
          <select
            id="investmentType"
            name="investmentType"
            value={formData.investmentType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
            required
          >
            <option value="">Select an investment service</option>
            {INVESTMENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Investment Amount */}
        <div>
          <label htmlFor="investmentAmount" className="block text-sm font-semibold text-foreground mb-2">
            Intended Investment Amount <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="investmentAmount"
            name="investmentAmount"
            value={formData.investmentAmount}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
            placeholder="e.g., £25,000 - £50,000"
            required
          />
        </div>

        {/* Preferred Dates */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Preferred Consultation Dates <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {PREFERRED_DATE_OPTIONS.map((date) => (
              <button
                key={date}
                type="button"
                onClick={() => handleDateToggle(date)}
                className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                  formData.preferredDates.includes(date)
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-white text-foreground hover:border-primary'
                }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Additional Information <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white resize-none"
            rows={5}
            placeholder="Tell us about your investment goals, experience level, and any specific questions you have..."
            required
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
            Thank you! Your consultation booking has been submitted. We will contact you within 24-48 hours.
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-5 rounded-lg transition-all"
        >
          {isLoading ? 'Submitting...' : 'Book Your Consultation'}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By booking a consultation, you agree to our privacy policy and terms of use.
        </p>
      </form>
    </div>
  )
}
