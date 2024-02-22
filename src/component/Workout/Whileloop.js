import React, { useState } from 'react'

function Whileloop() {
//  let i=0
//  while(i<5){
//     console.log("the value of i is", i)
//     i++
//  }
let [count,setCount]=useState(0)
let output=[]
let handleLoop=()=>{
    if(count<5){
    setCount(count+1)
    }
}



let i=0
while(i<count)
{
    output.push(<div>Item {i+1}</div>)
    i++
}
return(
    <>
    <h1>Whileloop function</h1>
    {output}
    <button onClick={handleLoop}>Loop</button>
    </>
)
}

export default Whileloop
