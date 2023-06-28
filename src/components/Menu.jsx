import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            <img
              src='/gg.svg'
              alt='Rate.GG logo'
              width='40'
              height='40'
              className='d-inline-block align-top'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/games'>Games</Nav.Link>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Menu
