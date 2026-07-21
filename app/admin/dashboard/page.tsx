'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { AdminBookingsTable } from '@/components/admin-bookings-table'
import type { Booking } from '@/lib/mongo'
import { USER_CONSTANT } from '@/constants/profile.constant'

export default function AdminDashboardPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [bookingToDelete, setBookingToDelete] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/bookings')
        if (response.status === 401) {
          router.push('/admin/login')
          return
        }
        if (!response.ok) throw new Error('Failed to fetch bookings')
        const data = await response.json()
        setBookings(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load bookings')
      } finally {
        setIsLoading(false)
      }
    }

    fetchBookings()
  }, [router])

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (err) {
      console.error('[v0] Logout error:', err)
    }
  }

  const handleStatusChange = async (bookingId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })

      if (!response.ok) throw new Error('Failed to update status')
      const updated = await response.json()
      setBookings(bookings.map((b) => (b.id === bookingId ? updated : b)))
      if (selectedBooking?.id === bookingId) {
        setSelectedBooking(updated)
      }
    } catch (err) {
      console.error('[v0] Status update error:', err)
    }
  }

  const handleAddNote = async (bookingId: string, note: string) => {
    try {
      const booking = bookings.find((b) => b.id === bookingId)
      if (!booking) return

      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: note }),
      })

      if (!response.ok) throw new Error('Failed to add note')
      const updated = await response.json()
      setBookings(bookings.map((b) => (b.id === bookingId ? updated : b)))
      if (selectedBooking?.id === bookingId) {
        setSelectedBooking(updated)
      }
    } catch (err) {
      console.error('[v0] Add note error:', err)
    }
  }

  // Opens the confirmation modal instead of window.confirm
  const handleDelete = (bookingId: string) => {
    setBookingToDelete(bookingId)
  }

  // Runs the actual deletion once the user confirms in the modal
  const confirmDelete = async () => {
    if (!bookingToDelete) return
    const bookingId = bookingToDelete

    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to delete booking')
      setBookings(bookings.filter((b) => b.id !== bookingId))
      if (selectedBooking?.id === bookingId) {
        setSelectedBooking(null)
      }
    } catch (err) {
      console.error('[v0] Delete error:', err)
    } finally {
      setBookingToDelete(null)
    }
  }

  const cancelDelete = () => {
    setBookingToDelete(null)
  }

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold text-primary">{USER_CONSTANT.fullName} Admin</h1>
          <Button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bookings List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Consultation Bookings</h2>

            {isLoading ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <p className="text-muted-foreground">Loading bookings...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                {error}
              </div>
            ) : (
              <AdminBookingsTable
                bookings={bookings}
                selectedBooking={selectedBooking}
                onSelectBooking={setSelectedBooking}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            )}
          </div>

          {/* Details Panel */}
          {selectedBooking && (
            <div className="bg-white rounded-lg border border-border overflow-hidden sticky top-8">
              <div className="bg-primary text-white p-6">
                <h3 className="text-lg font-bold">Booking Details</h3>
              </div>

              <div className="p-6 space-y-6">
                {/* Contact Info */}
                <div>
                  <p className="text-xs uppercase font-semibold text-muted-foreground mb-2">Contact</p>
                  <p className="font-semibold text-foreground">{selectedBooking.name}</p>
                  <a href={`mailto:${selectedBooking.email}`} className="text-primary hover:underline text-sm">
                    {selectedBooking.email}
                  </a>
                  <a href={`tel:${selectedBooking.phone}`} className="text-primary hover:underline text-sm block">
                    {selectedBooking.phone}
                  </a>
                </div>

                {/* Investment Details */}
                <div className="border-t border-border pt-4">
                  <p className="text-xs uppercase font-semibold text-muted-foreground mb-2">Investment</p>
                  <p className="text-sm text-foreground mb-1">
                    <strong>Type:</strong> {selectedBooking.investmentType}
                  </p>
                  <p className="text-sm text-foreground">
                    <strong>Amount:</strong> {selectedBooking.investmentAmount}
                  </p>
                </div>

                {/* Dates */}
                <div className="border-t border-border pt-4">
                  <p className="text-xs uppercase font-semibold text-muted-foreground mb-2">Preferred Dates</p>
                  <p className="text-sm text-foreground">{selectedBooking.preferredDates.join(', ')}</p>
                </div>

                {/* Message */}
                <div className="border-t border-border pt-4">
                  <p className="text-xs uppercase font-semibold text-muted-foreground mb-2">Message</p>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{selectedBooking.message}</p>
                </div>

                {/* Status */}
                <div className="border-t border-border pt-4">
                  <p className="text-xs uppercase font-semibold text-muted-foreground mb-2">Status</p>
                  <select
                    value={selectedBooking.status}
                    onChange={(e) => handleStatusChange(selectedBooking.id, e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                {/* Notes */}
                <div className="border-t border-border pt-4">
                  <p className="text-xs uppercase font-semibold text-muted-foreground mb-2">Notes</p>
                  <textarea
                    value={selectedBooking.notes || ''}
                    onChange={(e) => handleAddNote(selectedBooking.id, e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm resize-none"
                    rows={4}
                    placeholder="Add internal notes..."
                  />
                </div>

                {/* Metadata */}
                <div className="border-t border-border pt-4 text-xs text-muted-foreground space-y-1">
                  <p>Created: {new Date(selectedBooking.createdAt).toLocaleDateString()}</p>
                  <p>Updated: {new Date(selectedBooking.lastUpdated).toLocaleDateString()}</p>
                  <p>ID: {selectedBooking.id}</p>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(selectedBooking.id)}
                  className="w-full py-2 px-4 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg text-sm font-medium transition-colors border border-red-200"
                >
                  Delete Booking
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {bookingToDelete && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={cancelDelete}
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-sm p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-foreground mb-2">Delete Booking</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Are you sure you want to delete this booking? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <Button
                onClick={cancelDelete}
                variant="outline"
                className="border-border"
              >
                Cancel
              </Button>
              <Button
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}