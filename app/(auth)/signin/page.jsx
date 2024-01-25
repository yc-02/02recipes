"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export const dynamic = "force-dynamic";

// components
import SigninForm from './signinForm'

export default function Login() {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setError('')

    const supabase = createClientComponentClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      setError(error.message)
    }
    if (!error) {
      router.push('/')
      router.refresh()
    }

  }
[]
  return (
    <div>
    <main className="flex justify-center mt-16">
      <SigninForm handleSubmit={handleSubmit} />
    </main>
    {error && (
          <p className='mt-5 text-center text-red-400'>{error}</p>
      )}

    </div>
  )
}