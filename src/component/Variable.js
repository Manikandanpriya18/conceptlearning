import React from 'react'
let g = "hello"
function Variable() {
  let num = <h1> Welcome to GT college</h1>
  let b = {}
  const c = 78;
  var d = 5
  var d = 10
  b = { age: 15 }
  let i




  let handleCall = () => {
    let h = "welcome"
    return h

  }
  return (
    <div>
      {c}
      {b.age}
      {d}
      {g}
      {handleCall()}
      num
      {num}<br />
      {typeof (i)}
    </div>
  )
}

export default Variable



