
import { Link } from "react-router-dom"
import CartIcon from "/CartIcon.svg"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


export const Carwidget = () => {

const { itemsInCart } = useContext(CartContext)

    return (
        <Link to="/cart" className="flex items-center gap-1 ">
            <img src={CartIcon} alt="cart icon" className="w-6" />
            <span className="text-black">{itemsInCart()}</span>
        </Link>
    )
}
