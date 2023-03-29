import React from 'react';

function Navbar(props) {
    return (
        <nav className="nav">
            <a href="#" className="brand">herdoy</a>
            <ul className="nav__menu">
              <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Admin</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
              <li className="nav__item"><a href="#" className="nav__link">About</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;