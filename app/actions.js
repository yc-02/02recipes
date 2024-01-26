"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import {redirect} from "next/navigation"
// import { decode } from 'base64-arraybuffer'
import {v4 as uuidv4} from 'uuid'

export async function AddFoodCard(formData){
    const food=Object.fromEntries(formData)
    const supabase=createServerActionClient({cookies})
    const {data:{user}}=await supabase.auth.getUser()

        const file = food.image_data
        const filePath = `${user.id}/${uuidv4()}`
        const {data:uploadData,error:uploadError} = await supabase.storage.from('test').upload(filePath,file,{
                contentType:  'image/png,image/jpeg',
        })
        if (uploadError){
            console.log(uploadError)
        }else{
        console.log(uploadData.fullPath)}


    const {error}=await supabase.from("recipes").insert({
        recipe_name:food.recipe_name,
        description:food.description,
        time_used:food.time_used,
        user_id:user.id,
        image_path:uploadData.fullPath
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