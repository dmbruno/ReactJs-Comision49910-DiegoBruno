import { useState } from "react"


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
        <div className="flex flex-row m-5 mb-0">
            <button className="container flex justify-center text-black rounded bg-white font-mono hover:bg-slate-300" onClick={sumar}>+</button>
            <p className="container flex justify-center">Cantidad: {contador}</p>
            <button className="container flex justify-center text-black rounded bg-white font-mono hover:bg-slate-300" onClick={restar}>-</button>
        </div>
    )
}
