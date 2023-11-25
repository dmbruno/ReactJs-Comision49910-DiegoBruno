import { useState } from 'react'

import './App.css'
import './assets/main/Cards.css'
import './assets/footer/Footer.css'
import { NavBar } from './assets/navBar/NavBar'
import { Cards } from './assets/main/Cards'
import { Footer } from './assets/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Cards/>
    <Footer/>
        
    </>
  )
}

export default App
