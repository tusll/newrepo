import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        async function getData(){
            const response=await fetch("https://jsonplaceholder.typicode.com/posts")
             const data=await response.json()
             if (data && data.length) {
                setData(data)
             }
        }
        getData()
    },[])
  return (
    <div>
        <ul>{data.map((todo)=>(
            <div key={todo.id}>
                 <li >{todo.title}</li>
                 <li style={{color:"Red"}}>Body--{todo.body}</li>
            </div>
           
        ))}</ul>
    </div>
  )
}

export default FetchData