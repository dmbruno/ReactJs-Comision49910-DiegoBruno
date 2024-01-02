import { useState } from "react";
import { createContext } from "react";




export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        email:"dmbruno61@gmail.com",
        token: "1234"
    })
    return(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}




