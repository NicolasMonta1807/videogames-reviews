import { Navbar, Nav, Container, Dropdown, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearUser } from '../reducers/userReducer'

const Menu = () => {
  const user = useSelector(({ user }) => user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(clearUser())
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' sticky='top' className='px-5'>
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
              className='m-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/games'>Games</Nav.Link>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              {
                !user &&
                  (
                    <>
                      <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                      <Nav.Link as={Link} to='/register'>Sign Up</Nav.Link>
                    </>
                  )
              }
            </Nav>
            <Nav className='ml-auto my-lg-0' navbarScroll>
              {user && (
                <>
                  <Dropdown align='end' autoClose>
                    <Dropdown.Toggle>{user.username}</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as={Button} onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Menu
