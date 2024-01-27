import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Image from "next/image";
import LastSeen from "../../components/LastSeen";
import DeleteButton from "@/app/components/Buttons/DeleteButton";
import Link from "next/link";

export const dynamicParams = true

export async function generateMetadata({params}){
    const supabase=createServerComponentClient({cookies})

    const {data} = await supabase.from('recipes').select().eq('id',params.id).single()

    return{
        title:`${data?.recipe_name||"Recipe not Found"}`
    }
}

async function getRecipe(id){
    const supabase=createServerComponentClient({cookies})

    const {data}=await supabase.from("recipes").select(`*,profiles(*)`).eq('id',id).single()

    if (!data){
        notFound()
    }
    return data
}

export default async function RecipeDetails({params}){
    const food = await getRecipe(params.id)
    const supabase = createServerComponentClient({cookies})
    const {data} = await supabase.auth.getSession()

    return(
        <div className="p-10 bg-neutral-100">
        {data.session?(
            <>
            <div className="flex justify-between shadow-sm items-baseline">
            <h2 className="text-4xl font-semibold text-neutral-600 ">Recipe Details</h2>
            {data.session?.user.id === food.user_id && (<DeleteButton id={food.id}/>)}
            </div>

            <div className="grid mt-2 md:grid-cols-2 gap-4 ">
                <div className=" ml-10 mt-10">
                <h3 className="font-bold uppercase text-3xl mb-5">{food.recipe_name}</h3>
                <p className="text-neutral-500">Created by {food.profiles?.username}</p>
                <p className="text-neutral-400 flex"><span className="mr-1">Updated</span> <LastSeen data={food.created_at}/></p>
                </div>

                <div>
                <Image
                src={`${food.image_path}`}
                width={500}
                height={500}
                alt="ace"
                className="w-ful h-52 sm:h-60 object-cover rounded-md"
                />
                </div>



                <div className="md:col-span-2">
                <p className="text-xl border-b-2 font-bold">Directions:</p>
                <p className="text-xl">{food.description}</p>
                </div>
            </div>
            </>
            ):
            (<div className="text-center font-bold">
                <p className="mb-4">Please Sign in first.</p>
                <Link href="/signin" className="btn-secondary " > Sign in</Link>
            </div>)}
        </div>
    )
}