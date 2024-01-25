"use client"

import SigninButton from '@/app/components/Buttons/SigninButton'
import { useState } from 'react'
import Link from 'next/link'

export default function SigninForm({ handleSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className="form" >
    <form onSubmit={(e) => handleSubmit(e, email, password)}>
      <div>
      <label className='lable'>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className="input"
        />
      </label>
      </div>
      <div>
      <label className='lable'>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          className="input"
        />
      </label>
      </div>
      <div>
      <SigninButton/>
      <Link className="inline-block align-baseline font-bold" href="#">Forgot Password?</Link>
      </div>
      <div className="mt-4 border-t-2 border-neutral-200 pt-2">
        <h3>Don&apos;t have an account?</h3>
        <Link href="/signup" className="font-bold">Sign up</Link>
      </div>
    </form>
    </div>
  )
}