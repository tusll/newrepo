import React, { useState } from 'react'

const SetFriend = () => {

    const[friends,setFriends]=useState(["A","B"])
    const addOneFriend=()=>setFriends([...friends,"C"])
    const removeFriend=()=>setFriends(friends.filter((f)=>f!=="C"))
    const UpdateFriend=()=>setFriends(friends.map((f)=>(f==="A"?"AA":f)))
  return (
    <div>
        {friends.map((f)=>(
            <li key={Math.random()}>{f}</li>
        ))}

        <button onClick={addOneFriend}>Add New Friend</button>
        <button onClick={removeFriend}>Remove One Friend</button>
        <button onClick={UpdateFriend}>UpdateOneFriend</button>
    </div>
  )
}

export default SetFriend