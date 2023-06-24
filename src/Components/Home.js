import React, {useEffect, useState, useRef } from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../database/FirebaseConfig'
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [userName, setUserName] = useState('')
    const [size, setSize] = useState(20);
    const ref = useRef();
    //console.log(ref.current)
    async function fetchData(){
        const data = await fetch(`https://api.instantwebtools.net/v1/passenger?page=1&size=${size}`);
        const json = await data.json();
        setData(json.data);
    }
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                setUserName(user.displayName)
            }
            else{
                navigate('/login')
                return
            }
        })
        fetchData()
    },[size])
    useEffect(()=>{
        const currRef = ref.current;
        if(!currRef) return;
        const observer = new IntersectionObserver((data)=>{
            const isIntersecting = data[0].isIntersecting;
            if(isIntersecting){
                setSize(prev=>prev+10);
            }
            // console.log(data);
        });
        observer.observe(currRef)
        return ()=>{
            observer.unobserve(currRef);
        }
    },[])
    function handleLogout(){
        signOut(auth).then(() => {
            navigate('/login')

        }).catch((error) => {
        console.log(error)
})
    }
    
  return (
      <>
        <h3>Hello {userName}</h3>
        <button onClick={handleLogout}>Log out</button>
        <div className='data'>
            {data.map((item,index)=>
            (
                <div className='item' key={item._id}>
                    <img src={item.airline[0].logo} style={{height:'100px', width:'100px'}} alt={item.airline[0].name}/>
                    <span> Country: {item.airline[0].country}</span>
                    <span> Established: {item.airline[0].established}</span>
                    <span> Head Quater: {item.airline[0].head_quaters} </span>
                    <br/>
                    <label>Passenger Name: {item.name}</label><br/>
                    <label>Total trips: {item.trips}</label>
                </div>
            )
            )}
    </div>
    <div ref={ref} style={{backgroundColor:'#6D5959', height:'20px'}}>Loading</div>
    </>
  )
}
