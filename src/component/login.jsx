import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { validateUsername, isSignUp, doLogin } from "../service/getFeeds";

const Login = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [loginUsername, setLoginUsername] = useState("");

  const handleSubmit = () => {
    const people = {
      name: name,
      username: username,
    };
    if (people.username === "" || people.name === "") {
      alert("Username or Password is Empty");
      return;
    }
    validateUsername(username)
      .then(() => {
        console.log(people);
        isSignUp(people)
          .then(() => {
            alert("SignUp Successful. Please login to continue");
          })
          .catch((error) => {
            alert(error);
            return;
          });
        setUsername("");
        setName("");
        setLoginUsername("");
      })
      .catch((error) => {
        alert(error);
        setUsername("");
        return;
      });
  };

  const handleLogin = () => {
    console.log(loginUsername);
    if (loginUsername === "") {
      alert("Username is empty. Please enter username to login");
      return;
    }
    doLogin(loginUsername)
      .then((response) => {
        console.log("Post Login: ", response);
        window.sessionStorage.setItem("people", JSON.stringify(response));
        alert("Login Successful");
        window.location.href = "/feed";
      })
      .catch((error) => {
        alert(error);
        setLoginUsername("");
      });
  };

  const handleOnChangeUsername = (value) => {
    setUsername(value);
  };

  const handleOnChangeName = (value) => {
    setName(value);
  };

  const handleOnChangeLoginUsername = (value) => {
    setLoginUsername(value);
  };

  return (
    <div className="login-form">
      <h2 className="mb-3">Welcome to Tweeter</h2>
      <Form>
        <Form.Group className="mb-3" controlId="username-form-login">
          <Form.Control
            type="password"
            placeholder="Username"
            onChange={(e) => handleOnChangeLoginUsername(e.target.value)}
            value={loginUsername}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="success" className="mb-3" onClick={handleLogin}>
          Login
        </Button>
      </Form>
      <Form>
        <Form.Group className="mb-3" controlId="username-form">
          <Form.Text className="text-muted">Please signup to tweet</Form.Text>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => handleOnChangeUsername(e.target.value)}
            value={username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name-form">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => handleOnChangeName(e.target.value)}
            value={name}
          />
        </Form.Group>
        <Button variant="success" className="m2" onClick={handleSubmit}>
          SignUp
        </Button>
      </Form>
    </div>
  );
};

export default Login;
