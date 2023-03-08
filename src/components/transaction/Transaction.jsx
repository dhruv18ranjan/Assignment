import React from 'react'
import TransactionInfo from '../transactionInfo/TransactionInfo'
import "./transaction.css"
import mastercard from "../../assets/mastercard.png"
import paypal from "../../assets/paypal.webp"
import qiwi from "../../assets/qiwi.png"
import webMoney from "../../assets/webMoney.png"

const Transaction = () => {
    return (
        <div>
            <div className='transactionDiv'>

                <div className='transactionNav'>
                    <div className='transactionHead'>
                        <span style={{ fontSize: "18px" }}> <b>Transactions</b> </span>
                    </div>


                    <div className='nav2'>
                        <span>Today</span>
                        <span>This Week</span>
                        <span><b>This Month</b></span>
                    </div>

                </div>

                <div className='transactioninfo'>

                     <div className='infoDiv'><TransactionInfo date="17 Feb 2020,16:30" src={mastercard} method="Mastercard" status="Pending" amount="-400.00$" /></div>
                    <div className='infoDiv'><TransactionInfo date="14 Feb 2020,12:29" src={paypal}  method="Paypal" status="Pending" amount="-250.00$"  /></div>
                    <div className='infoDiv'><TransactionInfo date="12 Feb 2020,09:45" src={qiwi} method="Qiwi" status="Done" amount="+1000.00$" color="#2DCDDF"  /></div>
                    <div className='infoDiv'><TransactionInfo date="10 Feb 2020,12:39" src={webMoney}  method="Webmoney" status="Pending" amount="-250.00$"  /></div>
                </div>


            </div>
        </div>
    )
}

export default Transaction