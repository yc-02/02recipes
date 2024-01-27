import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"
import SignoutButton from "./Buttons/SignoutButton";

export const dynamic ="force-dynamic"

export default async function SubNav() {
  const supabase = createServerComponentClient({cookies});
  const{data:{session}} = await supabase.auth.getSession();

  return (
    <div className="hidden md:flex justify-end text-neutral-500 mb-5 items-baseline">
      {session?(
        <>
      <span className="p-2 mr-5 font-bold text-xs">Hello, {session.user.user_metadata.username}</span>
      <Link className="mr-3 btnadd" href='/create'>Add Your Recipe</Link>
      <SignoutButton/>
      </>
      ):
      (<>
        <Link className="btn" href="/signin">Sign in</Link>
        <Link href="/signup" className="ml-2 btn">Sign up</Link>
        </>)}
     </div>

  )
}
