import Image from 'next/image'
import React from 'react'

async function GetUser() {
  // const res = await fetch("http://localhost:3000/api/blog")
  const res = await fetch("https://dummyjson.com/users")

  if (!res.ok) {
    console.log("res not oky")
  }
  const data = await res.json()
  // console.log(data, "**************")
  // console.log("data", data)
  return data

}

export default async function Post() {

  const get_user = await GetUser()
  console.log(get_user.users, "*******************")



  return (
    <div>
      <div className='text-center font-bold text-[30px]'>All Users</div>
      <h1>Blogs</h1>
      {get_user.users.length > 0 ? (
        get_user.users.map((item) => (

          <div key={item.id} className="m-6 border p-4 my-2  grid grid-cols-4 justify-center items-center">
            <h1>{item.firstName} {item.lastName}</h1>
            <h2 className="text-gray-500">{item.gender} | {item.age} years</h2>
            <h3 className="text-blue-600">{item.email}</h3>
            {/* <Image
              src={item.image}
              alt={`${item.firstName}'s image`}
              width={128}
              height={128}
              className="rounded-full"
            /> */}
          </div>

        ))
      ) : (
        <p className="text-center text-red-500">No users found</p>
      )}
    </div>
  )
}

