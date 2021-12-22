export function getFeeds() {
  return fetch("http://192.168.0.134:8080/feed").then((data) => data.json());
}

export function addFeed(tweet) {
  return fetch("http://localhost:8080/feed/addTweet", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tweet),
  }).then((data) => data.json());
}
