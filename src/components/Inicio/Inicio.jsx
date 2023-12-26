import "./inicio.css"
import { Link } from "react-router-dom"



export const Inicio = () => {

    return (
        <div className="px-5 bg-slate-200">
            <h1 className="font-mono text-center p-5">BIENVENIDOS A LA CUEVA</h1>
            <div className="flex gap-8">
                <div className="w-2/3 gap-4 grid grid-cols-2 mb-3">
                    <Link to={"/menu/pizzas"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Pizzas</Link>
                    <Link to={"/menu/tablas"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Tablas</Link>
                    <Link to={"/menu/parapicar"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Picar</Link>
                    <Link to={"/menu/burguers"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Burguers</Link>
                    <Link to={"/menu/ensaladas"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Ensaladas</Link>
                    <Link to={"/menu/postres"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Postres</Link>
                    <Link to={"/menu/clasicosYRicos"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Clasicos y Ricos</Link>
                    <Link to={"/menu/wines"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Wines</Link>
                    <Link to={"/menu/mocktails"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Mocktails sin alcohol</Link>
                    <Link to={"/menu/whiskys"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Whiskys & boubrbon</Link>
                    <Link to={"/menu/champagneEspumantes"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Champagne y Espumantes</Link>
                    <Link to={"/menu/cervezas"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Cervezas</Link>
                    <Link to={"/menu/bebidasSinAlcohol"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Bebidas sin Alcohol</Link>
                    <Link to={"/menu/clasicos"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Clasicos de Oso</Link>
                    <Link to={"/menu/vodka"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Vodka</Link>
                    <Link to={"/menu/ron"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Ron</Link>
                    <Link to={"/menu/ginPremium"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Gin Premium</Link>
                    <Link to={"/menu/coctelesDeAutor"} className="p-6 col-span-1 px-2 bg-white font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 h-5">Cócteles de Autor</Link>
                </div>
                <div className="bg-red-700 mb-3">
                    <img src="" alt="imagen de fondo" />
                </div>
            </div>
        </div>
    )
}
