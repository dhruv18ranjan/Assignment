import React from 'react'
import "./main.css"
import Chart from '../chart/Chart'
import Navbar from '../navbar/Navbar'
import PieComp from '../PieComp/PieComp'
import PaymentMethod from '../paymentMethod/PaymentMethod'
import paypal from "../../assets/paypal.webp"
import mastercard from "../../assets/mastercard.png"
import qiwi from "../../assets/qiwi.png"
import transferWise from "../../assets/transferWise.png"
import webMoney from "../../assets/webMoney.png"
import Transaction from '../transaction/Transaction'
import Expense from '../expense/Expense'

const Main = () => {
  return (
    <div className='maindiv'>

      <div className='main'>
        <div className='navChart'>
          <Navbar />
          <Chart />
        </div>
        <div className='pieDiv'>
          <PieComp />
        </div>
      </div>

      <div className='paymentMethod'>
        <span> <b>Payment Methods </b> </span>
        <div className='payment'>

        <PaymentMethod icon={paypal} title="paypal" subtitle="1-5%" />
        <PaymentMethod icon={mastercard} title="mastercard" subtitle="1-5%" />
        <PaymentMethod icon={webMoney} title="webMoney" subtitle="1-5%" />
        <PaymentMethod icon={qiwi} title="qiwi" subtitle="1-5%" />
        <PaymentMethod icon={transferWise} title="transferWise" subtitle="1-5%" />
        </div>
      </div>
    <div className='footDiv'>

      <div className='transaction'>
          <Transaction />
      </div>
      <div>
        <Expense />
      </div>
    </div>

    </div>
  )
}

export default Main