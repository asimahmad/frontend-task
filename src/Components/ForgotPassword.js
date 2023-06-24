import React, { useEffect, useState } from 'react'
import {updatePassword } from "firebase/auth";
import {auth} from '../database/FirebaseConfig'

export default function ForgotPassword() {
  const [user, setUser] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const fireuser = auth.currentUser;
  //console.log(fireuser)
  function handleReset(){
    updatePassword(fireuser, newPassword).then(() => {
      // Update successful.
    }).catch((error) => {
      // An error ocurred
      // ...
    })
  }
  return (
    <form className='form'>
            <input className='input' type='email' placeholder='Email' onChange={e=>setUser(e.target.value)} />
            {
              user?<input className='input' type='password' placeholder='New Password' onChange={e=>setNewPassword(e.target.value)}/>:''
            }
            {
              !user?<button className='submit'>Next</button>:<button className='submit' onClick={handleReset}>Reset</button>
            }
        </form>
  )
}
