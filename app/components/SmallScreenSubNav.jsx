import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"
import SignoutButton from "./Buttons/SignoutButton";

export const dynamic ="force-dynamic"

export default async function SmallScreenSubNav() {
  const supabase = createServerComponentClient({cookies});
  const{data:{session}} = await supabase.auth.getSession();

  return (
    <div className="text-neutral-500 bg-neutral-50 fixed bottom-0 w-full h-14 border-t z-50 shadow-inner">
    {session?(
    <div className="grid h-full max-w-lg grid-cols-3 mx-auto px-7 font-medium items-center">
      <p>Hello, {session.user.user_metadata.username}</p>
    <Link href='/create' className="inline-flex flex-col items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
    Add Recipe
    </Link>
      <SignoutButton/>
      </div>
      ):
      (<div className="grid h-full max-w-lg grid-cols-3 mx-auto px-7 py-1 font-medium items-center">
        <p>Welcome!</p>
        <Link href="/signin" className="inline-flex flex-col items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
        </svg>
        Sign in</Link>
        <Link href="/signup" className="inline-flex flex-col items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        </svg>
        Sign up</Link>
        </div>)}
     </div>

  )
}
