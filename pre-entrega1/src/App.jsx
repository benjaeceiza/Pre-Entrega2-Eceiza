
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/NavBar'
import ItemDetailConteiner from './components/ItemDetailContainer'



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path={"/"} element = {<ItemListContainer/>}/>
        <Route path={"/category/:idcategoria"} element = {<ItemListContainer/>}/>
        <Route path={"/item/:id"} element = {<ItemDetailConteiner/>}/>
        </Routes>
       
      </BrowserRouter>
    </>
  )
}

export default App
