import { NextResponse } from "next/server";


// without destrucing
// export const GET = async(req, context)=>{
//     // console.log(req, "---------------req---------------");
//     // console.log(context, "---------------context---------------");
//     // console.log(context.Promise.id, "---------------context---------------");
//     const params = await context.params;

//     console.log(params.id, "---------------Extracted ID---------------");

// other way
//  const id = context.params?.id; // Use optional chaining

//     return NextResponse.json({"message":"done"} , {status:201})
// }

export const GET = async(req, {params})=>{
    // console.log(req, "---------------req---------------");
    // console.log(context, "---------------context---------------");
    // console.log(context.Promise.id, "---------------context---------------");
    // const params = await context.params;
 
    console.log(params.id, "---------------Extracted ID---------------");

    return NextResponse.json({"message":"done"} , {status:201})


}