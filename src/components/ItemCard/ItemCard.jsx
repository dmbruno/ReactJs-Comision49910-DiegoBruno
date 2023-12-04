
import { BtnClickMe } from "../botones/BtnClickMe"


export const ItemCard = ({item}) => {
    return (
        <div className="contenedor-card rounded bg-yellow-700">
            <article key={item.id}>
                <img src={item.img} alt="foto de plato" className="m-2" />
                <hr className="m-2" />
                <h3 className="font-bold text-center m-2">Plato: {item.name}</h3>
                <p className="text-gray-300 text-center m-2 mb-4 conteinerDesc">Descripcion: {item.description}</p>
                <hr className="m-2" />
                <p className=" font-extrabold m-2 text-right">Precio: ${item.price}</p>
                <BtnClickMe
                    onClick={() => { alert("Pedido enviado a cocina") }}
                    className="bg-slate-300 font-mono font-extrabold text-zinc-900 " texto="pedir plato" />
            </article>
        </div>
    )
}
