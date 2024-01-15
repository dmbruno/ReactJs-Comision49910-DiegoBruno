
import { Banner } from "./Banner"
import { Link } from "react-router-dom"


export const Inicio = () => {
    

    return (
        <div>
            <h1 className="italic font-extrabold text-yellow-950 text-center p-5 sm:text-3xl lg:text-center lg:text-5xl">B i e n v e n i d o s</h1>
            <div className="flex gap-2 sm:gap-7">
                <div className="w-1/2 gap-1 grid grid-cols-1 mb-3 sm:w-1/3">
                    <Link to={"/menu/pizzas"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Pizzas</Link>
                    <Link to={"/menu/tablas"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Tablas</Link>
                    <Link to={"/menu/parapicar"} className="rounded-r-lg p-3 col-span-1 px- font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Para Picar</Link>
                    <Link to={"/menu/burguers"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Burguers</Link>
                    <Link to={"/menu/ensaladas"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Ensaladas</Link>
                    <Link to={"/menu/postres"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Postres</Link>
                    <Link to={"/menu/clasicosYRicos"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Clasicos y Ricos</Link>
                    <Link to={"/menu/wines"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Wines</Link>
                    <Link to={"/menu/mocktails"} className="rounded-r-lg p-3 col-span-1 px-2  font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Mocktails sin alcohol</Link>
                    <Link to={"/menu/whiskys"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Whiskys & boubrbon</Link>
                    <Link to={"/menu/champagneEspumantes"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Espumantes</Link>
                    <Link to={"/menu/cervezas"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Cervezas</Link>
                    <Link to={"/menu/bebidasSinAlcohol"} className="rounded-r-lg p-3 col-span-1 px-2  font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Bebidas sin Alcohol</Link>
                    <Link to={"/menu/clasicos"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Clasicos de Oso</Link>
                    <Link to={"/menu/vodka"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Vodka</Link>
                    <Link to={"/menu/ron"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Ron</Link>
                    <Link to={"/menu/gin"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Gin</Link>
                    <Link to={"/menu/ginPremium"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Gin Premium</Link>
                    <Link to={"/menu/coctelesDeAutor"} className="rounded-r-lg p-3 col-span-1 px-2 font-bold text-[12px] flex justify-center items-center hover:bg-gray-200 hover:text-[12px] h-5 sm:p-6 sm:text-[15px] xl:text-[25px] lg:hover:text-orange-600">Cócteles de Autor</Link>
                </div>
                <Banner />
            </div>
        </div>
    )
}
