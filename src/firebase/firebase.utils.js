import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var config = {
  apiKey: "AIzaSyBHFQ3IB-ySzS3kh6PY3rnFBxBh2SD0BDg",
  authDomain: "crwn-db-00.firebaseapp.com",
  databaseURL: "https://crwn-db-00.firebaseio.com",
  projectId: "crwn-db-00",
  storageBucket: "crwn-db-00.appspot.com",
  messagingSenderId: "126578674227",
  appId: "1:126578674227:web:181f4784905c328a257146",
  measurementId: "G-ZTFW64KM3F"
};

export const createUserProfileDocuments=async(userAuth,addtionalData)=>{
  if(!userAuth) return

  const userRef=firestore.doc(`users/${userAuth.uid}`)
  const snapshot =await userRef.get()
  if (!snapshot.exists){
    const{displayName ,email}=userAuth;
    const createAt=new Date();
    try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...addtionalData
        })
    }catch(error){
      console.log('error creating user',error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

export default firebase;