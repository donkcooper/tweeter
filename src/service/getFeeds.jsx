export function getFeeds() {
  return fetch("http://192.168.0.134:8080/feed").then((data) => data.json());
}
