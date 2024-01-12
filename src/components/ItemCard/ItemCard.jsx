import { Link } from "react-router-dom"
import { BotonAtras } from "../botones/BotonAtras"




export const ItemCard = ({ item }) => {
    return (
        
        <article className="w-full sm:w-[150px] border rounded-xl overflow-hidden shadow-lg mb-4 sm:items-stretch xl:w-[300px] bg-slate-300">
            <h3 className="font-bold text-xl mb-2 text-center mt-2 sm:text-xs">{item.name}</h3>
            <div className="flex-grow">
                <img className="object-contain h-32 w-full" src={item.img} alt="foto de plato" />
            </div>
            <div className="m-4">
                <hr className="border-t" />
            </div>
            <div className="flex justify-between m-1">
                <button className="border bg-slate-500 hover:bg-yellow-800 text-black font-bold py-2 px-4 rounded sm:text-xs">
                    <Link to={`/item/${item.id}`}> ¡Ver Mas! </Link>
                </button>
                <BotonAtras />
            </div>
        </article>
    )
}

export default ItemCard