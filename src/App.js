import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyD1ItTHmMo05yKMWwjjspwTJcgp8HGXAkQ",
  authDomain: "react-app-9fdb0.firebaseapp.com",
  projectId: "react-app-9fdb0",
  storageBucket: "react-app-9fdb0.appspot.com",
  messagingSenderId: "1061465774363",
  appId: "1:1061465774363:web:60b31240e2c5feb34f5bbe",
  measurementId: "G-TQL38FELLD"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">Test</header>
    </div>
  );
}

export default App;
