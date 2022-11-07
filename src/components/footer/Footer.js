import React from 'react'
import "./Footer.css"
import {CgAirplane} from "react-icons/cg" 
import {BsFillArrowUpSquareFill} from "react-icons/bs"
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter} from "react-icons/fa"
import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <div className='footer'>
    <div className='container'>
        <div className='top'>
            <div className='logo-footer'>
                <CgAirplane className="icon"/>
                <h2>Travel</h2>
            </div>
            <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
            <BsFillArrowUpSquareFill className='icon'/>
        </Link>
            
            </div>
                <div className='column-container'>
                    <div className='column'>
                        <h3>Navigation</h3>
                        <p>Home</p>  
                        <p>About</p>  
                        <p>Offers</p> 
                        <p>Contact</p> 
                </div>
                    <div className='column'>
                        <h3>Our offices</h3>
                        <p>Home</p>  
                        <p>About</p>  
                        <p>Offers</p> 
                        <p>Contact</p> 
                </div>
                    <div className='column'>
                        <h3 >Our Social Media</h3>
                        <p>Instagram <FaInstagram className='social-icon'/></p>  
                        <p>Facebook <FaFacebook className='social-icon'/></p>  
                        <p>Twitter <FaTwitter className='social-icon'/></p> 
                        <p>Pinterest <FaPinterest className='social-icon'/></p> 
                </div>
                 
        </div>
    </div>
      
    </div>
  )
}
