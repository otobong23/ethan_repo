import nodemailer from 'nodemailer'
import type { Booking } from './storage'

// Create a transporter (using ethereal for development, Gmail for production)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendBookingConfirmation(booking: Booking): Promise<void> {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@ethanledger.com',
      to: booking.email,
      subject: 'Consultation Booking Confirmation - Ethan Ledger',
      html: `
        <div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto; color: #0B1F3A;">
          <div style="background: linear-gradient(135deg, #0B1F3A 0%, #1a3a52 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #D4AF37; margin: 0; font-size: 28px;">Consultation Booking Confirmed</h1>
          </div>
          
          <div style="padding: 40px; background: #F7F8FA; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; margin-bottom: 24px;">Hello <strong>${booking.name}</strong>,</p>
            
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
              Thank you for booking a consultation with me. I've received your request and will review your investment profile shortly.
            </p>
            
            <div style="background: white; padding: 20px; border-left: 4px solid #D4AF37; margin-bottom: 24px; border-radius: 4px;">
              <h3 style="margin-top: 0; color: #0B1F3A;">Your Booking Details</h3>
              <p style="margin: 8px 0; font-size: 14px;"><strong>Investment Type:</strong> ${booking.investmentType}</p>
              <p style="margin: 8px 0; font-size: 14px;"><strong>Investment Amount:</strong> ${booking.investmentAmount}</p>
              <p style="margin: 8px 0; font-size: 14px;"><strong>Booking ID:</strong> ${booking.id}</p>
            </div>
            
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
              I typically respond to consultation requests within 24-48 hours. You can expect me to reach out via email or phone shortly.
            </p>
            
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 8px;">Best regards,</p>
            <p style="font-size: 14px; font-weight: 600; color: #D4AF37; margin: 0;">Ethan Ledger</p>
            <p style="font-size: 12px; color: #6B7280; margin: 4px 0;">Private Equity Manager | Investment Strategist</p>
          </div>
          
          <div style="background: #0B1F3A; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #D4AF37; font-size: 12px; margin: 0;">ethanledger90@gmail.com | +44 7446318580</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.error('[v0] Error sending booking confirmation:', error)
    throw new Error('Failed to send confirmation email')
  }
}

export async function sendAdminNotification(booking: Booking): Promise<void> {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@ethanledger.com',
      to: process.env.ADMIN_EMAIL || 'ethanledger90@gmail.com',
      subject: `New Consultation Booking - ${booking.name}`,
      html: `
        <div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto; color: #0B1F3A;">
          <div style="background: #0B1F3A; padding: 20px; color: white; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; color: #D4AF37;">New Consultation Booking</h2>
          </div>
          
          <div style="padding: 20px; background: #F7F8FA; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #E8EBF0;">
                <td style="padding: 12px; font-weight: 600; width: 150px;">Name</td>
                <td style="padding: 12px;">${booking.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E8EBF0;">
                <td style="padding: 12px; font-weight: 600;">Email</td>
                <td style="padding: 12px;"><a href="mailto:${booking.email}" style="color: #0B1F3A; text-decoration: none;">${booking.email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #E8EBF0;">
                <td style="padding: 12px; font-weight: 600;">Phone</td>
                <td style="padding: 12px;"><a href="tel:${booking.phone}" style="color: #0B1F3A; text-decoration: none;">${booking.phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #E8EBF0;">
                <td style="padding: 12px; font-weight: 600;">Investment Type</td>
                <td style="padding: 12px;">${booking.investmentType}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E8EBF0;">
                <td style="padding: 12px; font-weight: 600;">Amount</td>
                <td style="padding: 12px;">${booking.investmentAmount}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E8EBF0;">
                <td style="padding: 12px; font-weight: 600;">Preferred Dates</td>
                <td style="padding: 12px;">${booking.preferredDates.join(', ')}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: 600; vertical-align: top;">Message</td>
                <td style="padding: 12px;">${booking.message}</td>
              </tr>
            </table>
            
            <p style="margin-top: 20px; font-size: 12px; color: #6B7280;">
              <strong>Booking ID:</strong> ${booking.id}
            </p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.error('[v0] Error sending admin notification:', error)
    // Don't throw - admin notification failure shouldn't block user confirmation
  }
}
