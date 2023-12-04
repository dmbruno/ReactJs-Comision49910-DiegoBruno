
import './ItemListConteiner.css'
import Item from '../Item/Item'
import { pedirDatos } from '../../utils/utils'
import { useState, useEffect } from 'react'



export const ItemListConteiner = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((data) => {
                setProductos(data)
            })
    },[])

console.log(productos);
    return (
        <>
            <h3 className='font-extrabold text-center m-4 font-mono text-4xl'>Menu del Oso</h3>
            <hr  className='m-7'/>
            <Item productos={productos} />
        </>
    )
}
