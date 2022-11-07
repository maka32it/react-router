import React from 'react'
import "./Board.css"
import { Link } from 'react-router-dom'

export default function Board() {
  return (
    <div className='board'>
      <div className='container'>
        <div className='content'>
            <h1>Thanks for your subscription</h1>
            <h2>We will contact you on your email</h2>
            <button><Link to="/">Home</Link></button>
        </div>
      </div>
    </div>
  )
}
