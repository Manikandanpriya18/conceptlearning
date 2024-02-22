import React from 'react'

function Arrayobj() {
    let a1=[101,"Abi", "Covai", "Abi"]
    let a2=new Array(102,"Prem", "trichy")
    let newa1=a1[0]
    let n1=[1,2,5,4,6,9]
    let num1=[5,10,15]
    let num2=[7,8,10,3,5,6]
let b=[]
let reducemethod=num1.reduce((acc,val)=>acc*val,0)
let reduright=num1.reduceRight((acc,val)=>acc-val,0)
  return (
    <div>Arrayobj<br/>{n1}<br/>
    {num1.splice(1,0,20,25)}<br/>
    {num1}
    {num2.sort((a,b)=>b-a)}<br/>
    {a1.reverse()}<br/>
    {a2.slice(0,2)}
    {reducemethod}<br/>
    {reduright}<br/>
    {n1.unshift(3,7)}
    {n1.pop()}<br/>{n1.push(11)}<br/>
    {n1.shift()}<br/>
    {n1.filter(val=>val%2==0)}<br/>
    {n1.forEach(val=>(b.push(<p>{val *5}</p>)))}<br/>
    {n1.map(value=><p>{value + 5}</p>)}<br/>
    {b}<br/>
    {a1.join(" & ")}
        {n1.every(val=>val%2==0).toString()}<br/>
        {n1.some(val=>val%2==1).toString()}
        {a1.length}<br/>
        {newa1}<br/>
        {a1.concat(a2)}<br/>
        {a1.lastIndexOf("Abi")}
    </div>
  )
}

export default Arrayobj