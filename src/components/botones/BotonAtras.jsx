import { useNavigate } from "react-router-dom"





export const BotonAtras = () => {

    const navigate = useNavigate()

    const handleAtras = () =>{
        navigate(-1)
    }
    return (

        <button onClick={handleAtras} className="bg-yellow-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded sm:text-[13px] sm:py-0 sm:px-1">
            Atras...
        </button>
    )
}
