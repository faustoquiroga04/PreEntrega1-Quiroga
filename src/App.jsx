import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
    <h1>Ecommerce - React</h1>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la Tienda React"/>
    </>
  )
}

export default App
