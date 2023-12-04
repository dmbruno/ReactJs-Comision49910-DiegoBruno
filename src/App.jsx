

import './App.css'
import './components/ItemListConteiner/ItemListConteiner'
import { NavBar } from './components/navBar/NavBar'
import { Footer } from './components/footer/Footer'
import { Contenedor } from './components/contenedor/Contenedor'
import { BtnClickMe } from './components/botones/BtnClickMe'
import { Counter } from './components/counter/counter'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner'


function App() {




  return (
    <>
      <NavBar />
      <ItemListConteiner/>
      <Contenedor>
        <h2>Diego Bruno</h2>
        <h3>ReactJs comision49910</h3>
        <p>este boton vino por children</p>
        <BtnClickMe onClick={() => { console.log("boton clickeado"); }}
          className="bg-gray-800" texto="Click Me" />
      </Contenedor>
      
      {/* <Counter /> */}
      <Footer />
    </>
  )
}

export default App
