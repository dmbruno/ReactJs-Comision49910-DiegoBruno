import { useState } from "react";



export const CheckOut = () => {


    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: "",
    });

    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit");
        console.log(values);
    };

    return (
        <div>
            <div className="container m-auto mt-10 mb-5">
                <h2 className="text-3xl font-semibold">Envia tu Pedido</h2>
                <hr />
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 max-w-md">
                    <input
                        className="border p-2"
                        type="text"
                        placeholder="Nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                        name="nombre"
                    />
                    <input
                        className="border p-2"
                        type="text"
                        placeholder="Direccion"
                        value={values.direccion}
                        onChange={handleInputChange}
                        name="direccion"
                    />
                    <input
                        className="border p-2"
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"

                    />
                    <button className="bg-yellow-500 text-white py-1 font-semibold" type="submit">Confirmar Pedido</button>
                </form>
            </div>
        </div>
    )
}
