import React, { useId } from 'react'

const UseId = () => {
const Id1= useId()
const Id2=useId()



  return (
    <div>
        <div>
        <label htmlFor={`${Id1}`}>Email</label>
        <input type="email" id={`${Id1}`}  />
        </div>
        <div>
        <label htmlFor={`${Id2}`}>Password</label>
        <input type="password" id={`${Id2}`}  />
        </div>
       
    </div>
  )
}

export default UseId