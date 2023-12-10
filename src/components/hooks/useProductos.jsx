
import { useEffect, useState } from "react" // necesitamos los hooks de useEffect y useEstate 
import { pedirDatos } from "../../utils/utils" //se importa la funcion de pedirDatos

export const useProductos = () => { // el hook se escribe con la primera minuscula para que react sepa que es un hook

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((data) => {
                setProductos(data)
                setLoading(false)
            })
    }, [])

    return { //en vez de un componente, este hook retorna el valor resultante de la logica arriba, y pone
             // a disposicion el resultado de esas variables cuando las necesitamos

        productos,
        loading
    }

}

export default useProductos //se exporta el hook completo, que en definitiva adentro trae el resultado de las variables en
// este caso de productos y loading