import React, { useState } from 'react'

const UseState1 = () => {

const[movie,setMovie]=useState({
    title:"Equalizer 3",
    rating:7,
})
const handleClick=()=>{
    // const copyMovie={
    //     ...movie,
    //     rating:5
    // }
    setMovie({...movie,rating:5})
}
  return (
    <div>
        <h1>Title:{movie.title}</h1>
        <p>Ratings:{movie.rating}</p>
        <button onClick={handleClick}>Change Rating</button>
    </div>
  )
}

export default UseState1