import React from 'react'

const Popup = ({copied}) => {
//   return createPortal render out from root
  return(
    <div>
        {copied && (
            <div style={{position:"absolute",bottom:"3rem"}}>Copied to clipBoard</div>
        )}
    </div>
    // ,document.querySelector("#popup")
  )
}

export default Popup