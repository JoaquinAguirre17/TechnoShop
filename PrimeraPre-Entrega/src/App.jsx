import './App.css'
import Navar from './components/Navar/Navar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/HomeComponent/Home'
import ElectronicaComponents from './components/ElectronicaComponets/ElectronicaComponents'
import RelojeriaComponents from './components/RelojeriaComponents/RelojeriaComponents'
import ProducView from './components/ProductView/ProductView'
import CategoryComponent from './components/CategoryComponent/CategotyComponent'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/electronica' element={<ElectronicaComponents />}></Route>
          <Route exact path='/electronica/:prodId' element={<ProducView />}></Route>
          /* -------------------------------------------------------------------------- */
          <Route exact path='/relojes' element={<RelojeriaComponents />}></Route>
          <Route exact path='/relojes/:prodId' element={<ProducView />}></Route>

          /* -------------------------------------------------------------------------- */

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
