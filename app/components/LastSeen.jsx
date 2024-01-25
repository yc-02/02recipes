"use client"
import ReactTimeago from "react-timeago"

export default function LastSeen({data}) {
  return (
        <ReactTimeago date={data} locale="en-US"/>
  )
}
