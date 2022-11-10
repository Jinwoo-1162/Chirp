import React from 'react';
import '../CSS/NavbarOption.css';

function NavbarOption({ text, icon }) {
    return (
        <div className='navbarOption'>
           {icon} <h2>{text}</h2>
        </div>
        
    )
}

export default NavbarOption;