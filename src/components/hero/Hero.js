import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='content'>
            <h1>Travel</h1>
            <h1>With</h1>
            <h1>Ease</h1>
            <div><button> <Link to="/about">Learn more</Link> </button></div>
        </div>
      </div>    
    </div>
  )
}
