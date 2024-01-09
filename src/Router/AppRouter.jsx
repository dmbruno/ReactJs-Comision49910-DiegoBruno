import { useContext } from "react"
import { UserContext } from "../Context/userContext"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/navBar/NavBar"
import { Login } from "../components/Login/Login"
import { Inicio } from "../components/Inicio/Inicio"
import { ItemListConteiner } from "../components/ItemListConteiner/ItemListConteiner"
import { ItemDetailConteiner } from "../components/ItemDetailConteiner/ItemDetailConteiner"
import { CartView } from "../components/CartView/CartView"
import { CheckOut } from "../components/Checkout/CheckOut"
import NotFound from "../components/not-found/NotFound"
import { Footer } from "../components/footer/Footer"








export const AppRouter = () => {

    const { user } = useContext(UserContext)


    return (


        <BrowserRouter>
            <NavBar />
            {
                user.logged
                    ? <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/menu" element={<ItemListConteiner />} />
                        <Route path="/menu/:categoryId" element={<ItemListConteiner />} />
                        <Route path="/item/:itemId" element={<ItemDetailConteiner />} />
                        <Route path="/cart" element={<CartView />} />
                        <Route path="/CheckOut" element={<CheckOut />} />
                        <Route path="*" element={<Inicio />} />
                    </Routes> 

                    : <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
            }
            <Footer />
        </BrowserRouter>
    )
}
