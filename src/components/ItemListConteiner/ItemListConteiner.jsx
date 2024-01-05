
import Item from '../Item/Item'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

export const ItemListConteiner = () => {


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        
        const productosRef = collection(db, 'productos') // se arma la referencia a la base de datos de firebase y a la coleccion que tengo hecha, en este caso "productos"
        
            const q = categoryId 
                        ? query(productosRef, where('category', '==', categoryId)) //si hay categoria id entonces la base de datos filta y trae lo necesario
                        : productosRef //en caso de que no haya coincidencia con la categoria, entonces muestra todos los productos, el caso de inicio
            getDocs(q) //el llamado a getDocs lo hago a la variable donde se encuentra alojado el filtrado de categorias y con esa data ....
                .then((querySnapshot) => {
                    const docs = querySnapshot.docs.map(doc => { //con la resolucion de la promesa, se mapea para que a c/u se copie con el spread ... toda la data + el ID
                        return {
                            ...doc.data(),
                            id: doc.id
                        }
                    }) 
                    setProductos(docs) // y se setea Productos con el nuevo valor de docs para su renderizado
                })
                .finally(() => setLoading(false))
        

    }, [categoryId])


    return (
        <>
            <h3 className='font-extrabold font-mono text-4xl py-4 text-center'>Menu del Oso</h3>
            <div className="grid grid-cols-1 xl:">
                {
                    loading
                        ? <Loader />
                        : <Item productos={productos} />
                }
            </div>
        </>
    )
}
