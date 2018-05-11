import { auth } from '../firebase/firebaseIndex';

export const firebasePasswordUpdate = (partitionedData) => {
  if (partitionedData.authData.passwordOne && partitionedData.authData.passwordTwo) {
    auth.doPasswordUpdate(partitionedData.authData.passwordOne)
      .catch(error => {
        this.setState({ error: error });
      });
  }
}

export const firebaseProfileUpdate = (user, props, partitionedData) => {
  if (partitionedData.profileData.displayName || partitionedData.profileData.photoURL) {
    user.updateProfile({
      ...partitionedData.profileData
    }).then(() => {
      props.updateProfile(partitionedData.profileData);
    }).catch(function (error) {
      console.error('Profile Update Failed:', error)
    });
  }
}

export const firebaseAppProfileUpdate = (props, partitionedData) => {
  if (Object.keys(partitionedData.appData).length > 0) {
    props.updateProfileInFirebase(partitionedData.appData);
  }
}