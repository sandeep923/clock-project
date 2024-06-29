import React from 'react'
import { useState } from 'react'

const Clock = () => {
  
    const[ctime, setTime]= useState(new Date().toLocaleTimeString());
    const UpdateTime=()=>{
        let time = new Date().toLocaleTimeString()
        setTime(time)
    }
    setInterval(UpdateTime,1000)
 return (
   <>
   <div className="container mt-5">
   <h1 className='heading-1 text-center'>Clock</h1>
   <div className="box mx-auto shadow rounded w-50 p-5 mt-5 bg-danger ">
    <h1  className='heading-2 text-center'>{ctime}</h1>
    </div>
   </div>
   
   </>
  )
}
export default Clock