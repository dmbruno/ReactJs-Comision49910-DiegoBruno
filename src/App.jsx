

import './App.css'
import './components/ItemListConteiner/ItemListConteiner'
import { NavBar } from './components/navBar/NavBar'
import { Footer } from './components/footer/Footer'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner'
import { Contenedor } from './components/contenedor/Contenedor'
import { BtnClickMe } from './components/botones/BtnClickMe'
import { useState } from 'react'



function App() {

  const [mostrar, setmostrar] = useState(true)
  
  const handdleMostrar = () => {
    setmostrar(!mostrar)
  }


  return (
    <>
      <NavBar />
      <BtnClickMe texto="Mostrar Menu" onClick={handdleMostrar} className='bg-red-200 text-black flex justify-center align-middle'></BtnClickMe>
      {
        mostrar && <ItemListConteiner />
      }

      <Contenedor>
        <h2>Diego Bruno</h2>
        <h3>ReactJs comision49910</h3>
        <p>este boton vino por children</p>
        <BtnClickMe onClick={() => { console.log("boton clickeado"); }}
          className="bg-gray-800" texto="Click Me" />
      </Contenedor>
      <Footer />
    </>
  )
}

export default App
