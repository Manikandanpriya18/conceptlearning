import React, { useState } from 'react'

function Stringfunction() {

    let [str,setStr]=useState('');

    let handlechange=()=>
    {
      let a= str.toUpperCase();
      let b= str.toLowerCase();

      if(str===a)
      {
        setStr(b);
      }
      
     else{
      setStr(a);
     }
      

        
    }

  return (
    
    <div>Stringfunction

    <input type="text" value={str}  onChange={(e)=>setStr(e.target.value)}/><br/>

    {/* <p> String name is {str} </p> */}<br/>
    <button onClick={handlechange}>Converter</button><br/>
  
    
  
    
   
    </div>
  )
}

export default Stringfunction