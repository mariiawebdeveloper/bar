import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Menu from "../img/menu.png"

const Dropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className="dropdown-container">
            <button onClick={toggleDropdown}>
               <img src={Menu} width={50}/>
            </button>
            {isDropdownOpen && (
                <ul className="dropdown-menu">
                    <div><Link to={'/'} className={'links'}>Home</Link></div>
                    <div><Link to={'/about'} className={'links'}>About us</Link></div>
                    <div><Link to={'/menu'} className={'links'}>Our menu</Link></div>
                    <div><Link to={'/about'} className={'links'}>Pages</Link></div>
                    <div><Link to={'/about'} className={'links'}>Blog</Link></div>
                    <div><Link to={'/about'} className={'links'}>Contact us</Link></div>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;