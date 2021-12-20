import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Tweet from "./tweet";

const Header = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#">Tweeter</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Tweet username="Aritra"></Tweet>
          </Navbar.Text>
          <Navbar.Text>
            Signed in as: <a href="#">John Doe</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
