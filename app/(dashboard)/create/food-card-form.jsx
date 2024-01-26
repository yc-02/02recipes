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
        <label className="label">
        <input type="file" accept="image/png,image/jpeg" name="image_data"/>
    </label>
    </div>
        <SubmitButton/>
    </form>
    </div>
  )
}
