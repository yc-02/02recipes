"use client"
import { useTransition } from "react"
import { deleteFoodCard } from "../../actions"

export default function DeleteButton({id}) {

    const [isPending,startTransition] =useTransition()

    return (
      <button
      className="btn-secondary m-5"
      onClick={()=>startTransition(()=>deleteFoodCard(id))}
      disabled={isPending}
      >
        {isPending && (
          <span>
            Deleting....
          </span>
        )}
        {!isPending && (
          <span>
            Delete
          </span>
        )}
      </button>
    )
  }
