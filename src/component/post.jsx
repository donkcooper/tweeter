import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLike } from "react-icons/bi";
import { doLike } from "../service/getFeeds";

const Post = ({ post }) => {
  const handleLike = (feedId) => {
    doLike(feedId).then((response) => {
      if (response.ok) {
        alert("You Liked it!");
        window.location.href = "/feed";
      } else {
        alert("Feed could not be liked");
        console.log("Feed Like Error: ", response);
      }
    });
  };

  return (
    <Card border={post.stats.number === 10 ? "success" : ""}>
      <Card.Header>
        #{post.stats.number} @{post.people.username}
      </Card.Header>
      <Card.Body>
        <Card.Title>{post.people.name}</Card.Title>
        <Card.Text>{post.message}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button variant="light" onClick={() => handleLike(post.id)}>
          <BiLike />{" "}
          {post.stats.likes > 0 ? post.stats.likes + " Likes" : "Like"}
        </Button>
        <Card.Text>at {post.stats.location}</Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default Post;
