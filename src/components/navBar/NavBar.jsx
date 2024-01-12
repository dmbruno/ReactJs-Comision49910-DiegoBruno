

import { useContext } from 'react';
import { Carwidget } from './Carwidget';


import { NavLink } from "react-router-dom";
import { UserContext } from '../../Context/userContext';


export const NavBar = () => {
    const { user } = useContext(UserContext)

    return (
        <div className="flex items-center justify-between gap-5 bg-transparent border-b-2">
            <div>
                <img src="./LogoOso.svg" alt="logo del oso, aveces sale y aveces no" />
            </div>
            <ul className=" flex gap-5">
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        `flex space-x-4 sm:text-2xl hover:text-yellow-800 ${isActive ? "text-orange-600 font-bold" : "text-black font-bold"}`
                    }>Inicio
                </NavLink>
                <NavLink
                    to={"/Menu"}
                    className={({ isActive }) =>
                        `flex space-x-4 sm:text-2xl hover:text-yellow-800 ${isActive ? "text-orange-600 font-bold" : "text-black font-bold"}`
                    }>Menu del Oso
                </NavLink>
                {
                    user.email === "dmbruno61@gmail.com" && (
                        <NavLink
                            to={"/checkoutadmin"}
                            className={({ isActive }) =>
                                `flex space-x-4 sm:text-2xl hover:text-yellow-800 ${isActive ? "text-orange-600 font-bold" : "text-black font-bold"}`
                            }>Panel Admin
                        </NavLink>
                    )
                }

            </ul>
            <div className="cursor-pointer text-[25px] pr-3">
                <Carwidget />
            </div>
        </div>

    )
}
