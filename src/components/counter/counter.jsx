import { useState } from "react"
import './counter.css'
import { Boton } from "../botones/Boton"

export const Counter = () => {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }


    return (
        <div className="flex flex-row mt-4 px-5">
            <Boton texto="+" onClick={sumar}></Boton>
            <p className="parrafo flex justify-center py-1 px-3">Cantidad: {contador}</p>
            <Boton texto="-" onClick={restar}></Boton>
        </div>
    )
}
