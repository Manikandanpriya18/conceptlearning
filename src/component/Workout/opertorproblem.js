import React, { useState } from 'react'

function Opertorproblem() {
  let a = 20, b = 4, c = 10;
  let d = true, f = false;

  let Arithmeticfunction = () => {
    let add = a + b;
    let sub = a - b;
    let mul = a * b * c;
    let div = a / b;
    let mod = a % b;
    return `Addition of two number is ${add}  Subtraction of two value is ${sub} Multiplication of three number is ${mul} 
    Division of two number is ${div} modulo of two number is ${mod}`

  }


  let comparefunction=()=>
  {
    let compare = a==b;

    return `${compare}`
  }



  let bitwiseoperator = () => {

    let Andopertor = a & b;
    let orOpertor = a | b;
    let xoropertor = a ^ b;
    let notopertor = ~a;
    return `AND ${Andopertor} OR ${orOpertor} Notopertor ${notopertor} xoropertor ${xoropertor}`
  }

  let logicalopertor = () => {
    let LogicalAnd = (d && f);
    let logicalor = (d || f)
    let Logicalnot = (!(d && f))

    return `LogicalAnd is ${LogicalAnd} Logicalor is ${logicalor} Logicalnot is ${Logicalnot}`
  }

  


    return (
      <div>
        {Arithmeticfunction()}<br />
        {bitwiseoperator()}<br />
        {logicalopertor()}<br />
        {comparefunction()}<br/>
        {((a >b) ? Arithmeticfunction():comparefunction() )}


      </div>
    )
  }

  export default Opertorproblem;
