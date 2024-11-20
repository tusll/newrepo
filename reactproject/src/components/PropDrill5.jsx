import React, { useContext } from 'react'
import { Data, Data1 } from './Propdrill1'

const PropDrill5 = () => {
    const userName=useContext(Data)
    const age=useContext(Data1)
  return (
    <div>
        <h1>
            My Name is {userName} and age is {age}
        </h1>
    </div>
  )
}

export default PropDrill5
