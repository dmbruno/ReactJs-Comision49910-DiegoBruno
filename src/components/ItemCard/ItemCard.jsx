


import { Link } from "react-router-dom"

import './ItemCard.css'



export const ItemCard = ({ item }) => {
    return (
        
            <div className="contenedor-card rounded bg-yellow-700 h-auto">
                <article className="container-article flex flex-col items-center">
                    <div className="portada flex-1">
                        <img className="img rounded" src={item.img} alt="foto de plato" />
                    </div>
                    <div className="contenedor-info flex-1 relative">
                        <h3 className="font-extrabold text-center mt-9 font-serif text-3xl">{item.name}</h3>
                        <div className="container-texto">
                            <hr className="m-10" />
                            <p className="text-gray-300 font-bold font-mono text-center mt-3">Que tiene? : {item.description}</p>
                        </div>
                    </div>
                    <button className="bg-yellow-200 rounded py-2 px-16 font-mono text-black mt-10 shadow-black">
                        <Link to={`/item/${item.id}`}>Ver Mas</Link>
                    </button>
                </article>
            </div>
        
    )
}

export default ItemCard