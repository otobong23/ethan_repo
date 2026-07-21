import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BookingForm } from '@/components/booking-form'

export const metadata = {
  title: 'Book a Consultation | Ethan Ledger',
  description: 'Schedule a professional consultation with Ethan Ledger to discuss your investment goals and opportunities.',
}

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-b from-primary to-primary/95 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Book Your Consultation</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Ready to explore investment opportunities? Schedule a one-on-one consultation with Ethan Ledger to discuss your financial goals and discover tailored investment strategies.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              {/* Quick Info */}
              <div className="bg-card rounded-lg p-8 mb-12 border border-border">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                    <p className="text-lg font-semibold text-foreground">24-48 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Consultation Duration</p>
                    <p className="text-lg font-semibold text-foreground">30-60 Minutes</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Meeting Format</p>
                    <p className="text-lg font-semibold text-foreground">Virtual or In-Person</p>
                  </div>
                </div>
                <p className="text-sm text-foreground border-t border-border pt-4 mt-4">
                  All consultations are confidential and designed to understand your unique investment profile, goals, and risk tolerance.
                </p>
              </div>

              {/* Form */}
              <BookingForm />

              {/* Additional Info */}
              <div className="mt-12 pt-12 border-t border-border">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">1.</span>
                    <span>We&apos;ll discuss your financial background, investment experience, and goals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">2.</span>
                    <span>I&apos;ll assess your risk tolerance and investment time horizon.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">3.</span>
                    <span>We&apos;ll explore suitable investment opportunities aligned with your profile.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">4.</span>
                    <span>I&apos;ll provide personalized recommendations and next steps.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
