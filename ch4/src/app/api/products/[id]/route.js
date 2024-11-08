import  { NextResponse } from "next/server"


// export const GET = async (req,context) => {
//     const data =  context.params.id;
//         console.log("data here",data)
//     return NextResponse.json({dynamicRoute: "Get request with product id",status:201})
// }

export const GET = async (req,{params}) => {
    const data =  params.id;
        console.log("data here",data)
    return NextResponse.json({dynamicRoute: "Get request with product id",status:201})
}