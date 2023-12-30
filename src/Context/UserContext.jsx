import { createContext, useState } from "react";



export const userContext = createContext()

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        email: "dmbruno61@gmail.commmm",
        toke: "1234"
    })
    return(
        <userContext.Provider value={{user}}>
            {children}
        </userContext.Provider>
    )
}