import React from 'react'
export default function Shimmer(){
    return(
        <div className='data'>
      {Array(20).fill('').map((item,index)=>
           (
            <div className='item' key={index}>
                <img style={{height:'100px', width:'100px'}} alt='airline'/>
                <span> Country: </span>
                <span> Established: </span>
                <span> Head Quater:  </span>
                <br/>
                <label>Passenger Name: </label><br/>
                <label>Total trips: </label>
            </div>
          )
      )}
    </div>
    )
}