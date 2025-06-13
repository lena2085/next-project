import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home()
 {
   useEffect(async() =>{
    const ax= await axios.post("http://localhost:3001/createdata",
    {
    "name": "Hann",
    "city":"kochi",
    "age": 20
})
console.log("Response",ax)
   },[])

   
  
  const [name,setName]=useState("")
  console.log("Name",name)
  const [password,setPassword]=useState("")
  console.log("Password",password)
  const [email,setEmail]=useState("")
  console.log("Email",email)
  function handleName(event)
  {
  setName(event.target.value)
  }
function handlePassword(event)
 {
 setPassword(event.target.value)
 }
 function handleEmail(event)
 {
 setEmail(event.target.value)
 }
 function handleSubmit()
 {
  if(password.length<8)
    alert("Password must be atleast 8 character")
  else
  console.log("Success")
 }
 

  return(
     <>
    <h1>
      Hi {name}
    </h1>
    <p>Enter the name</p>
    <input type="text" onChange={handleName}></input>
    <p>Enter the password</p>
    <input type="password" onChange={handlePassword}></input>
    <p>Enter Email</p>
    <input type="email" onChange={handleEmail}></input>
    
    <br></br>
    <button onClick={handleSubmit}>Submit</button>
  </> 
  )
}
