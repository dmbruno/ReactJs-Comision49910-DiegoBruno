import { useContext, useState } from "react"
import { UserContext } from "../../Context/userContext"


export const Login = () => {
    const { login, googleLogin, register } = useContext(UserContext)

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        login(values);
    };

    return (
        <div >
            <h2 className="text-3xl font-mono text-center">Login</h2>
            <hr />
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center p-5 gap-4">
                <input
                    value={values.email}
                    className="py-2 px-4"
                    type="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    name="email"
                />

                <input
                    value={values.password}
                    className="py-2 px-4"
                    type="password"
                    placeholder="Contraseña"
                    onChange={handleInputChange}
                    name="password"

                />

                <button
                    onClick={() => register(values)}
                    className="w-80 p-2 bg-gray-500 text-white rounded font-bold hover:bg-blue-500"
                    type="submit">Ingresar
                </button>

            </form>
            <div className="flex items-center justify-center z-50 m-2">
                <button
                    className="w-80 p-2 bg-gray-500 text-white rounded font-bold hover:bg-blue-500"
                    onClick={googleLogin}>
                    Ingresar con Google
                </button>
            </div>
        </div>
    )
}
