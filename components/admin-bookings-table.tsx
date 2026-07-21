import type { Booking } from '@/lib/mongo'

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-100 text-blue-800',
  contacted: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-green-100 text-green-800',
  completed: 'bg-gray-100 text-gray-800',
  cancelled: 'bg-red-100 text-red-800',
}

interface AdminBookingsTableProps {
  bookings: Booking[]
  selectedBooking: Booking | null
  onSelectBooking: (booking: Booking) => void
  onStatusChange: (bookingId: string, newStatus: string) => void
  onDelete: (bookingId: string) => void
}

export function AdminBookingsTable({
  bookings,
  selectedBooking,
  onSelectBooking,
}: AdminBookingsTableProps) {
  if (bookings.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-border p-8 text-center">
        <p className="text-muted-foreground">No bookings yet.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-light-gray border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase">Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase">Email</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase">Investment</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase">Status</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                onClick={() => onSelectBooking(booking)}
                className={`border-b border-border cursor-pointer hover:bg-light-gray transition-colors ${
                  selectedBooking?.id === booking.id ? 'bg-light-gray' : ''
                }`}
              >
                <td className="px-6 py-4 text-sm font-medium text-foreground">{booking.name}</td>
                <td className="px-6 py-4 text-sm text-foreground/70">{booking.email}</td>
                <td className="px-6 py-4 text-sm text-foreground/70 truncate max-w-xs">{booking.investmentType}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[booking.status] || 'bg-gray-100 text-gray-800'}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-foreground/70">{new Date(booking.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="bg-light-gray border-t border-border px-6 py-4">
        <p className="text-xs text-muted-foreground">
          <strong>{bookings.length}</strong> total bookings
          {bookings.filter((b) => b.status === 'new').length > 0 && (
            <> · <strong>{bookings.filter((b) => b.status === 'new').length}</strong> new</>
          )}
        </p>
      </div>
    </div>
  )
}
