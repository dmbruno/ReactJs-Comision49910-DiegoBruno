

import { TfiShoppingCart } from "react-icons/tfi";
import './NavBar.css'

export const NavBar = () => {
    return (
        <header className="bg-yellow-900 ">
            <div className="container m-auto py-6 flex justify-between items-center">
                <div className="contenedor-logo">
                    <img src="./LogoOso.svg" alt="logo" />
                </div>
                <ul className="flex gap-11">
                    <li className="text-white text-lg hover:text-black font-bold font-mono cursor-pointer">Login</li>
                    <li className="text-white text-lg hover:text-black font-bold font-mono cursor-pointer">Menu del Oso</li>
                    <li className="text-white text-lg hover:text-black font-bold font-mono cursor-pointer">Pedir Cuenta</li>
                </ul>
                <div className="contenedor-icono cursor-pointer">
                    <TfiShoppingCart/>
                </div>
            </div>
        </header>
    )
}
