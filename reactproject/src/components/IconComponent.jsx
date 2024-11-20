import React from 'react'
import {FaBeer} from 'react-icons/fa'
const IconComponent = () => {
  return (
    <div>
        <FaBeer/>
        <FaBeer size={30}/>
        <FaBeer size={40} color='Gold'/>
    </div>
  )
}

export default IconComponent