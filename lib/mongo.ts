import { MongoClient } from 'mongodb'

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

const uri = process.env.MONGO_DB
if (!uri) {
  throw new Error('MONGO_DB environment variable is not set')
}

// Use a global variable to preserve the client across hot-reloads in development
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!global._mongoClientPromise) {
  client = new MongoClient(uri)
  clientPromise = client.connect()
  global._mongoClientPromise = clientPromise
} else {
  clientPromise = global._mongoClientPromise
}

async function getCollection() {
  const client = await clientPromise
  // Use the database specified in the connection string if present; otherwise fall back to 'default'
  const db = client.db()
  return db.collection('bookings')
}

export async function getBookings(): Promise<Booking[]> {
  const collection = await getCollection()
  const docs = await collection.find({}).sort({ createdAt: -1 }).toArray()
  // Remove Mongo-specific fields before returning
  return docs.map((d: any) => {
    const { _id, ...rest } = d
    return rest as Booking
  })
}

export async function saveBooking(booking: Booking): Promise<void> {
  const collection = await getCollection()
  await collection.insertOne({ ...booking })
}

export async function updateBooking(
  bookingId: string,
  updates: Partial<Booking>
): Promise<Booking | null> {
  const collection = await getCollection()
  const result = await collection.findOneAndUpdate(
    { id: bookingId },
    { $set: { ...updates, lastUpdated: new Date().toISOString() } },
    { returnDocument: 'after' }
  )
  if (!result || !result.value) return null
  const { _id, ...rest } = result.value
  return rest as Booking
}

export async function deleteBooking(bookingId: string): Promise<boolean> {
  const collection = await getCollection()
  const res = await collection.deleteOne({ id: bookingId })
  return res.deletedCount === 1
}
