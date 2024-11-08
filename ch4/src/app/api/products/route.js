import { cookies } from "next/headers"
import { NextResponse } from "next/server"

//get request
export  const GET = async (req) =>  {
    // const searchParams = new Headers(req.headers);
    // const searchParams = req.headers;
    // const searchParams = req.url;
    // const searchParams = new URL(req.url);
    // const searchParams = req.nextUrl;
    // console.log("change::",searchParams.searchParams)
    // const cookie = req.cookies;
    //     const cookie = cookies()
    // console.log("change::",cookie)

    return NextResponse.json({"meg": "from product asedas"})
}

// post request
export const POST = async (req) => {
    //    const datareq = await req.json();
    // const datareq = await req.formData();
    //     console.log("request data here:",datareq)
    return NextResponse.json({post:"post request send succesfully"})
}