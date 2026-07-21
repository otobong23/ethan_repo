import { cookies } from 'next/headers'
import crypto from 'crypto'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'
const SESSION_SECRET = process.env.SESSION_SECRET || 'your-secret-key'
const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours

interface Session {
  timestamp: number
  hash: string
}

function hashPassword(password: string): string {
  return crypto
    .createHash('sha256')
    .update(password + SESSION_SECRET)
    .digest('hex')
}

export async function verifyAdminPassword(password: string): Promise<boolean> {
  const adminHash = hashPassword(ADMIN_PASSWORD)
  const inputHash = hashPassword(password)
  return adminHash === inputHash
}

export async function createSession(): Promise<string> {
  const session: Session = {
    timestamp: Date.now(),
    hash: crypto.randomBytes(32).toString('hex'),
  }

  const cookieStore = await cookies()
  cookieStore.set('admin_session', JSON.stringify(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_DURATION,
    path: '/',
  })

  return session.hash
}

export async function validateSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('admin_session')

    if (!sessionCookie?.value) return false

    const session: Session = JSON.parse(sessionCookie.value)
    const now = Date.now()

    // Check if session is expired
    if (now - session.timestamp > SESSION_DURATION) {
      cookieStore.delete('admin_session')
      return false
    }

    // Refresh session timestamp
    await createSession()
    return true
  } catch {
    return false
  }
}

export async function clearSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
}
