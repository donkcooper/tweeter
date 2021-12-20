import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Post from "./post";

const Feed = ({ post }) => {
  return (
    <Row className="mt-4 mb-4">
      <Col>
        <Post post={post} />
      </Col>
    </Row>
  );
};

export default Feed;
