import { useNavigate } from "react-router-dom"





export const BotonAtras = () => {

    const navigate = useNavigate()

    const handleAtras = () =>{
        navigate(-1)
    }
    return (

        <button onClick={handleAtras} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Atras...
        </button>
    )
}
