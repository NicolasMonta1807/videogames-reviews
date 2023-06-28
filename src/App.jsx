import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Games from './pages/Games'
import About from './pages/About'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/games' element={<Games />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
