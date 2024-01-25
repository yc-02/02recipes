import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"
import SignoutButton from "./Buttons/SignoutButton";

export const dynamic ="force-dynamic"

export default async function AuthNav() {
  const supabase = createServerComponentClient({cookies});
  const{data:{session}} = await supabase.auth.getSession();

  return (
    <div className="text-neutral-500 flex justify-end mb-5 md:justify-end">
      {session?(
        <>
      <span className="p-2 mr-5 font-bold text-xs">Hello, {session.user.user_metadata.username}</span>
      <Link className="btn mr-3 border-neutral-500 hover:bg-neutral-200 md:border-2 md:bg-neutral-500 md:text-neutral-50 md:hover:bg-neutral-500 md:hover:scale-105 transition ease-out duration-400" href='/create'>Add Your Recipe</Link>
      <SignoutButton/>
      </>
      ):
      (<>
        <Link className="btn border-neutral-500 hover:bg-neutral-200 md:border-2 md:hover:bg-neutral-500 md:hover:text-neutral-50 transition ease-out duration-500" href="/signin">Sign in</Link>
        <Link href="/signup" className="ml-2 btn border-neutral-500 hover:bg-neutral-200 md:border-2  md:hover:bg-neutral-500 md:hover:text-neutral-50 transition ease-out duration-500">Sign up</Link>
        </>)}
     </div>
  )
}
