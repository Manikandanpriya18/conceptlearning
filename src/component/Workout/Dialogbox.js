import React from 'react'

function Dialogbox() {
    let handleAlert=()=>{
        alert("Welcome to GT College")
    }
    let handlePromt=()=>{
        let name=window.prompt("Enter your name")
        console.log(name)
    }
    let handleConfirm=()=>{
        let result=window.confirm("Are you interested?")
        console.log(result)
    }
    let handlePrint=()=>{
       window.print()
    }
  return (
    <div>Dialogbox
        <button onClick={handleAlert}>alert</button>
        <button onClick={handlePromt}>Prompt</button>
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={handlePrint}>Print</button>
    </div>
  )
}

export default Dialogbox