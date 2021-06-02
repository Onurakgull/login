import firebase from "firebase";

const config={
    apiKey:"AIzaSyCPnELti8-p0hsxlztfH8RVElGqE0SWYhI",
    authDomain:"fir-login-dce0c.firebaseapp.com" ,
    projectId:"fir-login-dce0c",
    storageBucket: "fir-login-dce0c.appspot.com",
    messagingSenderId:"1000471157545",
    appId:"1:1000471157545:web:798ec1236ab06f0ffeb538" ,
};

const fire = firebase.initializeApp(config)
export default fire