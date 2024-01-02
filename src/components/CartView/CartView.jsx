import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import trashIcon from "../../assets/trashIcon.svg"




export const CartView = () => {

    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)
    


    return (

        <section className="m-auto mt-8">
            <p className="font-mono text-center sm:text-2xl text-orange-900">Bienvenido {user.email}</p>
            <h2 className="text-2xl font-mono py-6 sm:text-4xl">Tu Pedido</h2>
            <hr />

            <ul>
                {
                    cart.map((item) => (
                        <li key={item.id} className="flex gap-5 py-5">
                            <div className=" container w-48 h-48"> 
                                <img src={item.img} alt="imagen de compra" className="object-fill w-full h-full" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold sm:text-2xl sm:font-bold mb-3 text-orange-700">{item.name}</h3>
                                <strong><p className="mb-3">$ {item.price} x unidad</p></strong>
                                <p>Cantidad: {item.cantidad}</p>
                                <p className="mb-3">TOTAL: $ {item.price * item.cantidad}</p>
                                <button onClick={() => removeItem(item.id)}>
                                    <img src={trashIcon} className="w-6 h-6 my-1" alt="trash Icon" />
                                </button>

                            </div>

                        </li>
                    ))
                }
            </ul>
            <hr />
            <h4 className="font-mono text-2xl sm:text-4xl">TOTAL: ${totalCart()}</h4>
            <button className="flex justify-center text-white rounded font-mono hover:bg-slate-600 py-1 px-3 bg-slate-500 my-3" texto="Vaciar Carrito" onClick={clearCart}>Vaciar Carrito</button>
        </section>

    )
}
