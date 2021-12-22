import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  const handleSubmit = () => {
    alert("Form on Submit");
    return false;
  };

  return (
    <div className="login-form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Welcome to Tweeter. Please SignUp</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          className="m2"
          onSubmit={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
