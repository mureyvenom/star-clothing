import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBhKedyptmk5SXeFBV2-YP7oFQ8TzMS-Zg",
    authDomain: "star-clothing-2e83a.firebaseapp.com",
    projectId: "star-clothing-2e83a",
    storageBucket: "star-clothing-2e83a.appspot.com",
    messagingSenderId: "87196076737",
    appId: "1:87196076737:web:843d1c0d3ae70c4c5fe240"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;