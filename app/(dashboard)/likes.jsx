"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"




export default function Likes({recipe}) {

const router=useRouter()

async function handleClick (){

  const supabase= createClientComponentClient()
  const {data:{user}}=await supabase.auth.getUser()

  if (user){
    if(recipe.userLiked){
      await supabase.from('likes').delete().match({user_id:user.id,recipe_id:recipe.id})
    }else{
      await supabase.from('likes').insert({user_id:user.id,recipe_id:recipe.id})
    }
    router.refresh()
  }
}





  return (
    <div>
    <button onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`${recipe.userLiked?"fill-rose-400 w-6 h-6":"fill-none w-6 h-6 stroke-rose-400"}`} viewBox="0 0 24 24" strokeWidth={1.5} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
    </button>

    </div>
  )
}
