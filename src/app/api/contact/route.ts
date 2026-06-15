import { NextResponse } from 'next/server'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please enter a valid name (at least 2 characters).' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please enter a subject (at least 2 characters).' },
        { status: 400 }
      )
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please enter a message (at least 10 characters).' },
        { status: 400 }
      )
    }

    // TODO: Wire to Supabase, Resend, or your preferred backend
    // Example with Supabase:
    // const { data, error } = await supabase.from('contacts').insert({ name, email, subject, message })
    // if (error) throw error

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
