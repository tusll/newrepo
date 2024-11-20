import React, { useState } from 'react'

const UseState4 = () => {

const[randomNumber,setRandomNumber]=useState([])
const generatenewRandomumber=()=>{
    const newNumber=Math.floor(Math.random()*50)
    setRandomNumber(newNumber)
}
  return (
    <div>
        <h1>RandomNumber:{randomNumber}</h1>
        <button onClick={generatenewRandomumber}>GenerateRandomNumber</button>
    </div>
  )
}

export default UseState4