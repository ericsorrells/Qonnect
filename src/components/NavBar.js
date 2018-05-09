// ========================================================================================
import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../components/SignOutButton';
// ========================================================================================

const NavigationAuth = () => {
  return (
    <div>
      <Link to="/">Home</Link> |
      <Link to="/profile">Profile</Link> |
      <Link to="/add-event">Add Event</Link> |
      <Link to="/find-events">Find Events</Link>
      <SignOutButton />
    </div>
  )
}

const NavigationNonAuth = () => {
  return(
    <div>
      <Link to={'/'}>Home</Link> |
      <Link to={'/signin'}>Sign In</Link>
    </div>
  )
}

const NavBar = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <div className="nav-title">
          qonnect
        </div>
        {user
          ? <NavigationAuth />
          : <NavigationNonAuth />
        }
      </div>
    </nav>
  )
}
export default NavBar;