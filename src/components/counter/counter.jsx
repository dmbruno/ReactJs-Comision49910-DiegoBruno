import { useState } from "react"
import './counter.css'

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
        <div className="flex flex-row mt-20">
            <button className="text-black rounded bg-yelllow-800 font-mono hover:bg-slate-600 py-3 px-9" onClick={sumar}>+</button>
            <p className="parrafo flex justify-center py-1 px-8">Cantidad: {contador}</p>
            <button className="flex justify-center text-black rounded bg-white font-mono hover:bg-slate-600 py-3 px-9" onClick={restar}>-</button>
        </div>
    )
}
