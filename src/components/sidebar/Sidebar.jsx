import React from 'react'
import "./sidebar.css"
import logo from "../../assets/logo.png"
import man from "../../assets/2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1, faGlobe, faLink, faServer } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {
  return (
    <div className='sideBar'>
      <div className='logodiv'>
        <img className='logo' src={logo} height="65px" width="180px" alt="" />
      </div>


<div className='manage'>
        <div className='manageHead'><a className='manageSpans'>MANAGE</a></div>

        <div className='navigation'>
          <div className='manageItems active'><a className='manageSpans '><FontAwesomeIcon className='icons' icon={faServer} /> <span className='test'>Proxy</span> </a></div>
          <div className='manageItems active'><a className='manageSpans'><FontAwesomeIcon className='icons' icon={faMoneyBill1} /><span className='test'>Balance</span></a></div>
          <div className='manageItems active'><a className='manageSpans'><FontAwesomeIcon className='icons' icon={faGlobe} /><span className='test'>Online Check</span></a></div>
          <div className='manageItems active'><a className='manageSpans'><FontAwesomeIcon className='icons' icon={faLink} /><span className='test'>Affiliate System</span></a></div>
        </div>
      </div>

      <div className='support'>
        <div className='navigation'>
          <div className='manageHead'><a className='manageSpans'>SUPPORT</a></div>
          <div className='manageItems active'><a className='manageSpans'><FontAwesomeIcon className='icons' icon={faLink} />Tickets</a></div>
          <div className='manageItems active'><a className='manageSpans'><FontAwesomeIcon className='icons' icon={faLink} />  FAQ</a></div>
        </div>
      </div>
     
      

      <div className='imageDiv'>
        <div className='imageItems'>
          <span style={{ "color": 'white' }}>Help Center</span> <br />
          <span style={{ "color": "rgb(206, 203, 203)" }}>visit our help center</span>
          <button>start</button>
        </div>
        <img src={man} height="200px" width="200px" alt="" />
      </div>
    </div>
  )
}

export default Sidebar
