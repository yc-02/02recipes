"use client"


import Link from 'next/link'
import { signin } from '@/app/actions'
import { SigninButton } from '@/app/components/Buttons/SubmitButtons'


export default function SigninForm() {


  return (
    <div className="form" >
    <form action={signin}>
      <div>
      <label className='lable'>
        <span>Email:</span>
        <input
          type="email"
          name='email'
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
          name='password'
          required
          className="input"
        />
      </label>
      </div>
      <div>
      <SigninButton/>
      <Link className="inline-block font-bold" href="#">Forgot Password?</Link>
      </div>
      <div className="mt-4 border-t-2 border-neutral-200 pt-2">
        <h3>Don&apos;t have an account?</h3>
        <Link href="/signup" className="font-bold">Sign up</Link>
      </div>
    </form>
    </div>
  )
}