import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import trashIcon from "../../assets/trashIcon.svg"
import { UserContext } from "../../Context/userContext"
import { Link } from "react-router-dom"




export const CartView = () => {

    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)
    const { user } = useContext(UserContext)


    return (

        <section className="m-auto mt-8 bg-slate-200 rounded">
            <p className="font-mono text-center sm:text-2xl text-orange-900">Bienvenido {user.email}</p>
            <h2 className="text-2xl font-mono py-6 sm:text-4xl">Tu Pedido</h2>
            <hr />

            <ul>
                {
                    cart.map((item) => (
                        <li key={item.id} className="flex gap-5 py-5">
                            <div className="container w-48 h-48 xl:w-1/4 xl:h-1/2">
                                <img src={item.img} alt="imagen de compra" className="object-fill w-full h-full xl:w-1/1" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold sm:text-2xl sm:font-bold mb-3 text-orange-700 xl:text-[40px]">{item.name}</h3>
                                <strong><p className="mb-3 xl:text-3xl">$ {item.price} x unidad</p></strong>
                                <p className="xl:text-3xl xl:mb-4">Cantidad: {item.cantidad}</p>
                                <p className="mb-3 xl:text-3xl">TOTAL: $ {item.price * item.cantidad}</p>
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
            <button className="flex justify-center text-white rounded hover:bg-slate-600 py-1 px-3 bg-slate-500 my-3 font-bold" onClick={clearCart}>Vaciar Carrito</button>
            <button className="mb-2">
                                <Link to="/Checkout" className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mb-2 md:w-full">
                                    Terminar compra
                                </Link>
            </button>
        </section>

    )
}
