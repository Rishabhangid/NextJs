"use client";

import { useParams } from "next/navigation";
import { use } from "react";



function Cahce() {
    const { user} = useParams()
    // console.log(user, "---------------user---------------");
    const aa =  user ? user[0]:"bo ";
    console.log(aa,"---------------aa--------------");
  return (
    <div>
        <div>Cahce</div>
        {/* <h1>User ID or Path: {user.join('/')}</h1> */}
    </div>
  )
}

export default Cahce