import { useContext, useEffect, useState } from "react";
import { db } from "../../firebase/config"; // Asegúrate de importar tu instancia de Firestore
import { collection, getDocs } from "firebase/firestore";
import { CartContext } from "../../Context/CartContext";


export const CheckOutAdmin = () => {

    const { clearCart } = useContext(CartContext)
    const [data, setData] = useState([])

    const [barra, setBarra] = useState([])
    const [cocina, setCocina] = useState([])


    useEffect(() => {
        const fetchData = async () => {

            const ordenRef = collection(db, "orders"); 
            const snapshot = await getDocs(ordenRef);
            const data = snapshot.docs.flatMap(doc => doc.data().items);

            setData(data)
            
            const barraItems = data.filter(item => item.sector === "barra");
            const cocinaItems = data.filter(item => item.sector === "cocina");

            setBarra(barraItems)
            setCocina(cocinaItems)
            clearCart();

        };

        fetchData();
    }, []);







return (
    <div>
        <h2 className="text-4xl text-center p-5 font-semibold">Panel de Administrador</h2>
        
        <div className="p-5 bg-yellow-300 mb-3">
            <div className="flex flex-wrap bg-white border rounded-lg">
                <div className="w-1/2 p-4">
                    <h2 className="font-bold mb-2 text-center text-2xl">Pedidos de Cocina</h2>
                    <hr className="mb-3"/>
                    {data.filter(item => item.sector === 'cocina').map((item) => (
                        <div className="grid grid-cols-[4fr,1fr,1fr,1fr] gap-4">
                            <h2 className=""> Pedido: <strong>{item.name}</strong></h2>
                            <p className="text-center">C: {item.cantidad}</p>
                            <h2 className="text-left">TOTAL:$ {item.cantidad * item.price}</h2>
                            <p className="text-center">MESA QR</p>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2 p-4 border-l md:border-t-0 md:border-l">
                    <h2 className="font-bold mb-2 text-center text-2xl">Pedidos de Barra</h2>
                    <hr className="mb-3"/>
                    {data.filter(item => item.sector === 'barra').map((item) => (
                        <div className="grid grid-cols-[4fr,1fr,1fr,1fr] gap-4">
                            <h2>Pedido: <strong>{item.name}</strong></h2>
                            <h2 className="text-center">C: {item.cantidad}</h2>
                            <h2 className="text-left">TOTAL:$ {item.cantidad * item.price}</h2>
                            <h2 className="text-center">MESA QR</h2> {/* traerme la validacion del qr de cada mesa */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)

    

};
// Con un boton como componente externo, adicionado a cada linea, para que 
// puedan apretar como "listo" y que esa orden para el total a la CAJA y la orden se
// borre de la coleccion "orders" de la base de datos de firebase
// a su vez guardar los emails de los usuarios en otra coleccion de la base de datos
// para armar base de datos para el local 