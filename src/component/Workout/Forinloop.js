import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Forinloop() {
  let navigate=useNavigate("")
    let name="Abinaya"
    let person=[]
let handleForin=()=>{
    for(let i in name)
    {
        person.push(
            <div>
                {name[i]}
            </div>
        )
    }

}
  return (
    <div>
      <Link to="/logicaland"><button>logicaland</button></Link>
      <Link to="/Forloopstate"><button>For Loop State</button></Link>
      <Link to="/Ifelsestatement"><button>IfElse Statement</button></Link>
      <button onClick={()=>navigate("/logicalor")}>logicalor</button>
      <button onClick={()=>navigate("/Operator")}>Operator</button>
      <button onClick={()=>navigate("/Variable")}>Variable</button>
      {person}
      {handleForin()}
    </div>
  )
}

export default Forinloop
