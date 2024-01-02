import { Banner } from "./Banner"
import "./inicio.css"
import { Link } from "react-router-dom"


export const Inicio = () => {

    return (
        <div className="bg-amber-500">
            <h1 className="italic font-bold from-neutral-700 text-center p-5 sm:text-3xl lg:text-center lg:text-5xl">Menu del Oso</h1>
            <div className="flex gap-3 sm:gap-7">
                <div className="w-1/2 gap-1 grid grid-cols-1 mb-3 sm:w-1/3">
                    <Link to={"/menu/pizzas"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Pizzas</Link>
                    <Link to={"/menu/tablas"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Tablas</Link>
                    <Link to={"/menu/parapicar"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Para Picar</Link>
                    <Link to={"/menu/burguers"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Burguers</Link>
                    <Link to={"/menu/ensaladas"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Ensaladas</Link>
                    <Link to={"/menu/postres"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Postres</Link>
                    <Link to={"/menu/clasicosYRicos"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Clasicos y Ricos</Link>
                    <Link to={"/menu/wines"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Wines</Link>
                    <Link to={"/menu/mocktails"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Mocktails sin alcohol</Link>
                    <Link to={"/menu/whiskys"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Whiskys & boubrbon</Link>
                    <Link to={"/menu/champagneEspumantes"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Espumantes</Link>
                    <Link to={"/menu/cervezas"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Cervezas</Link>
                    <Link to={"/menu/bebidasSinAlcohol"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Bebidas sin Alcohol</Link>
                    <Link to={"/menu/clasicos"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Clasicos de Oso</Link>
                    <Link to={"/menu/vodka"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Vodka</Link>
                    <Link to={"/menu/ron"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Ron</Link>
                    <Link to={"/menu/ginPremium"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Gin Premium</Link>
                    <Link to={"/menu/coctelesDeAutor"} className="rounded-r-lg p-3 col-span-1 px-2 bg-white font-bold text-[11px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[13px]">Cócteles de Autor</Link>
                </div>
                <Banner/>
            </div>
        </div>
    )
}
