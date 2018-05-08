// ========================================================================================
import React from 'react';
import { auth } from '../firebase/firebaseIndex';
// ========================================================================================

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;