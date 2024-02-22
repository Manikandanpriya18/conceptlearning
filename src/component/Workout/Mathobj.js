import React from 'react'

function Mathobj() {
    var value = Math.abs(-1);
    var value1= Math.ceil(-45.25);
    var value2= Math.floor(-45.25);
  return (
    <div>Mathobj
        {value}<br/>
        {value1}<br/>
        {value2}<br/>
        {Math.max(23,34,65,19)}<br/>
        {Math.pow(2,4)}<br/>
        {Math.random()}<br/>
        {Math.round(12.73)}<br/>
        {Math.sqrt(144)}
    </div>
  )
}

export default Mathobj