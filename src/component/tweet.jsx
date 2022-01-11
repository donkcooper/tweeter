import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { addFeed } from "../service/getFeeds";

const Tweet = ({ peopleId }) => {
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => {
    console.log("Reset!");
    setLocation("");
    setMessage("");
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const postTweet = () => {
    const tweet = {
      peopleId: peopleId,
      location: location,
      message: message,
    };
    setShow(validateAndPostTweet(tweet));
  };

  const handleOnChangeMessage = (value) => {
    setMessage(value);
  };

  const handleOnChangeLocation = (value) => {
    setLocation(value);
  };

  const validateAndPostTweet = (tweet) => {
    console.log(tweet);
    if (tweet.peopleId === "") {
      alert("Login to Tweet");
      return true;
    } else if (tweet.location === "" || tweet.message === "") {
      alert("Location or Message empty");
      return true;
    }
    addFeed(tweet).then((response) => {
      console.log(response);
      alert(
        "Tweeted #" +
          response +
          " with " +
          tweet.message +
          " from " +
          tweet.location
      );
      window.location.reload(false);
    });
    return false;
  };

  return (
    <div className="m-2">
      <Button onClick={handleShow}>Add Tweet</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Post a Tweet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Select a Location</Form.Label>
              <Form.Select
                className="me-sm-2"
                onChange={(e) => handleOnChangeLocation(e.target.value)}
              >
                <option value="0">Choose...</option>
                <option value="Syndey">Syndey</option>
                <option value="Helsinki">Helsinki</option>
                <option value="Istanbul">Istanbul</option>
                <option value="London">London</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Tweet Anything</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => handleOnChangeMessage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={postTweet}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Tweet;
