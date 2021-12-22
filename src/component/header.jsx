import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Tweet from "./tweet";

const Header = () => {
  const people = JSON.parse(window.sessionStorage.getItem("people"));
  if (people === null) {
    alert("Illegal Access. Please login to access this page");
    window.location.href = "/";
  }

  const handleLogout = () => {
    alert("Logging out");
    window.sessionStorage.removeItem("people");
    window.location.href = "/";
  };

  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">Tweeter</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a>{people.name}</a>
          </Navbar.Text>
          <Navbar.Text>
            <Tweet peopleId={people.id}></Tweet>
          </Navbar.Text>
          <Navbar.Text>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
