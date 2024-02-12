import React from 'react'
import "../Card.css"
function Card(props) {
    let classes="card"
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card
