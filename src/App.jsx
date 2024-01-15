

import './App.css'
import { CartProvider } from './Context/CartContext'
import { UserProvider } from './Context/userContext'
import { AppRouter } from './Router/AppRouter'




function App() {



  return (
    <div className='relative px-3'>
      <div className='absolute inset-0 bg-[url("./portadaGrizzly.jfif")] bg-cover bg-center opacity-70 z-0'></div>
      <div className='relative z-1'>
        <UserProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </UserProvider>
        
      </div>
    </div>
  )
}

export default App
