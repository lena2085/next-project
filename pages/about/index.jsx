import Form from '@/components/form/Form'
import React from 'react'
import { useState } from 'react'
function index() {
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
  return (
<>
   
    <h1>
      Hi {name}
    </h1>
    <p>Enter the name</p>
    <input type="text" onChange={handleName}/>
    <p>Enter the password</p>
    <input type="password" onChange={handlePassword}/>
    <p>Enter Email</p>
    <input type="email" onChange={handleEmail}/>
  
    <button onClick={handleSubmit}>Submit</button>
    <Form formname={name} frompassword={password} />
  </> 
  )
}

export default index