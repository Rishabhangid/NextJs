import Image from 'next/image'
import React from 'react'

// async function GetUser() {
//   const res = await fetch("http://localhost:3000/api/blog")

//   if (!res.ok) {
//     console.log("res not oky")
//   }
//   console.log(res, "**************888")
//   const data = await res.json()
//   // console.log("data", data)
//   return data

// }

export default async function Post() {

  // const get_user = await GetUser()
  // console.log(get_user.data.users, "*******************")



  return (
    <div>
      <div className='text-center font-bold text-[30px]'>All Users</div>
     <h1>Blogs</h1>
    </div>
  )
}

