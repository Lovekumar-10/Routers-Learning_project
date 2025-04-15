import React, { useState } from 'react'

const FormHandling = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Handler = (e)=>{
        e.preventDefault();
        alert("your form submited")

        setEmail('');
        setName('');
        setPassword('');
    }


  return (
    <>
    <h1>Form-Handling in React.js</h1>
    <form  onSubmit={Handler}>
        <label for="name">Name:</label><br/>
        <input type="text" id='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name'/> <br /><br />
        <h1>{name}</h1>

        <label for="mail">Email:</label><br/>
        <input type="email" id='mail' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/> <br /><br />

        <label for="pass">Password:</label><br/>
        <input type="password" id='pass' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/> <br /><br />

        <button>Submit Form</button>

        
    </form>
    </>
  )



}
export default FormHandling