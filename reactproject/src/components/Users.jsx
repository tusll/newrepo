import React from 'react'

const Users = () => {

const users=[
    {
        id:"1",
        name:"A",
        age:"12"

    },
    {
        id:"2",
        name:"B",
        age:"13"

    },
    {
        id:"3",
        name:"C",
        age:"14"

    }
]
  return (
    <div>
        {users.map((user)=>(
            <div key={user.id}>
                <h1>Name:{user.name}</h1>
                <h1>Age:{user.age}</h1>
            </div>
        ))}
    </div>
  )
}

export default Users