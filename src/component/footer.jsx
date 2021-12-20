import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Navbar bg="light" className="mt-2">
      <Container>
        <Navbar.Brand href="#">&copy; 2001</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
