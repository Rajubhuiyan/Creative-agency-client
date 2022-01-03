import { useEffect, useState } from 'react';
import firebaseInitialize from '../Pages/Login/Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getIdToken, signOut } from "firebase/auth";


firebaseInitialize();

const useFirebase = () => {

    const [loginUser, setLoginUser] = useState({});
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');
    const [authError, SetAuthError] = useState('');

    const auth = getAuth();

    
    const handleGoogleSignIn = (location, navigate) => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                SetAuthError('');
                setLoginUser({displayName: user.displayName, email: user.email, photoURL: user.photoURL});
                const destination = location?.state?.from || '/';
                navigate(destination);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                SetAuthError(error.message);
            });
    };



    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, (user) => {

            if (user) {
                const displayName= user.displayName;
                const email = user.email;
                const img = user.photoURL;
                setUser({displayName, email, img});
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [auth]);


    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser(null);
            setToken(null);
        }).catch((error) => {
            // An error happened.
        });
    }


    return {
        handleGoogleSignIn,
        handleSignOut,
        user,
        token,
        authError
    }
};

export default useFirebase;