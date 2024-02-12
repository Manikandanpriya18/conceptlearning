import React, { useState } from 'react'

function Usestatehook() {
    let [user, setUser]=useState({
        name:"",
        age:""
    })
    let handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <div>Usestatehook
        <input type="text" name="name" value={user.name} onChange={handleChange}></input>
        <input type="text" name="age" value={user.age} onChange={handleChange}></input>
        {user.name}<br/>
        {user.age}
    </div>
  )
}

export default Usestatehook