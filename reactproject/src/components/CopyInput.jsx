import React, { useState } from 'react'
import Popup from './Popup'

const CopyInput = () => {
    const[inputValues,setInputValues]=useState('')
    const[copied,setCopied]=useState(false)

    const handleCopy=()=>{
        navigator.clipboard.writeText(inputValues).then(()=>{
            setCopied(true)
            setTimeout(()=>setCopied(false),2000)
        })
    }
  return (
    <div>
        <input type="text" value={inputValues} onChange={e=> setInputValues(e.target.value)} />
        <button onClick={handleCopy}>Copy</button>
        <Popup copied={copied}/>
    </div>
  )
}

export default CopyInput