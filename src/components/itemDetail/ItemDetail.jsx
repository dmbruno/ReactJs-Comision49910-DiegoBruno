
import "./itemDetail.css"
import { Counter } from "../counter/counter";



const ItemDetail = ({ item }) => {

    return (
        <>
            <div className="w-screen container-itemDetail px-6 py-6">
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









