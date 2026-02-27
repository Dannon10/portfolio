import React from 'react'



export default function SignUpForm() {

    const signup = (formData) => {
        const email = formData.get('email')
        const password = formData.get('password')
        console.log('Email:', email, 'Password:', password)
    }

  return (
    <>
    <h1>Sign Up Form</h1>
    <form 
    action={signup}
    >
        <label htmlFor="email">Email:</label>
        <input 
        type="email" 
        name='email' 
        placeholder='example@gmail.com'
        />

        <br/>
        <br/>
        <label htmlFor="password">Password:</label>
        <input 
        type="password"
        name='password' 
        />
        <br/>        
        <br/>        
        <button>Submit</button>
    </form>
    </>
  )
}
