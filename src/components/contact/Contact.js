import React from 'react'
import "./Contact.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Contact() {
  function handleChangeName(event){
    setName(event.target.value)
  }
  function handleChangeEmail(event){
    setEmail(event.target.value)
  }
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
    const navigate = useNavigate();
    function handleSubmit(e){
      e.preventDefault()
      if(!name && !email) return;
        navigate('/board')
        console.log(name,email)
    }
  return (
    <div className='contact'>
      <div className='container'>
        <div className='form-container'>
                <form >
                    <h1>Contact Us</h1>
                    <div>
                        <label>Name</label>
                        <input name='name' value={name} onChange={handleChangeName}
                        type="text" placeholder="Enter your name"></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input name='email' value={email} onChange={handleChangeEmail}
                         type="email" placeholder="Enter your Email"></input>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea rows="10" placeholder="Enter your message"></textarea>
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
        </div>
      </div>
    </div>
  )
}
