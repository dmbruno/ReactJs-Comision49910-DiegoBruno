
import './ItemListConteiner.css'
import Item from '../Item/Item'
import { pedirDatos } from '../../utils/utils'
import { useState, useEffect } from 'react'



export const ItemListConteiner = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((data) => {
                setProductos(data)
                setLoading(false)
            })
    },[])

console.log(productos);
    return (
        <>
        <h3 className='font-extrabold text-center m-4 font-mono text-4xl'>Menu del Oso</h3>
            <hr  className='m-7'/>
        {
            loading 
            ? <h2 className='text-center text-4xl'>Cargando...</h2>
            :<Item productos={productos} />
        }
            
        </>
    )
}
