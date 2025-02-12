import { NextResponse } from "next/server";

export async function GET(req) {

    // Headers
    const reqhead = new Headers(req.headers)
    // console.log(reqhead, "---------------reqhead---------------");

    // Query Parameter
    // const { search } = new URL(req.url)
    // const { searchparams } = req.nextUrl.searchparams
    // console.log(searchparams, "---------------searchparams---------------");
    // console.log(search, "---------------search---------------");

    // Cookies
    // const cook1 =  req.cookies
    // console.log(cook1, "---------------cook1---------------");
    return NextResponse.json({"msg": "Hello Next"})
}

export async function POST(req){
    // console.log(req, "---------------req---------------");
    // 1. json
    // const res = await req.json()
    // console.log(res, "---------------res.email---------------");

    // 2. formadata
    const formdata = await req.formData();
    console.log(formdata, "---------------formdata---------------");
    console.log(formdata.get("email"), "---------------formdata---------------");
    // console.log(formdata.get("value"), "---------------formdata---------------");
    return NextResponse.json({ "msg": "Post Added"}, {status: 201} , {"success":"true"})
}