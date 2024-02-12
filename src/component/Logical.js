import React from 'react'

function Logical() {
    let array1=[1,2,3]
    let newarr=array1[0]
 console.log((5==5)&&(3>4))
 console.log((5==6)||(3>4))
 console.log(!(5==6)||(3>4))
 return(
    <>
    {newarr}<br/>
    {array1.map(val=>val*2)}
    </>
 )
}

export default Logical
