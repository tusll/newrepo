import React from 'react'
// Variable Declaration 
const Variable = () => {
    const myName="Huxn React Class"
    const multiply=(a,b)=>a*b
    const specialClass="Simple-class"
  return (
    <div>
        <p>2+2={2+2}</p>
        <h1>{myName}</h1>
        <p>My Friend List:{["A","B"]}</p>
        <p>2*2={multiply(2,2)}</p>
        <p className={specialClass}>This is Special class</p>
    </div>
  )
}

export default Variable