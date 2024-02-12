import React, { useState } from "react";

function Logindetails() {
  let [userName, SetuserName] = useState({
    uname: "",
    password: "",
  })

  let handlechange=(e)=>
  {
    SetuserName({...userName,[e.target.name]:e.target.value})
    
  }
  return (
    <div>
      Loginform
      <input type="text" name="uname" onChange={handlechange} /><br/>
      {userName.uname}
      
      <input type="text" name="password" onChange={handlechange} />
      {userName.password}
    </div>
  );
}

export default Logindetails;
