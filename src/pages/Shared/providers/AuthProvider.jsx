// import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase/firebase.config";

export const AuthContext = createContext(null)

// const auth = getAuth();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    // get user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in the state changed', currentUser)
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const login = (email, passwrod) =>{
        signInWithEmailAndPassword(auth, email, passwrod)
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
        return(signInWithEmailAndPassword)
    }

    // logout
    const logOut = () => {
        return signOut(auth)

    }


    const authInfo = {
        user,
        createUser,
        logOut,
        login
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;