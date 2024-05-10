// import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase/firebase.config";

export const AuthContext = createContext(null)

// const auth = getAuth();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);




    // loding manage
    const [loading, setLoading] = useState(true)


    // create user
    const createUser = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))

        return (createUserWithEmailAndPassword)
    }

    // login
    const login = (email, passwrod) => {
        signInWithEmailAndPassword(auth, email, passwrod)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
        setLoading(true);
        return (signInWithEmailAndPassword)
    }

    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    // get user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in the state changed', currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = {
        user,
        createUser,
        logOut,
        login,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;