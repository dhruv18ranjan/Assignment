import React from 'react'
import "./transactionInfo.css"
const TransactionInfo = ({date,src,method,status,amount,color}) => {
  return (
    <div className='transactionInfo'>
        <div className='info'> <span> {date} </span> </div>
        <div className='info'> <img height="20px" width="20px" src={src} alt="" />
         <span style={{marginLeft:"10px"}}>{method}</span> </div>
        <div className='info'> <span>{status}</span> </div>
        <div className='info' style={{marginRight:"0px"}}> <span style={{color:`${color}`}}> <b>{amount}</b> </span> </div>
        
    </div>
  )
}

export default TransactionInfo