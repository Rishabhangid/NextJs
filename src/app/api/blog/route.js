import connectdb from "@/lib/connectdb"
import Post from "@/models/testSchema"
import { NextResponse } from "next/server"


export const GET = async(req)=>{

    const res  = await fetch("https://dummyjson.com/users")

    const user_data = await res.json()
    console.log(user_data, "---------------user_data---------------");
    return NextResponse.json( {"data":user_data}, {"success": true} )
}       

// connecting to db and addong new data
// export const GET = async (req) => {

//     try {
//         await connectdb()
//         // NextResponse.json({ "msg": "connected" }, { status: 200 })
//         console.log("database connected")
//         const new_data = new Post({ name: "Rishabh" })
//         await new_data.save()
//         if (!new_data) {
//             return NextResponse.json({ "message": "failed to add data" }, { status: 400 })
//         }
//         return NextResponse.json({ "message": "data added" }, { status: 200 })
//     }
//     catch (error) {
//         console.log("error in connecting database", error)
//     }
// }     


// fetching data
// export const GET = async (req) => {

//     try {
//         await connectdb()
//         // NextResponse.json({ "msg": "connected" }, { status: 200 })
//         console.log("database connected")
//         const new_data = await Post.find()
//         if (!new_data) {
//             return NextResponse.json({ "message": "data not found" }, { status: 400 })
//         }
//         console.log(new_data, "---------------new_data---------------");
//         return NextResponse.json({ "message": "data found" }, { status: 200 })
//     }
//     catch (error) {
//         console.log("error in connecting database", error)
//     }
// }


// posting data to db
// fetching data
export const POST = async (res) => {

    try {
        await connectdb()
        const ress = await res.json()
        console.log(ress, "---------------res---------------");
        const add_new = Post.create({ ...ress })
        if (!add_new) {
            return NextResponse.json({ "msg": "data not added." }, { status: 400 })
        }
        return NextResponse.json({ "msg": "data added." }, { status: 200 })
    }
    catch (error) {
        console.log("error in connecting database", error)
    }
}    