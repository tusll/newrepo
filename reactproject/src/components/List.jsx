import React from 'react'

const List = () => {
    // const numbers=[1,2,3,4,5]
    const usersInfo=[
      {
        username:"Huxn1",
        email:"test@gmail.com",
        location:"USA"

      },
       {
        username:"Huxn2",
        email:"test@gmail.com",
        location:"USA"

      },
       {
        username:"Huxn3",
        email:"test@gmail.com",
        location:"USA"

      },
       {
        username:"Huxn4",
        email:"test@gmail.com",
        location:"USA"

      }
  ]
  return (
    <main>
         {/* {numbers.map((number)=>(
            <ul key={number}>
                <li>{number}</li>
            </ul>
        ))}  */}
        {/* usersInfo.map((user) */}
        {/* Destructuring */}
       {usersInfo.map(({username,email,location})=>(
        <ul key={Math.random()}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
       ))}
    </main>
  )
}

export default List