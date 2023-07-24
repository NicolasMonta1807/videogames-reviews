import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid className='bg-dark text-white mt-5 p-4 text-center' style={{ position: 'absolute', bottom: 0 }}>
      <footer>
        ♥ Made by <a href='https://github.com/nicolasmonta1807' target='_blank' style={{ color: 'white' }} rel='noreferrer'>Nicolás Montañez</a> ♥
      </footer>
    </Container>
  )
}

export default Footer
