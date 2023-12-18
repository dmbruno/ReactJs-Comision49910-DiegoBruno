import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import { useParams } from "react-router-dom"
import  ItemDetail from "../itemDetail/ItemDetail"



export const ItemDetailConteiner = () => {

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()
    

    useEffect(() => {

        setLoading(true)
        pedirDatos()
            .then((data) => {
                setItem(data.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => setLoading(false));
    }, [])

    return (
        <>
            {
                loading
                    ? <h2 className='text-center text-4xl m-4'>Cargando...</h2>
                    : <ItemDetail item={item} />
            }
        </>
    )
}

