import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null
    })
    console.log(user);

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    const logout = () =>{
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser({
                    email: user.email,
                    uid: user.uid,
                    logged: true
                })
            } else {
                setUser({
                    email: null,
                    logged: false,
                    uid: null
                })
            }
        })
    }, [])



    return (
        <UserContext.Provider value={{
            user,
            login,
            googleLogin,
            register,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}
