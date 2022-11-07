import React from 'react'
import "./AboutPage.css"
import { Link } from 'react-router-dom'
export default function AboutPage() {
  return (
    <div className='aboutPage'>
      <div className='container'>
        <div className='content'>
        <h2>About us</h2>
            <p>Our main goal is to help you find beautiful destination for your next travel.</p>
            <p>We can plan every step of your desired journey.</p>
            <p>Starting from tickets ending with transportation in your final destination.</p>
            <button><Link to="/contact"> Sign up</Link></button>
        </div>
      </div>
    </div>
  )
}
