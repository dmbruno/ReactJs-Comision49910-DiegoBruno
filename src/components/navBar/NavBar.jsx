

import { TfiShoppingCart } from "react-icons/tfi";
import './NavBar.css'
import { Link } from "react-router-dom";



export const NavBar = () => {

    return (
        <header className="bg-yellow-900 ">
            <div className="container m-auto py-6 flex justify-between items-center">
                <div className="contenedor-logo">
                    <img src="./LogoOso.svg" alt="logo" />
                </div>
                <ul className="flex gap-11">
                    <Link to={"/"}  className="text-white text-lg hover:text-black font-bold font-mono cursor-pointer">Inicio</Link>
                    <Link to={"/Menu"}className="text-white text-lg hover:text-black font-bold font-mono cursor-pointer">Menu del Oso</Link>
                    
                </ul>
                <div className="contenedor-icono cursor-pointer">
                    <TfiShoppingCart />
                </div>
            </div>
        </header>
    )
}
