import React, { useState } from 'react'
import LOGO_LINK from '../utils/links'
import '../../index.css'
import {Link } from 'react-router-dom'
import UseOnlineOffline from '../utils/UseOnlineOffline'


const Hader=()=>
{

        const internetStatus=UseOnlineOffline();
        const [loginbtn,setLoginbtn]=useState("Login")
        console.log("check behavior of rendering by login button")
        return(
                <div className="header">
                        <div className="logo-container">
                                <img className="logo" src= {LOGO_LINK}/>
                        </div>
                     

                       <div className="nav-bar">
                        <ul className='nav'>
                                <li>internet Status:{internetStatus ? "🟢":"🔴"}</li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us </Link></li>
                                <li><Link to="/contact">contact Us </Link></li> 
                                <li><Link to="/">Cart </Link></li>
                                 <li><Link to="/grocery">Grocery</Link></li> 

                        </ul>
                        </div>

                       
                                <button className='login-btn' onClick={()=>{
                                        loginbtn==="Login" ? setLoginbtn("Logout"): setLoginbtn("Login");
                                }}>{loginbtn}</button>
                         
                        
                </div>
        )
}


export default Hader