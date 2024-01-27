"use server"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import {redirect,revalidatePath} from "next/navigation"
import {v4 as uuidv4} from 'uuid'

const supabase=createServerActionClient({cookies})
// add food card

export async function AddFoodCard(formData){
    const food=Object.fromEntries(formData)
    const {data:{user}}=await supabase.auth.getUser()
        const file = food.image_data
        const filePath = `${user.id}/${uuidv4()}`
        const {data:uploadData,error:uploadError} = await supabase.storage.from('test').upload(filePath,file,{
                contentType:  'image/png,image/jpeg',
        })
        if (uploadError){
            throw new Error (uploadError.message)
        }else{
        console.log(uploadData.fullPath)}
        console.log(filePath)


    const {error}=await supabase.from("recipes").insert({
        recipe_name:food.recipe_name,
        description:food.description,
        time_used:food.time_used,
        user_id:user.id,
        image_path:uploadData.fullPath,
        file_path:filePath
    })
    if (error){
        throw new Error (error.message)
    }
    else{
        redirect('/')
    }

}

//delete food card
export async function deleteFoodCard(id){
    const {data} = await supabase.from('recipes').select('file_path').eq('id',id)
    const {error} = await supabase.from('recipes').delete().eq('id',id)

    let filePathToDelete;
    data.map((f)=>{
        filePathToDelete = f.file_path;
    })
    const {error:storageError } = await supabase.storage.from('test').remove(`${filePathToDelete}`)
    if (error){
        throw new Error (error.message)
    }else if(storageError){
        throw new Error (storageError.message)
    }else redirect('/')
}

//Signin
export async function signin(formData){
    const data=Object.fromEntries(formData)
      const { error } = await supabase.auth.signInWithPassword({
        email :data.email,
        password:data.password
      })
      if (error) {
        throw new Error (error.message)
      }
      if (!error) {
        redirect('/')
      }
}

//signupuser
export async function signupUser(formData){
    const enter = Object.fromEntries(formData)
    const {data:profileEmail} = await supabase.from("profiles").select("email").eq("email",`${enter.email}`);
    const {data:profileUsername}= await supabase.from("profiles").select("username").eq("username",`${enter.username}`)
    if(profileEmail){
    profileEmail.map((e)=>{
        if(e.email){
            throw new Error('Email already exists!');
        }else {
            console.log('Email is available for registration');
          }
    })}
    if(profileUsername){
    profileUsername.map((u)=>{
        if(u.username){
            throw new Error('Username already exists!');
        }else {
            console.log('username is available for registration');
          }
    })}

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


