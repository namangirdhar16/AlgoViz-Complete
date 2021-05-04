import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAXSoee-NMDcL0g0yBKAdyrFmNT-2h1paU",
    authDomain: "authentication-707b8.firebaseapp.com",
    databaseURL: "https://authentication-707b8.firebaseio.com",
    projectId: "authentication-707b8",
    storageBucket: "authentication-707b8.appspot.com",
    messagingSenderId: "1010325408534",
    appId: "1:1010325408534:web:66cd43490d9f8eeae09e37",
    measurementId: "G-DJBGNHXV85"
  };
  const fire = firebase.initializeApp(config);
  export default fire;