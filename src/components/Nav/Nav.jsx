import React from 'react'
import './Nav.css'
import {BsHCircleFill} from 'react-icons/bs'
import {NavLink} from "react-router-dom";


const Nav = () =>{
    return (
<nav className="header">
  <div className='logoDiv'>
        <div className="logo">
        <NavLink className="navbar-brand" to="/home"><h1 className="flex"><BsHCircleFill className="icon"/>
            aPPiesT
            </h1></NavLink>
        </div>
    </div>
  <ul>
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/mytrip">MyTrip</NavLink></li>
      <li><NavLink to="/hotels">Hotels</NavLink></li>
      <li><NavLink to="/travelmodes">Travel Modes</NavLink></li>
      <li><button className='btn loginBtn'>
        <NavLink to="/login">Login</NavLink>
      </button></li>
      <li><button className='btn'>
        <NavLink to="/signup">Sign Up</NavLink>
      </button></li>
  </ul>
</nav>
       
    )
}

export default Nav