import React, { useEffect, useState } from 'react'
import {sendPasswordResetEmail} from "firebase/auth";
import {auth} from '../database/FirebaseConfig'
import {useNavigate} from 'react-router-dom'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate();
  const [err,setErr] = useState('')
  function handleReset(){
    sendPasswordResetEmail(auth, email)
  .then(() => {
    setErr('Reset link has been sent to the given email.')
    setTimeout(()=>{
      navigate('/login')
    },2000)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  return (
    <div className='form'>
            <input className='input' type='email' placeholder='Email' onChange={e=>setEmail(e.target.value)} />
            <b>{err}</b><br/>
            <button className='submit' onClick={handleReset}>Reset</button>            
        </div>
  )
}
