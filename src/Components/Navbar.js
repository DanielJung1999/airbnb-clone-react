import React from 'react';
import '../index.css';
import AirbnbLogo from '../Images/airbnb.png';

export default function Navbar(){
    return(
        <nav>
            <img src={AirbnbLogo} className='nav--logo'></img>
        </nav>
    )
}