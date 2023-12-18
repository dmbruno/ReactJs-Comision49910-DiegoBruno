import { useState } from "react"
import './counter.css'
import { Boton } from "../botones/Boton"


export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)

        }
    }

    return (
        <>
            <div className="flex flex-row mt-4 px-5">
                <Boton texto="+" onClick={sumar}></Boton>
                <div>
                    <p className="parrafo flex justify-center py-1 px-3"> Cantidad: {counter} </p>
                </div>
                <Boton texto="-" onClick={restar}></Boton>
            </div>
            <div className="mt-4 px-5">
                <Boton texto={"Agregar al carrito"}></Boton>
            </div>
        </>
    )
}
