import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';
export const AuthContext=createContext(null)
const AuthProbider = ({children}) => {
     const auth=getAuth(app)
     const provider = new GoogleAuthProvider();
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    const login=()=>{
        setLoading(true);
       return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const authInfo={
        user,
        login,
        loading,
        logOut
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
           if (currentUser) {
              axios.post('https://lazy-cyan-donkey-veil.cyclic.app/jwt',{email:currentUser.email})
              .then(data =>{
                // console.log(data.data.token)
                localStorage.setItem('access-token', data.data.token)
                setLoading(false);
            })
           }
           else{
            localStorage.removeItem('access-token')
        }
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProbider;