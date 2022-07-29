import {createContext, useContext, useEffect, useRef, useState} from "react";
import React from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    confirmPasswordReset,
} from 'firebase/auth'
import {auth} from "../firebase/firebase";


const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    sign_in: () => Promise,
    logout: () => Promise,
    isLogin : false,
    setIsLogin : ()=>{},
    signInWithGoogle : ()=> Promise,
})

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({children}) {

    const [currentUser, setCurrentUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user =>{
            setCurrentUser(user ? user : null)
        })

        return () => {
            unsubscribe();
        };
    }, []);


    useEffect(() => {
        console.log('The user is', currentUser)
    }, [currentUser])

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const sign_in = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth,provider);
    }

    const value = {
        currentUser,
        register,
        sign_in,
        logout,
        isLogin,
        setIsLogin,
        signInWithGoogle,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    );
}

