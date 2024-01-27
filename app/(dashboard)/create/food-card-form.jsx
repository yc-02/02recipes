"use client"


import { SubmitButton } from "@/app/components/Buttons/SubmitButtons"
import { AddFoodCard } from "../../actions"
import { useState } from "react";

export default function FoodCardForm() {
 
    const [file, setFile] = useState();
     function handleChange(e) {
          console.log(e.target.files);
          setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="flex justify-center p-7 m-2">

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
            Time used - minutes:
            <input type="number" name="time_used" className="input" placeholder="numbers" required />
        </label>

        <label className="label">
            <input type="file" accept="image/png,image/jpeg" name="image_data" className="input mb-2" multiple onChange={handleChange}/>
        </label>
        {file&&<div className="flex justify-center input mb-2">
        <img src={file} alt="file" width={200}/>
        </div>}
        <SubmitButton/>
    </form>
    </div>
  )
}
