import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
    apiKey: "AIzaSyAmmgOq2DFOL3OLctx_vCYpnA8_aB-bPIU",
    authDomain: "react-redux-app-b04fa.firebaseapp.com",
    databaseURL: "https://react-redux-app-b04fa.firebaseio.com",
    projectId: "react-redux-app-b04fa",
    storageBucket: "react-redux-app-b04fa.appspot.com",
    messagingSenderId: "1074954781159",
};
// const prodConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };

const devConfig = {
    apiKey: "AIzaSyAmmgOq2DFOL3OLctx_vCYpnA8_aB-bPIU",
    authDomain: "react-redux-b04fa.firebaseapp.com",
    databaseURL: "https://react-redux-b04fa.firebaseio.com",
    projectId: "react-redux-b04fa",
    storageBucket: "react-redux-b04fa.appspot.com",
    messagingSenderId: "1074954781159"
};
// const devConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };
const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};
