import React from 'react';
import "../index.css";
import Images from "../Images/Group 77.png"

export default function Hero() {
    return(
        <section className='hero'>
            <img src={Images} className='hero--photo'></img>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>
                Join unique interactive activites led by 
                one-of-a-kind hosts--all without leaving home.
            </p>
        </section>
    )
}