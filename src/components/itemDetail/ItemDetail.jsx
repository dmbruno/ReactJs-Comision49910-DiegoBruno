
import { Counter } from "../counter/counter"

const ItemDetail = ({ item }) => {

    return (
        <>
            <div className="bg-white shadow-lg rounded-lg m-auto mt-8">
                <div className="py-5 px-5 contenedor-detalle container m-auto mt-8">
                    <h3 className="text-2xl font-semibold py-5 px-5">{item.name}</h3>
                    <hr />
                    <div className="flex w-60 h-60 py-5 px-5 gap-6">
                        <img src={item.img} alt={item.name} />
                        <div className="w-screen whitespace-normal">
                            <p className="w-screen py-5 px-5"> ¿Que tiene? : <hr className="mt-2 w-0"/>{item.description}</p>
                            <p className="text-xl font-bold py-5 px-5 pt-16"> Precio: ${item.price}</p>
                        </div>
                    </div>
                    <div className='py-5 px-5'>
                        <button className="bg-yellow-700 rounded py-2 px-4">Agregar al carrito</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ItemDetail;









