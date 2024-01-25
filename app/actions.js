"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import {redirect} from "next/navigation"


export async function AddFoodCard(formData){
    const food=Object.fromEntries(formData)
    const supabase=createServerActionClient({cookies})
    const {data:{user}}=await supabase.auth.getUser()
    const {error}=await supabase.from("recipes").insert({
        recipe_name:food.recipe_name,
        image_data:food.image_data,
        description:food.description,
        time_used:food.time_used,
        user_id:user.id
    })
    if (error){
        throw new Error (error.message)
    }
    else{
        redirect('/')
    }
}

export async function signupUser(formData){
    const enter = Object.fromEntries(formData)
    const supabase = createServerActionClient({cookies})
    const {data,error}=await supabase.auth.signUp({
        email:enter.email,
        password:enter.password,
        options:{
                data:{
            fullname:enter.full_name,
            username:enter.username,}
        }
    })
    if(error){
        throw new Error (error.message)
    }
    if (!error){
        console.log(data)
        redirect('/verify')
    }

}

export async function deleteFoodCard(id){
    const supabse = createServerActionClient({cookies})
    const {error} = await supabse.from('recipes').delete().eq('id',id)

if (error){
    throw new Error ('could not delete the tickets')
}
redirect('/')
}