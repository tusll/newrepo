import React, { useRef } from 'react'

const UseRef = () => {
    const inputElement=useRef()
    const focusInput=()=>{
        inputElement.current.focus()
        inputElement.current.value="Huxn"
    }
  return (
    <div>
        <input type="text" ref={inputElement} />
        <button onClick={()=>focusInput()}>
            Focus and write Huxn
        </button>
    </div>
  )
}

export default UseRef