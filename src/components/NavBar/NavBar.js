import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar () {
  return (
    <Navbar bg= 'dark' data-bs-theme = 'dark' className= 'p-3'>
      <Container>
        <Navbar.Brand >  <Link to="/">Bastimento</Link>
</Navbar.Brand>
          <Nav className="me-auto">
          <Link to='category/Cactus'>Cactus</Link>
         <Link to='category/Semillas'>Semillas</Link>
         <Link to='category/Frutales'>Frutales</Link>
          
          </Nav>
      </Container>
    </Navbar>
  )
}

