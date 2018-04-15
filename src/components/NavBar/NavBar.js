// ========================================================================================
import React from 'react';
import { Link } from 'react-router-dom';

// ========================================================================================

const NavBar = () => {
  return(
    <div className="nav">
      Qonnect
      <Link to="/">Home</Link> |
      <Link to="/profile">Profile</Link> |
      <Link to="/add-event">Add Event</Link>
    </div>
  )
}

export default NavBar;