

import { TfiShoppingCart } from "react-icons/tfi";


export const NavBar = () => {
    return (
        <header className="bg-yellow-900 ">
            <div className="container m-auto py-6 flex justify-between items-center">
                <img src="./LogoOso.svg" alt="logo" />
                <ul className="flex gap-11">
                    <li className="text-white text-lg hover:text-black font-bold">Login</li>
                    <li className="text-white text-lg hover:text-black font-bold">Menu del OSO</li>
                    <li className="text-white text-lg hover:text-black font-bold">Pedir Cuenta</li>
                </ul>
                <TfiShoppingCart />
            </div>
        </header>
    )
}
