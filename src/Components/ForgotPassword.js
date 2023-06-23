import React, { useEffect } from 'react'

export default function ForgotPassword() {
  return (
    <form className='form'>
            <input className='input' type='email' placeholder='Email' />
            <input className='input' type='password' placeholder='New Password' />
            <input className='input' type='password' placeholder='Re-Enter password' />
            <button className='submit' disabled>Reset</button>
        </form>
  )
}
