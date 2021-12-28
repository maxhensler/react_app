import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
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

const [user] = useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <section>{user ? <ChatRoom/> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInwithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;
