import React, { useState } from 'react'
import LOGO_LINK from '../utils/links'
import '../../index.css'


const Hader=()=>
{

        const [loginbtn,setLoginbtn]=useState("Login")
        return(
                <div className="header">
                        <div className="logo-container">
                                <img className="logo" src= {LOGO_LINK}/>
                        </div>
                     

                       <div className="nav-bar">
                        <ul className='nav'>
                                <li>Home</li>
                                <li>About</li>
                                <li>contact</li> 
                                <li>Cart</li>

                        </ul>
                        </div>

                       
                                <button className='login-btn' onClick={()=>{
                                        loginbtn==="Login" ? setLoginbtn("Logout"): setLoginbtn("Login");
                                }}>{loginbtn}</button>
                         
                        
                </div>
        )
}


export default Hader