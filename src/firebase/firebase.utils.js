import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBHFQ3IB-ySzS3kh6PY3rnFBxBh2SD0BDg",
    authDomain: "crwn-db-00.firebaseapp.com",
    databaseURL: "https://crwn-db-00.firebaseio.com",
    projectId: "crwn-db-00",
    storageBucket: "crwn-db-00.appspot.com",
    messagingSenderId: "126578674227",
    appId: "1:126578674227:web:181f4784905c328a257146",
    measurementId: "G-ZTFW64KM3F"
  };
  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;