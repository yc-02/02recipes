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
         <button className="btn border-neutral-500 hover:bg-neutral-200 md:border-2  md:hover:bg-neutral-500 md:hover:text-neutral-50 transition ease-out duration-500" onClick={handleSignOut}>Sign out</button>
  )
}
