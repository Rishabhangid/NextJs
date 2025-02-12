"use client";
import { useParams } from "next/navigation";

function page({params}) {
    // console.log(params.id, "---------------params---------------");
    const { id } = useParams(); 
    console.log(id, "---------------id---------------");
  return (
    <div>iser id {id}</div>
  )
}

export default page