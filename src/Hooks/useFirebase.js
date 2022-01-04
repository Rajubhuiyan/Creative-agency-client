import { useEffect, useState } from 'react';
import firebaseInitialize from '../Pages/Login/Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getIdToken, signOut } from "firebase/auth";


firebaseInitialize();

const useFirebase = () => {

    const [loginUser, setLoginUser] = useState({});
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');
    const [authError, SetAuthError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

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
                setLoginUser({ displayName: user.displayName, email: user.email, photoURL: user.photoURL });
                saveUserToDb(user.displayName, user.email, user.photoURL)
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
                const displayName = user.displayName;
                const email = user.email;
                const img = user.photoURL;
                setUser({ displayName, email, img });
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
            setToken('');
        }).catch((error) => {
            // An error happened.
        });
    }

    const saveUserToDb = (name, userEmail, image) => {
        const displayName = name;
        const email = userEmail;
        const img = image;

        fetch(`https://creative-agency00.herokuapp.com/users?email=${userEmail}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ displayName: displayName, email: email, img: img })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    };




    
    
    useEffect(() => {
        fetch(`https://creative-agency00.herokuapp.com/isAdmin?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data?.isAdmin) {
                    setIsAdmin(true);
                }
            })
            .catch(err => console.error(err))
            .finally(() => {
            })
    }, [user?.email])





    return {
        handleGoogleSignIn,
        handleSignOut,
        user,
        token,
        authError,
        isAdmin
    }
};

export default useFirebase;