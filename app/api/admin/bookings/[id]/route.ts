import { NextRequest, NextResponse } from 'next/server'
import { validateSession, clearSession } from '@/lib/auth'
import { updateBooking, deleteBooking } from '@/lib/mongo'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAuthenticated = await validateSession()
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
    const body = await request.json()

    const updated = await updateBooking(id, body)

    if (!updated) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(updated, { status: 200 })
  } catch (error) {
    console.error('[v0] Update booking error:', error)
    return NextResponse.json(
      { error: 'Failed to update booking' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAuthenticated = await validateSession()
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
    const deleted = await deleteBooking(id)

    if (!deleted) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Booking deleted' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Delete booking error:', error)
    return NextResponse.json(
      { error: 'Failed to delete booking' },
      { status: 500 }
    )
  }
}
