import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons'
import dp from "../../assets/1.png"
import "./navbar.css"
import React, { useState } from 'react'

const Navbar = () => {




  return (
    <div className='navbar'>
        <div className='balance'>
          <span style={{fontSize:"20px"}}><b> Balance</b> </span>  
        </div>
        <div className='rightNav'>
            <div className='bellDiv'>
            
            <FontAwesomeIcon   className='bellIcon' icon={  faBell} />
           
            </div>
            <div>

            <img className='img' src={dp} alt="" height="36x" width="36px" />
            </div>
        </div>
    </div>
  )
}

export default Navbar