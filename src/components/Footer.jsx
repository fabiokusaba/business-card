import React from 'react';
import '../styles/footer.css';
import Facebook from '../images/facebook.png';
import Github from '../images/github.png';
import Instagram from '../images/insta.png';
import Twitter from '../images/twitter.png';

export default function Footer() {
    return (
        <div className="footer">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Github} alt="" />
        </div>
    )
}