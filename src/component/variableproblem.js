import React from 'react'
let a = 100;
const c = 40;
function Variableproblem() {

     a = 150; 
    
    let b = 20;
    const c = 50;

    let arrow = () => {
        let d = "this arrow function";
        return d;
    }

    let handleCall = () => {
        let h = "welcome"
        return h
    
      }

    return (
        <div>
            This is global variable<br />
            {a}<br />
            {c}<br />
            This is Local variable
            {a}<br />
            {b}<br />
            {c}<br />
            {arrow()}<br />
            {handleCall()}

        </div>
    )
}

export default Variableproblem
