

import { Carwidget } from './Carwidget';
import './NavBar.css'

import { NavLink } from "react-router-dom";


export const NavBar = () => {

    return (
            <div className="flex items-center justify-between gap-5 bg-amber-500">
                <div>
                    <img src="./LogoOso.svg" alt="logo del oso, aveces sale y aveces no" />
                </div>
                <ul className=" flex gap-5">
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            `flex space-x-4 sm:text-2xl ${isActive ? "text-orange-600 font-bold" : "text-black font-bold"}`
                        }>Inicio
                    </NavLink>
                    <NavLink
                        to={"/Menu"}
                        className={({ isActive }) =>
                            `flex space-x-4 sm:text-2xl ${isActive ? "text-orange-600 font-bold" : "text-black font-bold"}`
                        }>Menu del Oso
                    </NavLink>
                </ul>
                <div className="cursor-pointer text-[16px] pr-3">
                    <Carwidget />
                </div>
            </div>
        
    )
}
