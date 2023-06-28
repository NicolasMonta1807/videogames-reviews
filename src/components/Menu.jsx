import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/games'>Games</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>
  )
}

export default Menu
