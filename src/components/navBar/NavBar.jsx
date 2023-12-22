

import { Carwidget } from './Carwidget';
import './NavBar.css'

import { NavLink } from "react-router-dom";


export const NavBar = () => {

    return (
        <header className="header">
            <div className="container m-auto py-6 flex justify-between items-center">
                <div className="contenedor-logo">
                    <img src="./LogoOso.svg" alt="logo del oso, aveces sale y aveces no" />
                </div>
                <ul className="flex gap-11">
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            `text-lg hover:text-black font-bold font-mono cursor-pointer ${isActive ? "text-yellow-300" : "text-white "}`
                        }>Inicio
                    </NavLink>

                    <NavLink
                        to={"/Menu"}
                        className={({ isActive }) =>
                            `text-lg hover:text-black font-bold font-mono cursor-pointer ${isActive ? "text-yellow-300" : "text-white "}`
                        }>Menu del Oso
                    </NavLink>

                </ul>
                <div className="contenedor-icono cursor-pointer">
                    <Carwidget />
                </div>
            </div>
        </header>
    )
}
