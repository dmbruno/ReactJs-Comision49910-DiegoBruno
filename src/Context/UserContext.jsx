import { createContext, useState } from "react";



export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        email: "dmbruno61@gmail.com",
        toke: "1234"
    })
    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}