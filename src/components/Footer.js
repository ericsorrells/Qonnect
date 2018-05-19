// ========================================================================================
import React from 'react';
import { Link }  from 'react-router-dom';
// ========================================================================================

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__inner_container'>
        <div className='footer__title'>
          <Link to='/'>qonnect</Link>
        </div>
        <div className='footer__links'>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/'>Blog</Link>
        </div>
        <div className='footer__social-icons'>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer;