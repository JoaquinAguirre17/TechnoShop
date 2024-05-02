import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navar from './components/Navar/Navar'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navar />
      <ItemsListContainer greeting='Bienvenidos a Techno Shop' />
    </>
  )
}

export default App
