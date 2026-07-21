import { writeFile, readFile } from 'fs/promises'
import { join } from 'path'

export interface Booking {
  id: string
  createdAt: string
  name: string
  email: string
  phone: string
  investmentType: string
  investmentAmount: string
  preferredDates: string[]
  message: string
  status: 'new' | 'contacted' | 'confirmed' | 'completed' | 'cancelled'
  notes?: string
  lastUpdated: string
}

const BOOKINGS_FILE = join(process.cwd(), 'data', 'bookings.json')

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await readFile(BOOKINGS_FILE)
  } catch {
    // File doesn't exist, create it with empty array
    const { mkdir } = await import('fs/promises')
    try {
      await mkdir(join(process.cwd(), 'data'), { recursive: true })
    } catch {}
    await writeFile(BOOKINGS_FILE, JSON.stringify([]))
  }
}

export async function getBookings(): Promise<Booking[]> {
  try {
    await ensureDataDir()
    const data = await readFile(BOOKINGS_FILE, 'utf-8')
    return JSON.parse(data) as Booking[]
  } catch {
    return []
  }
}

export async function saveBooking(booking: Booking): Promise<void> {
  try {
    await ensureDataDir()
    const bookings = await getBookings()
    bookings.push(booking)
    await writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2))
  } catch (error) {
    console.error('[v0] Error saving booking:', error)
    throw new Error('Failed to save booking')
  }
}

export async function updateBooking(
  bookingId: string,
  updates: Partial<Booking>
): Promise<Booking | null> {
  try {
    await ensureDataDir()
    const bookings = await getBookings()
    const index = bookings.findIndex((b) => b.id === bookingId)

    if (index === -1) return null

    bookings[index] = {
      ...bookings[index],
      ...updates,
      lastUpdated: new Date().toISOString(),
    }

    await writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2))
    return bookings[index]
  } catch (error) {
    console.error('[v0] Error updating booking:', error)
    throw new Error('Failed to update booking')
  }
}

export async function deleteBooking(bookingId: string): Promise<boolean> {
  try {
    await ensureDataDir()
    const bookings = await getBookings()
    const filtered = bookings.filter((b) => b.id !== bookingId)

    if (filtered.length === bookings.length) return false

    await writeFile(BOOKINGS_FILE, JSON.stringify(filtered, null, 2))
    return true
  } catch (error) {
    console.error('[v0] Error deleting booking:', error)
    throw new Error('Failed to delete booking')
  }
}
