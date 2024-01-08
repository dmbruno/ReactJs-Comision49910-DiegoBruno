import { createContext, useState } from "react";
import { auth } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";

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

    const login = (values) => { 
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {

            const user = userCredential.user

            setUser({
                email: user.email,
                uid: user.uid,
                logged: true
            })
        })

    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user
                setUser({
                    email: user.email,
                    uid: user.uid,
                    logged: true
                })
            })
    }


    return (
        <UserContext.Provider value={{
            user,
            login,
            googleLogin,
            register
        }}>
            {children}
        </UserContext.Provider>
    )
}
