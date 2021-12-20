import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";

const Tweet = ({ username }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log("Reset!");
    setShow(false);
  };

  const handleShow = () => setShow(true);
  const postTweet = () => {
    console.log("Tweeted! For", username);
    setShow(false);
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
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="cancel" onClick={handleClose}>
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
