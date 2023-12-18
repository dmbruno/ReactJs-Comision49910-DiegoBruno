

import './estilosItem.css'
import { ItemCard } from "../ItemCard/ItemCard";

const Item = ({ productos }) => {

    return (
        <section className="container-prod">
            {productos.map((item) => (
                <ItemCard key={item.id} item={item}/>
            ))}
        </section>
    );
};
export default Item



