import React, { useEffect, useState } from 'react'
// component renders for the first time
// whenever it re renders
// some data in our component change
// **************************
// const UseEffect1 = () => {
//   const[value,setValue]=useState(0)
//  useEffect(()=>{
//     console.log("call useEffect")
//     document.getTitle="Increment${value}"
    
//   },[])
// ******************
// const UseEffect1 = () => {
//   const[value,setValue]=useState(0)
//  useEffect(()=>{
//     console.log("call useEffect")
//     document.getTitle="Increment${value}"
    
//   })
  // empty dependency will not fire the callback effect
  // but giving a value will render the callback effect
  const UseEffect1 = () => {
  const[value,setValue]=useState(0)
 useEffect(()=>{
    console.log("call useEffect")
    document.getTitle="Increment${value}"
    
  },[value])
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={()=>setValue(value+1)}>Click me</button>
    </div>
  )
}

export default UseEffect1