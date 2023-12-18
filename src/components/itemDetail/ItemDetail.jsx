
import "./itemDetail.css"
import { Counter } from "../counter/counter";
import { useNavigate } from "react-router-dom";




const ItemDetail = ({ item }) => {
    const navigate = useNavigate()

    const handleAtras = () =>{
        navigate(-1)
    }

    return (
        <>
            <div className="w-screen container-itemDetail px-9 py-9">
                <button className="flex justify-center text-white rounded font-mono hover:bg-slate-600 py-2 px-5 bg-slate-500 ml-4" onClick={handleAtras}>Atras</button>
                <h3 className="text-2xl font-semibold py-5 px-5">{item.name}</h3>
                <hr />
                <div className="flex w-60 h-60 py-5 px-5 gap-6">
                    <img src={item.img} alt={item.name} />
                    <div className="w-screen">
                        <p className="w-screen py-5 px-5 font-extrabold">{item.description} </p>
                        <Counter />
                        <p className="text-xl font-bold px-5 pt-5 mb-5"> Precio: ${item.price}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemDetail;









