
import React, { useState } from 'react'

function Stringobj() {
  let [str3,setStr]=useState();
    let st=new String("welcome to gt to to to")
    let str1="hello gt"
    let num=123
    num=87
    var str = "For more information, see Chapter 3.4.5.1";
    var re = /(chapter \d+(\.\d)*)/i;
    var found = str.match( re );  
    var re1 = /apples/gi;
         var str2 = "Apples are round, and apples are juicy.";
         var newstr = str2.replace( re1,"oranges");  
         console.log(str1.split(""))
  return (

    
    <div>Stringobj<br/>

<input type="text" value={str3}  onChange={(e)=>setStr(e.target.value)}/>

<p> String name is {str3} </p>

    {str1.toUpperCase()}
    {str1.substr(0,4)}
    {str1.split("")}<br/>
    {str1.slice(1)}<br/>
    {str1.substring(0,5)}
    {newstr}
    {str2.replace("apples", "orange")}<br/>
    {str1.search("gt")}<br/>
    {found}<br/>
    {str1.localeCompare("ibc")}<br/>

        {st.indexOf("to")}<br/>
        {st.lastIndexOf("to")}
        {st.concat(str1)}
        {st.charAt(0)}<br/>
        {st.charCodeAt(0)}
        {st.length}
        <br/>
        {str1}<br/>
        {12*"45"}
    </div>
  )
}

export default Stringobj