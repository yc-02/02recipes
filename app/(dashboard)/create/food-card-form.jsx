"use client"

import SubmitButton from "@/app/components/Buttons/SubmitButton"
import { AddFoodCard } from "../../actions"


export default function FoodCardForm() {

  return (
    <div className="grid place-items-center p-7">
    <form action={AddFoodCard} className=" bg-neutral-100 p-7 rounded text-base w-auto">
        <label className="lable">
            Recipe name:
            <input type="text"  name="recipe_name" className="input" required/>
        </label>
        <label className="lable">
            Description:
            <textarea type="text" name="description" className="input h-48 resize-none" required/>
        </label>
        <label className="lable">
            Time used:
            <input type="text" name="time_used" className="input" required />
        </label>
    <div className="flex items-center justify-center w-full pb-2">
        <label className="flex flex-col items-center justify-center w-full h-42 border-2 border-neutral-300 border-dashed rounded-lg cursor-pointer bg-neutral-50 dark:hover:bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:hover:border-neutral-500">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="pb-2 text-sm text-neutral-500 dark:text-neutral-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input type="file" className="hidden" name="image_data"/>
    </label>
    </div>
        <SubmitButton/>
    </form>
    </div>
  )
}