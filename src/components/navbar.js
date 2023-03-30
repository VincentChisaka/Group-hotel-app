import React, {useState} from 'react'
import "/home/vincent/Projects/Group-hotel-app/src/components/navbar.css"

function Navbar() {
      const [active, setActive] = useState("nav__menu");
        const navToggle = () => {
          active === 'nav__menu' ? ''
        }

        
    return (
        <nav className="nav">
            <a href="#" className="nav__brand">
                SUMMER HOTELS
                </a>
            <ul className={active}>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Search
                </a>
                </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Home
                </a>
                </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Admin
                  </a>
                </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Contact
                  </a>
                </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  About
                  </a>
                  </li>
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