import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDjG562ZEhyPqrrP77AlDghuvaQ2usgJFI",
  authDomain: "qonnect-110b1.firebaseapp.com",
  databaseURL: "https://qonnect-110b1.firebaseio.com",
  projectId: "qonnect-110b1",
  storageBucket: "qonnect-110b1.appspot.com",
  messagingSenderId: "192291537712"
};

firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth();

const storageKey = 'qonnect_key';

const isAuthenticated = () => {
  // console.log('CURRENT USER????', auth.currentUser );
  // console.log('LOCAL STORAGE???', !!localStorage.getItem(storageKey))
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
};

export { firebase, auth, storageKey, isAuthenticated };
export default database;