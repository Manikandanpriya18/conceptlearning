import React from 'react'

function Dateobj() {
    let dt=new Date(2024,0,12);
    let dt1=Date()
  return (
    <div>Dateobj
        {dt.toString()}<br/>
        {dt.getFullYear()}<br/>
        {dt.getDate()}<br/>
        {dt.getDay()}<br/>
        {dt.getMonth()}
        {dt.setFullYear(2000)}
        <br/>
        {dt.toDateString()}
        {dt1}
    </div>
  )
}

export default Dateobj