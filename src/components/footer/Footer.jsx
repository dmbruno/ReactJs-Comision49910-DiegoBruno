import { useContext } from "react"
import { UserContext } from "../../Context/userContext"


export const Footer = () => {

    const { logout, user } = useContext(UserContext)

    return (
        <div className="m-auto bg-amber-500 flex felx-col justify-center h-40 items-center gap-8">
            <div className="flex flex-col m-7 gap-4">
                {
                    user.logged && <>
                        <h2 className="text-2xl font-bold">Bienvenido {user.email}</h2>
                        <button className="py-2 px-6 bg-black text-white rounded" onClick={logout}>Cerrar Sesion</button>
                    </>
                }
            </div>
            <div className="flex flex-row">
                <h3 className="text-white font-extrabold flex items-center hover:text-purple-400 m-4 cursor-pointer sm:text-2xl">Quienes Somos</h3>
                <h3 className="text-white font-extrabold flex items-center hover:text-purple-400 m-4 cursor-pointer sm:text-2xl">Contactanos</h3>
            </div>
        </div>
    )
}
