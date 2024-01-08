

import './App.css'
import { CartProvider } from './Context/CartContext'
import { UserProvider } from './Context/userContext'
import { AppRouter } from './Router/AppRouter'




function App() {



  return (

    <div className='px-3'>

      <UserProvider>

        <CartProvider>

          <AppRouter />

        </CartProvider>

      </UserProvider>
    </div>
  )
}

export default App
