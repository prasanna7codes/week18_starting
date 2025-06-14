"use client"

import axios from "axios"
import { useRef } from "react"





export default function Signup (){

 const nameRef = useRef<HTMLInputElement>(null);
const passwordRef = useRef<HTMLInputElement>(null);




async function handleSubmit (){

const name = nameRef.current?.value;
const password = passwordRef.current?.value;

axios.post("http://localhost:3000/api/users",{
    name,password
})

}

return <>

<input  ref={nameRef} type="text" placeholder="name" />
<input  ref={passwordRef} type="text" placeholder="password" />

<button onClick={handleSubmit}>sign up </button>


</>


}