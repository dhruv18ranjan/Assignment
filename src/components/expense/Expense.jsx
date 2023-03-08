import React from 'react'
import "./expense.css"
import send from "../../assets/send.png"
import recieve from "../../assets/recieve.png"


const Expense = () => {
  return (
    <div>
      <h3>Income/Expense</h3>

      <div className='incomeDiv'>
        <div>
          <img height="50px" width="50px" src={send} alt="" />
        </div>
        <div className='moneyData'>
          <span> <b> $22,578.00</b></span>
          <span>total amount expense</span>
        </div>
      </div>

      <div className='incomeDiv'>
        <div>
          <img src={recieve} height="50px" width="50px" alt="" />
        </div>
        <div className='moneyData'>
          <span> <b>$5,783.00</b> </span>
          <span>total amount income</span>
        </div>
      </div>

    </div>
  )
}

export default Expense