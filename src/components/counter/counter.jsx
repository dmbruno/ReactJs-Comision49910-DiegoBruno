import { useState } from "react"


export const Counter = () => {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        if (contador > 0 ){
        setContador(contador - 1)
    }
}


    return (
        <div>
            <button className="container flex justify-center py-2 px-5 my-3 text-black rounded bg-yellow-300 mx-4" onClick={sumar}>sumar 1</button>
            <button className="container flex justify-center py-2 px-5 my-3 text-black rounded bg-yellow-300 mx-4" onClick={restar}>restar 1</button>
            <p className="container flex justify-center">Contador: {contador}</p>
        </div>
    )
}
