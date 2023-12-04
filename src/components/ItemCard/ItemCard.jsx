


import { BtnClickMe } from "../botones/BtnClickMe"
import { Counter } from "../counter/counter"
import './ItemCard.css'


export const ItemCard = ({ item }) => {
    return (
        <div className="contenedor-card rounded bg-yellow-700" key={item.id}>
            <article>
                <div className="portada">
                    <img className="img rounded" src={item.img} alt="foto de plato" />
                </div>
                <div className="contenedor-info">

                    <h3 className="font-bold text-center m-2">Plato: {item.name}</h3>

                    <div className="container-texto">
                        <hr className="m-2" />
                        <p className="text-gray-300 font-bold font-mono text-left">Que tiene? : {item.description}</p>
                        <hr className="m-2" />
                        <p className=" font-extrabold m-2 text-right">Precio: ${item.price}</p>
                    </div>
                </div>
                <Counter />
                <BtnClickMe className="container bg-slate-400 flex justify-center rounded font-mono text-lg hover:bg-slate-300" texto={'Pedir'} />
            </article>
        </div>
    )
}
