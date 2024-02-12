import React from 'react'

function Expensedate(data) {
    let year=data.date.getFullYear()
    let month=data.date.getMonth()
    let date1=data.date.getDate()
  return (
    <>
  
    <h2>Expensedate</h2>
   {year}<br/>
   {month}<br/>
{date1}
    </>
  )
}

export default Expensedate