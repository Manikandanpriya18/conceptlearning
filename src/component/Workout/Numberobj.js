import React from 'react'

function Numberobj() {
    let num1=56
    let num2=new Number(90)
    var num = 77.7234;
         var val = num.toExponential(7); 
         let n=4
  return (
    <div>Numberobj
      {n.valueOf}<br/>
      {num.toPrecision(3)}<br/>
      {n.toString(16)}<br/>
      {num.toFixed(2)}<br/>
      {val}
        {num1}
        <br/>
        {num2.toString()}
    </div>
  )
}

export default Numberobj