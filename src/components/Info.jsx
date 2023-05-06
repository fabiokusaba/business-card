import React from 'react';
import Profile from '../images/profile-picture.png';
import Mail from '../images/mail.png';
import Linkedin from '../images/linkedin.png';
import '../styles/info.css';

export default function Info() {
    return (
        <header className='info'>
            <img src={Profile} alt="Profile" />
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <h3>laurasmith.website</h3>

            <div className='info-button'>
                <button className='button-email'>
                    <img src={Mail} alt="Mail logo" />
                    <span>Email</span>
                </button>
                <button className='button-linkedin'>
                    <img src={Linkedin} alt="Linkedin logo" />
                    <span>LinkedIn</span>   
                </button>
            </div>
        </header>
    )
}