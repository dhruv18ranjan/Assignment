import React from 'react';
import './paymentMethod.css';

const PaymentMethod = ({ icon, title, subtitle }) => {
  return (
    <div className="container">
        <div className='top'>
         <span className="title">{title}</span>
         <div className='subtitleDiv'>

        <span className="subtitle">{subtitle}</span>
         </div>
        </div>
      <div className="imgContainer">
      <img src={icon} alt={`${title} logo`} className="icon" />  
      </div>
    </div>
  );
};

export default PaymentMethod;
