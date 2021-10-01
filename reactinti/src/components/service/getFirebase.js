import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCEErW3PCScXe_vVwZde71zRWRF_7dGyQE",
    authDomain: "tienda-inti.firebaseapp.com",
    projectId: "tienda-inti",
    storageBucket: "tienda-inti.appspot.com",
    messagingSenderId: "41521236041",
    appId: "1:41521236041:web:09da25cf0d1f3b24351798"
  };
  
  
  const app = firebase.initializeApp(firebaseConfig);




  export function getFirestore() {
      return firebase.firestore(app)
      
  }

  export const auth=firebase.auth()