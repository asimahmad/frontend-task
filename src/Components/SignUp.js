import React, { useState, useEffect } from 'react'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../database/FirebaseConfig'
import {Link, useNavigate} from 'react-router-dom'

export default function SignUp() {

    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
    })
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                navigate('/home')
                return
            }
        })
    },[])
    function handleSubmit(){
        if(!user.name || !user.email || !user.password){
            setErrorMsg('All fields are required!!')
            return
        }
        setErrorMsg('')
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(async (res) => {
            setSubmitButtonDisabled(false)
            // setUser({
            //     name:'',
            //     email:'',
            //     password:''
            // })
            const user1 = res.user
            await updateProfile(user1, {
                displayName: user.name
            })
            navigate('/home')
            console.log(res)
        })
        .catch(err=> {
            setSubmitButtonDisabled(false)
            setErrorMsg(err.message)
            console.log(err.message)
        })
        //console.log(user);
    }
  return (
    <div className='form'>
      <input className='input' type='text' placeholder='Name' onChange={e=>setUser(prev=>({...prev, name: e.target.value}))}/>
      <input className='input' type='email' placeholder='Email' onChange={e=>setUser(prev=>({...prev, email: e.target.value}))}/>
      <input className='input' type='password' placeholder='Password' onChange={e=>setUser(prev=>({...prev, password: e.target.value}))}/>
      <b>{errorMsg}</b><br/>
      <button className='submit' disabled={submitButtonDisabled} onClick={handleSubmit}>Submit</button>
      <p className='sign-up'><Link  to='/login'>Login</Link></p>
    </div>
  )
}
