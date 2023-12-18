
import './ItemListConteiner.css'
import Item from '../Item/Item'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../utils/utils'


export const ItemListConteiner = () => {


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((data) => {
                const items = categoryId
                    ? data.filter(prod => prod.category === categoryId)
                    : data
                setProductos(items)

            })
            .finally(() => setLoading(false));

    }, [categoryId])


    return (
        <>
            <div className="contenedor-cartas">
                <h3 className='font-extrabold text-center font-mono text-4xl py-4'>Menu del Oso</h3>
                <hr className='m-7' />

                {
                    loading
                        ? <h2 className='text-center text-4xl m-4'>Cargando...</h2>
                        : <Item productos={productos} />
                }
            </div>
        </>
    )
}
