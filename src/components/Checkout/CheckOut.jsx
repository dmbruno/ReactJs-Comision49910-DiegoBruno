import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"
import Swal from 'sweetalert2'
import { UserContext } from "../../Context/userContext";





export const CheckOut = () => {


    const { cart, totalCart, clearCart } = useContext(CartContext) //me traigo estas funciones del contexto para usarlas
    const { user } = useContext(UserContext)

    const [values, setValues] = useState({ //se agrupan los values del formulario
        nombre: "",
        email: user.email,
    });

    const [orderId, setOrderId] = useState("") //creo este hook para tneer el orderId y condicionar a partir de esto

    const handleInputChange = (e) => { // cuando cambia el input, esta funcion determina cual de los inputs se esta cambiando
        // y se cambia solo ese valor

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => { // con esto se maneja el evento del submit del formulario, creando la orden ....
        e.preventDefault()
        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date(),
        }


        //se crea la referencia hacia donde queremos que agregue la orden el metodo addDoc
        const ordersRef = collection(db, "orders") // se crea referencia donde se va a "agregar esta orden" coleccion ORDERS
        addDoc(ordersRef, orden).then((doc) => { // este metodo recibe 2 parametros, la referencia y la orden a agregar
            setOrderId(doc.id) //se la setea con el valor del ID
            clearCart(); //usamos la funcion del contexto que nos trajimos para vaciar el carrito
            Swal.fire("Pedido Enviado") // alerta de pedido confirmado

        });
        

    }

    if (orderId) { // este es un early return que si existe la orden entonces se muestra lo sigueinte (se puede hacer en otro componente)
        return (
            <>
                <div className="container m-auto mt-10 mb-5 p-7 bg-slate-200">
                    <h2 className="text-3xl font-bold">Gracias por tu compra</h2>
                    <hr />
                    <p>pedido confirmado:{orderId}</p>
                    
                </div>
            </>
        );

    }


    // y sino hay orderID entonces se renderiza el formulario para completar datos 

    return (

        <div>
            <div className="container m-auto mt-10 mb-5">
                <h2 className="text-3xl font-semibold">Envia tu Pedido</h2>
                <hr />
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 max-w-md">
                    <input
                        className="border p-2"
                        type="text"
                        placeholder="Nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                        name="nombre"
                    />

                    <input
                        className="border p-2"
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"

                    />
                    <button type="submit" className="bg-yellow-500 text-white py-1 font-semibold text-center">
                        Confirmar Pedido
                    </button>
                </form>
            
            </div>
        </div>
    )
}


