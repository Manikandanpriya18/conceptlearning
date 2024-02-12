import React, { useState } from 'react'

function Logicaland() {
  let [login, setLogin] = useState(false)
  return (
    <div>
      {login && (
        <div>
          <p> Logged in</p>
          <button onClick={() => setLogin(false)}>log in </button>
        </div>
      )}

      {!login && (
        <div>
          <p> Logged out</p>
          <button onClick={() => setLogin(true)}>log out</button>
        </div>
      )}

    </div>
  )
}

export default Logicaland
