const _HOSTNAME = "localhost";
const _PORT = "8080";
const _URL = "http://" + _HOSTNAME + ":" + _PORT;

export function getFeeds() {
  return fetch(_URL + "/feed").then((data) => data.json());
}

export function addFeed(tweet) {
  return fetch(_URL + "/feed/addTweet", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tweet),
  }).then((data) => data.json());
}

export function isSignUp(people) {
  return fetch(_URL + "/people", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(people),
  }).then((response) => {
    if (response.status === 201) {
      return response;
    } else {
      console.log(response.json());
      throw new Error("Could not SignUp");
    }
  });
}

export function doLogin(username) {
  return fetch(_URL + "/people/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(username),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log(response.json());
      throw new Error("Incorrect Username");
    }
  });
}

export function validateUsername(username) {
  return fetch(_URL + "/people/" + username).then((response) => {
    if (response.ok) {
      return response;
    } else if (response.status === 403) {
      throw new Error(
        username + " already exists. Please choose a different name"
      );
    }
  });
}

export function doLike(feedId) {
  return fetch(_URL + "/feed/" + feedId + "/stats/like", {
    method: "PUT",
  }).then((response) => {
    if (response.ok) {
      return response;
    } else if (response.status === 403) {
      throw new Error(feedId + " could not be liked");
    }
  });
}
