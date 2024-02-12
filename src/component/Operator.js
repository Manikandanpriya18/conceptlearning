import React from 'react'

function Operator() {
  let a = 10
  let b = 10
  let num1 = 10
  let num2 = 5
  let Arithmetic = () => {

    let add = a + b
    let sub = a - b
    let mul = a * b
    let div = a / b
    let mod = a % b
    let inc = ++a
    let dec = --b
    return `Add ${add} sub ${sub} mul ${mul} div ${div} mod ${mod} inc ${inc} dec ${dec} `
  }
  let Comparison = () => {
    console.log((num1 === num2))
    console.log((num1 != num2))
    console.log(a, b)
  }

  return (
    <div>
      <h1>hello</h1>
      {10 + "10"}<br />
      {Arithmetic()}<br />
      {Comparison()}
    </div>
  )
}

export default Operator
