import React from 'react'
import Expenseitem from './Expenseitem'

function Expense() {
    let expense=[
        {title:"rent", amount:40000,date:new Date()},
        {title:"household", amount:5000, date:new Date(2024,11,20), address:{street:"north", doorno:34}}
    ]
    let name={firstname:"Mark", lastname:"Antony"}
  return (
    <>
   
    <h1>Expense</h1>
{expense[0].title}<br/>
{expense[0].date.toLocaleString()}
<Expenseitem title={expense[0].title} date={expense[0].date} amount={expense[1].amount}/>
    </>
  )
}

export default Expense