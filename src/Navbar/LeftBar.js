import React from 'react';
import './LeftBar.css';

function LeftBar() {
    return (
        <div className="LeftBar-conteiner">
            <div className="logo-conteiner">
            <img className="logo-icon" src="image/cloud.png" alt="logo"/>
            <p className="logo">CLOUD-B</p>
            </div>
            <div className="menu-link">
                <div className="link"><a href="/">Dashboard</a></div>
                <div className="link"><a href="/">Coater</a></div>
                <div className="link"><a href="/">Roll Press</a></div>
                <div className="link"><a href="/">Slitter</a></div>
                <div className="link"><a href="/">Half Slitter</a></div>
                <div className="link"><a href="/">Mixer</a></div>
                <div className="link"><a href="/">Rewinder</a></div>
            </div>
        </div>
    )
}
export default LeftBar;
