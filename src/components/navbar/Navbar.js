import React,{useState,useEffect} from 'react'
import "./Navbar.css"
import {CgAirplane} from "react-icons/cg"
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from "react-router-dom"


export default function Navbar() {
  
    const[nav,setNav] = useState(false);
    function handleNav(){
        setNav(nav=>!nav)
    }
  return (
    <div name="top" className='navbar'>
      <div className='container'>
        <div className='logo'>
            <CgAirplane className="icon"/>
            <h1>Travel</h1>
        </div>
        <ul className={nav?"nav-menu active" : "nav-menu"}>
            <li className='li'> <Link to="/">Home</Link> </li>
            <li className='li'> <Link to="/about">About</Link></li>
            <li className='li'><Link to="/offers">Offers</Link></li>
            <li className='li'><Link to="/contact">Contact</Link></li>
            <button>Sign in</button>
        </ul>
        
        <div className='hamburger' onClick={handleNav}>
            {!nav ? (<FaBars className='icon '/>):(<FaTimes className='icon white'/>)  }
        </div>
      </div>
    </div>
  )
}
