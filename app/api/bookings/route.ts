import { NextRequest, NextResponse } from 'next/server'
import { saveBooking, getBookings } from '@/lib/mongo'
import { sendBookingConfirmation, sendAdminNotification } from '@/lib/email'
import { v4 as uuidv4 } from 'uuid'
import type { Booking } from '@/lib/mongo'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, investmentType, investmentAmount, preferredDates, message } = body

    // Validate required fields
    if (!name || !email || !phone || !investmentType || !investmentAmount || !preferredDates || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create booking object
    const booking: Booking = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      name,
      email,
      phone,
      investmentType,
      investmentAmount,
      preferredDates,
      message,
      status: 'new',
      lastUpdated: new Date().toISOString(),
    }

    // Save booking
    await saveBooking(booking)

    // Send confirmation emails
    try {
      await sendBookingConfirmation(booking)
      await sendAdminNotification(booking)
    } catch (emailError) {
      console.error('[v0] Email sending error:', emailError)
      // Continue even if email fails
    }

    return NextResponse.json(
      { success: true, bookingId: booking.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] Booking API error:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const bookings = await getBookings()
    return NextResponse.json(bookings)
  } catch (error) {
    console.error('[v0] Error fetching bookings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}
