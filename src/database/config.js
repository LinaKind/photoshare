import * as firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyBxGZ3h85pOAuoSqcioThgX5R-EEvohAIM",
    authDomain: "photwall-6493d.firebaseapp.com",
    databaseURL: "https://photwall-6493d-default-rtdb.firebaseio.com",
    projectId: "photwall-6493d",
    storageBucket: "photwall-6493d.appspot.com",
    messagingSenderId: "1032337447611",
    appId: "1:1032337447611:web:f846893068f39e81e9e79e",
    measurementId: "G-S1MGQQMTWJ"
  
  };
  
  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()

  export {database}
