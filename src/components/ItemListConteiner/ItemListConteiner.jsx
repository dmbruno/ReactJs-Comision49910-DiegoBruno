
import './ItemListConteiner.css'
import Item from '../Item/Item'



export const ItemListConteiner = () => {
    return (
        <section className="flex flex-row justify-around">
            <Item nombre="pollo" description="pollo al horno con papas" precio="$2550" />
            <Item nombre="Bife a punto" description="a caballo con papas fritas" precio="$3550" />
            <Item nombre="Wrap de pollo" description="wrap de pollo con queso" precio="$2600" />
            <Item nombre="Mila Napo" description="Milanesa Napolitana" precio="$2900" /> 
        </section>
    )
}
