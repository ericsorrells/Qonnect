// ========================================================================================
import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../components/SignOutButton';
// ========================================================================================

const NavigationAuth = (user) => {
  return (
    <div className='nav-auth__container'>
      <Link className='nav-auth__link' to={`/profile/${encodeURIComponent(user.uid)}`}>My Profile</Link>
      <Link className='nav-auth__link' to="/add-event">Add Event</Link>
      <Link className='nav-auth__link' to="/find-events">Find Events</Link>
      <SignOutButton />
    </div>
  )
}

const NavigationNonAuth = () => {
  return(
    <div>
      <Link className='nav-auth__link' to={'/signin'}>Sign In</Link>
    </div>
  )
}

const NavBar = ({ user }) => {
  return (
    <nav>
      <div className='nav'>
        <div className='nav-title'>
        <Link to={'/'}>qonnect</Link>
        </div>
        {user
          ? <NavigationAuth uid={user}/>
          : <NavigationNonAuth />
        }
      </div>
    </nav>
  )
}

export default NavBar;
