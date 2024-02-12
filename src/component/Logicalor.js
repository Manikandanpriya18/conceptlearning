import React from 'react'
import Logical from './Logical'

function Logicalor(val) {
  let a=2
  let b=3
    let name=val.name||"guest"
    console.log(2&3)
    console.log(2|3)
    console.log(2^3)
    console.log(~3)
  return (
    <div>
      {name}<br/>
      {a+=b}<br/>
      {a-=b}<br/>
      {((a>b)?"a is greater":"b is greater")}
      <Logical/>
    </div>
  )
}

export default Logicalor
