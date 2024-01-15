import { useContext } from "react"
import { UserContext } from "../../Context/userContext"


export const Footer = () => {

    const { logout, user } = useContext(UserContext)

    return (
        <div className="m-auto flex felx-col justify-center h-40 items-center border-t-2">
            <div className="flex flex-col m-7 gap-2">
                {
                    user.logged && <>
                        <h2 className="font-bold">{user.email}</h2>
                        <button className="py-2 px-6 bg-black text-white rounded font-bold hover:text-yellow-800" onClick={logout}>Cerrar Sesion</button>
                    </>
                }
            </div>
            <div className="flex flex-row">
                <h3 className="text-black font-bold flex items-center hover:text-yellow-800 m-4 cursor-pointer sm:text-2xl">Quienes Somos</h3>
                <h3 className="text-black font-bold flex items-center hover:text-yellow-800 m-4 cursor-pointer sm:text-2xl">Contactanos</h3>
            </div>
        </div>
    )
}
