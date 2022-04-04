import React from 'react';
import './index.scss';
import Zoom from '../../../assets/images/zoom.png'


const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={Zoom} alt="logo"/>
        </div>
    );
};

export default Logo;