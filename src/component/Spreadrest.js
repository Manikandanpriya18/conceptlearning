import React, { useState } from 'react'

function Spreadrest() {
    let [fruit,setFruit]=useState({
        name:"mango",
        color:"yellow",
        
    })
   let [name,setName]=useState("")
    let a=[1,2,3]
    let b=[4,5,6]
    let c=[...a,...b]
    const handleChange = () => {
        // setFruit((previousValue) => {
        //     return {...previousValue, color: "orange"};
        // });
        setFruit({...fruit,color:"orange"})
    }
    let Restoptr=(...args)=>{
         return args.map(val=>val*2)
    }
    console.log(Restoptr(1,2,3))
    
  return (
    <div>
      {c}<br/>
      <p> it is a {fruit.color} {fruit.name}</p>
      <button onClick={handleChange}>change</button>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button>odd even</button>
      {name}
    </div>
  )
}

export default Spreadrest
