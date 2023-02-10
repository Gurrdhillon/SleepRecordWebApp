import React from 'react'
import {Link} from 'react-router-dom';

export default function nav() {

    const navStyle ={
        color: 'white'
    }

  return (
    <nav>
        <ul className='nav-Links'>
            <Link style={navStyle} to='/about'>
            <li>Home</li>
            </Link>
            <Link style={navStyle} to='/about'>
            <li>About</li>
            </Link>
            <Link style={navStyle}  to='/dashboard'>
            <li>Dasboard</li>
            </Link>
            <Link style={navStyle}  to='/sleepForm'>
            <li>SleepForm</li>
            </Link>
            
        </ul>
    </nav>
    
  )
}