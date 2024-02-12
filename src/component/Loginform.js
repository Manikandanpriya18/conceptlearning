import React, { useState } from "react";

function Loginform() {
    let [Uname, setUname]=useState({
        name:"",
        age:""
    })
    let handleChange=(e)=>{
        setUname({...Uname,[e.target.name]:e.target.value})
    }
  return (
    <div><lable>User Name</lable><br/>
        <input type="text" name="name" value={Uname.name} onChange={handleChange}></input>
        
        {Uname.name}<br/>
        <lable>PassWord</lable><br/>
        <input type="password" name="age" value={Uname.age} onChange={handleChange}></input>
        
        {Uname.age}
    </div>
  )
}

export default Loginform;
