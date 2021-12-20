import Container from "react-bootstrap/Container";
import Feed from "./feed";

const Body = ({ feeds }) => {
  return (
    <Container fluid="md">
      {feeds.map((feed) => (
        <Feed key={feed.id} post={feed} />
      ))}
    </Container>
  );
};

export default Body;
