import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Firebase/firebase.init";
import {  getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile, signInWithPopup} from "firebase/auth";
//initialize firebase app
initializeFirebase();

const useFirebase=()=>{
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // register//
    const registerUser = (email, password, name, history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('');
          const newUser = { email, displayName: name };
          setUser(newUser);
          // save user to the database
          saveUser(email, name, 'POST')
          //send name to firebase after creation 
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
  
          }).catch((error) => {
  
          });
          history.replace('/')
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }
// login user 

const loginUser = (email, password, location, history) => {
  setIsLoading(true);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.replace(destination);
      setAuthError('')
    })
    .catch((error) => {
      setAuthError(error.message);
    })
    .finally(() => setIsLoading(false));
}
//SignIn with google

const signInWithGoogle = (location, history) => {
  setIsLoading(true);
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      // save user to the database
      saveUser(user.email, user.displayName, 'PUT')
      const destination = location?.state?.from || '/';
      history.replace(destination);
      setAuthError('')
    }).catch((error) => {
      setAuthError(error.message);
    })
    .finally(() => setIsLoading(false));
}
//observ user preent 
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUser(user)
    } else {
      setUser({})
    }
    setIsLoading(false);
  });
  return () => unsubscribe;
}, [])
// sign out //
const logout = () => {
  signOut(auth).then(() => {

  }).catch((error) => {
  })
    .finally(() => setIsLoading(false));
}
// Save User Data to the database

const saveUser = (email, displayName, method) => {
  const user = { email, displayName };
  fetch(`http://localhost:5000/users`, {
    method: method,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
}
  // Check admin or not 
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data.admin)
      })

  }, [user.email])
    return{
      user,
      admin,
      isLoading,
      authError,
      registerUser,
      loginUser,
      signInWithGoogle,
      logout,
    }
}

export default useFirebase;