import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import microphone from './microphone.jpg';

const Logo = () => {
    return (
        <div className='center pt1'>
            <Tilt className="Tilt" options={{ max : 35 }} style={{ height: 200, width: 200 }} >
            <div className="Tilt-inner"> <img style={{paddingTop: '20px'}}alt="brain logo" src={microphone}/> </div>
            </Tilt>
        </div>
    );
}

export default Logo;