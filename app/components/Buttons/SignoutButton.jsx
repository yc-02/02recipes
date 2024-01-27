"use client"
import { useRouter } from 'next/navigation'
import {createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function SignoutButton() {
    const router=useRouter()
    const handleSignOut=async()=>{
    const supabase = createClientComponentClient()
    const{error} = await supabase.auth.signOut()
    router.refresh()
    if (error){
      console.log(error)
    }
}
  return (
         <button className="inline-flex flex-col items-center justify-center md:btn" onClick={handleSignOut}>
          <svg className="w-6 h-6 md:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
          </svg>
          Sign out
          </button>
  )
}
