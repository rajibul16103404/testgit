import React from 'react'
import './Hero.css'
import Banner from '../../assets/banner.png'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero_details">
            <div className="text_hero">
                <h2>Deliver Food To Your Door Step|</h2>
                <h4>Authentic Food|,Quick Service,Fast Delivery</h4>
            </div>
            <div className="bannerimg">
                <img src={Banner} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero