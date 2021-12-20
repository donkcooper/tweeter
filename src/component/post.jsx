import Card from "react-bootstrap/Card";

const Post = ({ post }) => {
  return (
    <Card border="danger">
      <Card.Header>@{post.people.username}</Card.Header>
      <Card.Body>
        <Card.Title>{post.people.name}</Card.Title>
        <Card.Text>{post.message}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        2 days ago at {post.location}
      </Card.Footer>
    </Card>
  );
};

export default Post;
