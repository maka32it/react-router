import React from 'react'
import "./Offers.css"


export default function Offers() {
  return (
    <div className='offers'>
    <div className='container'>
        <div className='content'>
            <h1>Check out available offers</h1>
                <h3>Hotels </h3>
                <button><a href='https://booking.com' target='blank'> Book a Hotel</a></button>
                <h3>Apartments</h3>
                <button><a href='https://airbnb.com' target='blank'> Book an Apartment</a></button>
                <h3>Transportation</h3>
                <button><a href='https://car-rent.com' target='blank'>Available Transportation</a> </button>
        </div>
    </div>
      
    </div>
  )
  }

