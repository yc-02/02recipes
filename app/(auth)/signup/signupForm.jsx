"use client"
import { signupUser } from "@/app/actions"
import SignupButton from "@/app/components/Buttons/SignupButton"
import Link from "next/link"



export default function SignupForm() {



  return (
    <div className="form">
    <form action={signupUser}>
      <label className="lable">
        <span>Email:</span>
        <input
          type="email"
          name="email"
          required
          className="input"
        />
      </label>
      <label className="lable">
        <span>Password:</span>
        <input
          type="password"
          name="password"
          required
          className="input"
        />
      </label>
      <label className="lable">
        <span>Full Name:</span>
        <input
          type="text"
          name="full_name"
          required
          className="input"
        />
      </label>
      <label className="lable">
        <span>Username:</span>
        <input
          type="text"
          name="username"
          required
          className="input"
        />
      </label>
      <div className="mt-4">
      <SignupButton/>
      </div>
    </form>
    <div className="mt-4 border-t-2 border-neutral-200 pt-2">
      <p>Have an account? </p>
      <Link href="/signin" className="font-bold">Sign in</Link>
    </div>
    </div>
  )
}
