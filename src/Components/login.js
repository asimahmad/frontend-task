import react, { useEffect, useState } from 'react'
import {app} from '../database/FirebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../database/FirebaseConfig'
const Login = () =>{
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    const [user, setUser] = useState({
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
    function handleLogin(){
        if(!user.email || !user.password){
            setErrorMsg('All fields are required!!')
            return
        }
        setErrorMsg('')
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
            setSubmitButtonDisabled(false)
            navigate('/home')
            console.log(res)
        })
        .catch(err=> {
            setSubmitButtonDisabled(false)
            setErrorMsg(err.message)
            console.log(err.message)
        })
        console.log(user);
    }
    return (
        <div className='form'>
            <input className='input' type='email' placeholder='Email' onChange={e=>setUser(prev=>({...prev, email: e.target.value}))}/>
            <input className='input' type='password' placeholder='Password' onChange={e=>setUser(prev=>({...prev, password: e.target.value}))}/>
            <b>{errorMsg}</b><br/>
            <button className='submit' disabled={submitButtonDisabled} onClick={handleLogin}>Login</button>
            <p className='forgot-password'><Link to='/forgotpassword'>forgot password</Link></p>
            <p className='sign-up'><Link  to='/signup'>Sign Up</Link></p>
        </div>
    )
}

export default Login;