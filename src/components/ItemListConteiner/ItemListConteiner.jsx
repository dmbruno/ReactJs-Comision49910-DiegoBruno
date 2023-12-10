
import './ItemListConteiner.css'
import Item from '../Item/Item'
import useProductos from '../hooks/useProductos' //import para utilizar el hook



export const ItemListConteiner = () => {

    const { productos, loading } = useProductos() // desestructuracion del hook con las propriedades que necesito en el return


    return (
        <>
            <h3 className='font-extrabold text-center m-4 font-mono text-4xl'>Menu del Oso</h3>
            <hr className='m-7' />

            {
                loading
                    ? <h2 className='text-center text-4xl m-4'>Cargando...</h2>
                    : <Item productos={productos} />
            }

        </>
    )
}
