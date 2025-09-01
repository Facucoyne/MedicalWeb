

import React , {useState} from 'react'
import { Link , NavLink} from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
  const [menuOpen , SetMenuOpen] = useState(false)
  return (

  <nav>
    <Link to="/">
   
    </Link>

      <div className='menu' onClick={() => {
        SetMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
  

    <ul className={menuOpen ? "open" : ""}>

       <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/services">Servicios</Link>
        </li>
        <li>
           <li>
            <Link to="/contact">Contacto</Link>
        </li>
        </li>
    </ul>
  </nav>
  );
};
