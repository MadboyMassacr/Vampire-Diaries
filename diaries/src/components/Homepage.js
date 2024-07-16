import React from 'react'
import './navbar.css';
import './homepage.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Textblock from './Textblock';

export default function Homepage() {
    return(
        <>
            <Parallax pages={2} style={{ top: '0', left: '0' }} className='animation'>
                    <header>
                    <a href='#' className='logo'>Vampire Diaries</a>
                    <ul>
                        <li><a href='#' className='active'>Home</a></li>
                        <li><a href='#'>Books</a></li>
                        <li><a href='#'>Reviews</a></li>
                        <li><a href='#'>About Us</a></li>
                    </ul>
                </header>
                <ParallaxLayer offset={0} speed={0.5}>
                    <div className="animation_layer parallax" id='moon'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.0}>
                    <div className="animation_layer parallax" id='stars'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.76}>
                    <div className="animation_layer parallax" id='mountains_behind'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.6}>
                    <div className="animation_layer parallax" id='mountains_front'>
                        <p>↓</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.55}>
                    <Textblock/>
                </ParallaxLayer>
            </Parallax>
            
            
        </>
        
        
    );
}