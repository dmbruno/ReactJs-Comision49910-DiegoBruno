import { useNavigate } from "react-router-dom"





export const BotonAtras = () => {

    const navigate = useNavigate()

    const handleAtras = () =>{
        navigate(-1)
    }
    return (

        <button onClick={handleAtras} className="bg-slate-500 hover:bg-yellow-800 text-black font-bold py-2 px-4 rounded sm:text-[13px] sm:py-0 sm:px-1">
            Atras...
        </button>
    )
}
