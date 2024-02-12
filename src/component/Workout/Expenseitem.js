import React from 'react'
import Expensedate from './Expensedate'

function Expenseitem(data) {
  return (
    <>
    <h1>Expenseitem</h1>
    {data.title}<br/>
    {data.amount}<br/>
    {/* {data.date.toDateString()} */}
    <Expensedate date={data.date}/>

    </>
  )
}

export default Expenseitem