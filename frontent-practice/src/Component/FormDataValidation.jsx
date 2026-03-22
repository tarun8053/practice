import React, { useState } from 'react'

export default function FormDataValidation() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !pass){
            console.log('All field are required')
            return
        }
        if(name.trim().length < 5){
            console.log("At least 5 letter in name")
            return
        }
        if(pass.length < 5){
            console.log("At least 5 letter in name")
            return
        }
        console.log(name, email,pass)
    }
  return (
    <div>
      <label>
        Name :
        <input type="text" 
        placeholder='Enter Name' 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email :
        <input type="text" 
        placeholder='Enter Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password : 
        <input type="text" 
        placeholder='Enter Password' 
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
