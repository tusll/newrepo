import React from 'react'

const Greeting = ({timeofDay}) => {
  return timeofDay==="morning"?(<h1>Good Morning</h1>):(<h1>Good AfterNoon</h1>)
}

export default Greeting