
import { BtnClickMe } from "../botones/BtnClickMe"


export const Item = ({ nombre, description, precio }) => {

    return (
        <section className=" bg-yellow-500 conteiner-cards m-2">
            <img className="my-2 flex items-center justify-center" src="#" alt="*Foto de plato*" />
            <hr />
            <h2>{nombre}</h2>
            <p className="my-2">{description}</p>
            <hr />
            <p className="my-2">{precio}</p>
            <hr />
            <BtnClickMe 
            onClick={ ()=> {alert("pedido enviado a cocina")} }
            className="font-mono bg-slate-300 my-4 text-black font-extrabold" texto="pedir plato"/>
        </section>
    )
}
export default Item



