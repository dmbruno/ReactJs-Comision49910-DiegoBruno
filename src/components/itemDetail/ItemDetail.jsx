import { useContext, useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { CartContext } from "../../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";



const ItemDetail = ({ item }) => {
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    const handleAtras = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad,
        }
        addToCart(itemToCart)
    }



    return (
        <>
            <div className="flex flex-col items-center sshadow-md rounded-lg p-4 bg-slate-300">
                <button className="mb-4 py-1 px-4 border-dashed border-2 border-indigo-600 rounded-lg hover:bg-yellow-700" onClick={handleAtras}>Atras</button>
                <h3 className="font-bold text-lg mb-2 lg:text-4xl">{item.name}</h3>
                <hr className="border-gray-200 w-full mb-4" />
                <div className="w-full sm:flex">
                    <img className="object-contain h-48 w-full mb-4" src={item.img} alt={item.name} />
                    <div className="px-4 lg:w-full">
                        <div>
                            <p className="text-gray-700 mb-2"> Descripcion: {item.description} </p>
                            <p className="text-gray-700 mb-2 font-bold"> Precio: ${item.price}</p>
                        </div>
                        {
                            isInCart(item.id)
                                ? <Link to="/cart" className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mb-2">
                                    Terminar mi compra
                                </Link>
                                : <>
                                    <QuantitySelector
                                        cantidad={cantidad}
                                        setCantidad={setCantidad}
                                    />
                                    <button
                                        className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mb-2"
                                        onClick={handleAgregar}>
                                        Agregar al carrito
                                    </button>
                                    
                                </>
                        }
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default ItemDetail;









