import React, { useState } from 'react'

function UseState2() {
    const[movies,setMovies]=useState([
        {id:1,title:"spiderMan",rating:3},
        {id:2,title:"superMan",rating:7},
    ])

    const handleClick=()=>{
        setMovies(
            movies.map((m)=>(m.id===1?{...movies,title:"John Wick"}:m))
        )
    }
  return (
    <div>{movies.map((m)=>(
        <li key={m.id}>{m.title}</li>
    ))}
    <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default UseState2