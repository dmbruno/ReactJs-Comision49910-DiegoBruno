import { createContext, useState } from "react";



export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: "dmbruno61@gmail.commmm",
        toke: "1234"
    })
    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}


//cambien las minusculas del userContext , lo tenia con mayusculas