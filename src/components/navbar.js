import React from 'react'

function Navbar() {
    return (
        <nav className="nav">
            <a href="#" className="brand">
                SUMMER HOTELS
                </a>
            <ul className="nav__menu">
              <li className="nav__item">
                <a href="#" className="nav__link">Search
                </a>
                </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Home
                </a>
                </li>
              <li className="nav__item"><a href="#" className="nav__link">Admin</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
              <li className="nav__item"><a href="#" className="nav__link">About</a></li>
            </ul>
            <div className="nav__toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;