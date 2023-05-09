import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePages from './PAGES/HomePages'

function App() {
  

  return (
    
    <Routes>
      <Route path='/' element={<HomePages/>} />
    </Routes>
    
  )
}

export default App
