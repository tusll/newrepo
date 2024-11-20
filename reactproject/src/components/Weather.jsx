import React from 'react'

const Weather = () => {
  let temp=6
if (temp<15) {
    return <h1>It's  cold Outside !</h1>
} else if(temp>=15 && temp<=25){
    return <h1>Its nice Outside</h1>
}else if(temp>25){
    return <h1>Its hot outside</h1>
}
}

export default Weather