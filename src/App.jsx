import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Games from './pages/Games'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Notification from './components/Notification'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Notification />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/games' element={<Games />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
