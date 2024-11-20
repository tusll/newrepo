import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const[count,setCount]=useState(0)
    const intervalRef= useRef(null)
    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setCount((prevCount)=>prevCount+1)
        },1000)
        return()=>{
    // clearInterval(intervalRef.current)
        }
    },[])
  return (
    <div>
        <h1>
            Timer:{count}secs
        </h1>
        <button onClick={()=>{
            // clearInterval() is a window method used to shut down the loop-calling process of a setInterval() execution when it must be stopped or ...
            clearInterval(intervalRef.current)
        }}>Stop Timer</button>
    </div>
  )
}

export default Timer