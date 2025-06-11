import React from 'react'
function Form(props) {
    console.log("Login form props",props)
  return (
    <>
    <h1>Login Form</h1>
    <p>Username: {props.formname}</p>
    <p>Password: {props.formpassword}</p>
    </>
  )
}

export default Form