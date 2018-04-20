// ========================================================================================
import React from 'react';
import { Link } from 'react-router-dom';

// ========================================================================================

const NavBar = () => {
  return(
    <nav>
      <div className="nav">
        <div className="nav-title">
          qonnect
        </div>
        <div>
          <Link to="/">Home</Link> |
          <Link to="/profile">Profile</Link> |
          <Link to="/add-event">Add Event</Link>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;