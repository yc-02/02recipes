
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from 'next/image'
import LastSeen from "../components/LastSeen";
import Link from "next/link";
import Likes from "./likes";




export default async function FoodCard() {

    const supabase=createServerComponentClient({cookies})
    const {data:{session}} = await supabase.auth.getSession();
    const {data,error}=await supabase.from("recipes").select(`*,likes(*)`).order('id', { ascending: false })
    const recipes = data.map((recipe)=>{
      const userHasLiked = recipe.likes.find((like)=>like.user_id === session?.user?.id)
      return{
        ...recipe,
        userLiked:userHasLiked,
        likesCount:recipe.likes.length
      }
    })

    return (
    <div className="grid md:grid-cols-3 gap-10 ">
    {recipes?.map((food)=>(
        <div key={food.id} className="card hover:shadow-lg">
          <Link href={`/${food.id}`}>
          <Image
          src={`${food.image_path}`}
          width={500}
          height={500}
          alt="ace"
          className="w-full h-48 sm:h-52 object-cover"
          />
          <div className="m-4">
          <p className="font-bold uppercase text-lg">{food.recipe_name}</p>
          <p className="text-neutral-400 flex"> <span className="mr-1">Updated</span> <LastSeen data={food.created_at}/></p>
          </div>
          <div className="badges">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 inline-block mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

            <span>{food.time_used} minutes</span>
          </div>
          </Link>
          {session &&(<div className="flex justify-end m-2"> <Likes recipe={food}/> <span>{food.likesCount}</span></div>)}

        </div>
    ))}

      {data.length === 0 && (<p className="text-center text-2xl"> No recipes available.</p>)}
      {error && (<p>{error.message}</p>)}
    </div>
  )
}
