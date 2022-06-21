import { Nav, Navbar, } from "react-bootstrap"


const MyNav = () => {
    return (
        
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Browse</Nav.Link>
    </Nav>
  </Navbar>
  

    )
}
export default MyNav