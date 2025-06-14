import { NextRequest, NextResponse } from "next/server"

export function GET(){
    return NextResponse.json({
        name:"prasanna hello"
    })
} 

export async function POST(req: NextRequest) {
  const body = await req.json(); //  Proper way to get POST body (help)
  console.log("Received data:", body);

  const { name, password } = body;

  return NextResponse.json({
    message: `Hello ${name}, you are now a user!`,
  });
}