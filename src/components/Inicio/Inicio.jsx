import { Banner } from "./Banner"
import "./inicio.css"
import { Link } from "react-router-dom"


export const Inicio = () => {

    return (
        <div className="bg-slate-200">
            <h1 className="font-mono text-center p-5">BIENVENIDOS A LA CUEVA</h1>
            <div className="flex gap-3 sm:gap-7">
                <div className="w-1/2 gap-1 grid grid-cols-1 mb-3 sm:w-1/3">
                    <Link to={"/menu/pizzas"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Pizzas</Link>
                    <Link to={"/menu/tablas"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Tablas</Link>
                    <Link to={"/menu/parapicar"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Para Picar</Link>
                    <Link to={"/menu/burguers"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Burguers</Link>
                    <Link to={"/menu/ensaladas"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Ensaladas</Link>
                    <Link to={"/menu/postres"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Postres</Link>
                    <Link to={"/menu/clasicosYRicos"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Clasicos y Ricos</Link>
                    <Link to={"/menu/wines"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Wines</Link>
                    <Link to={"/menu/mocktails"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Mocktails sin alcohol</Link>
                    <Link to={"/menu/whiskys"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Whiskys & boubrbon</Link>
                    <Link to={"/menu/champagneEspumantes"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Espumantes</Link>
                    <Link to={"/menu/cervezas"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Cervezas</Link>
                    <Link to={"/menu/bebidasSinAlcohol"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Bebidas sin Alcohol</Link>
                    <Link to={"/menu/clasicos"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Clasicos de Oso</Link>
                    <Link to={"/menu/vodka"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Vodka</Link>
                    <Link to={"/menu/ron"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Ron</Link>
                    <Link to={"/menu/ginPremium"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Gin Premium</Link>
                    <Link to={"/menu/coctelesDeAutor"} className="p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 h-5 sm:p-6 sm:text-[13px]">Cócteles de Autor</Link>
                </div>
                <Banner/>
            </div>
        </div>
    )
}
