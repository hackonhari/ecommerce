import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCCzvUyCrZkdFtpFGpk16z3amzPDvKOzqU",
    authDomain: "ecommerceztm.firebaseapp.com",
    databaseURL: "https://ecommerceztm.firebaseio.com",
    projectId: "ecommerceztm",
    storageBucket: "ecommerceztm.appspot.com",
    messagingSenderId: "92350302430",
    appId: "1:92350302430:web:49956ac8a36d9ee1a45a4f",
    measurementId: "G-EL5H4GJFXS"
};


firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
  });
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;
  
export const createUserProfileDocument=async(user,addtionalData)=>{
    if(!user) return;
    const userRef=firestore.doc(`users/${user.uid}`);
    const snapShot= await userRef.get();
    if(!snapShot.exists){
        const {displayName,email}=user;
         const createdAt=new Date();

         try{
             await userRef.set({
                 displayName,
                 email,
                 createdAt,
                 ...addtionalData
             })
         }
         catch(error){
             console.log('error creating user',error.message)

         }
    }
    return userRef;
}