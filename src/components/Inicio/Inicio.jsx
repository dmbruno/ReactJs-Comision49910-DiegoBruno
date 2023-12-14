import "./inicio.css"
import { Link } from "react-router-dom"



export const Inicio = ({item}) => {

    return (
        <div className="bg-yellow-800">
            <h1 className="text-4xl font-bold text-center text-white bg-gray-800 py-4 tex">BIENVENIDOS A LA CUEVA</h1>
            <div className="contenedor">
                <Link to={"/menu/pizzas"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Pizzas</Link>
                <Link to={"/menu/tablas"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Tablas</Link>
                <Link to={"/menu/paraPicar"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Para picar</Link>
                <Link to={"/menu/burguers"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Burguers</Link>
                <Link to={"/menu/ensaladas"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Ensaladas</Link>
                <Link to={"/menu/postres"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Postres</Link>
                <Link to={"/menu/clasicosYRicos"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Clasicos y Ricos</Link>
                <Link to={"/menu/wines"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Wines</Link>
                <Link to={"/menu/mocktails"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Mocktails sin alcohol</Link>
                <Link to={"/menu/whiskys"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Whiskys & boubrbon</Link>
                <Link to={"/menu/champagne"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Champagne y Espumantes</Link>
                <Link to={"/menu/cervezas"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Cervezas</Link>
                <Link to={"/menu/bebidasSinAlcohol"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Bebidas sin Alcohol</Link>
                <Link to={"/menu/clasicos"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Clasicos de Oso</Link>
                <Link to={"/menu/vodka"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Vodka</Link>
                <Link to={"/menu/ron"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Ron</Link>
                <Link to={"/menu/ginPremium"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Gin Premium</Link>
                <Link to={"/menu/coctelesDeAutor"} className="bg-yellow-200 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow font-extrabold text-lg">Cócteles de Autor</Link>
            </div>
        </div>
    )
}
