import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header";
import Footer from "./component/footer";
import Body from "./component/body";
import { getFeeds } from "./service/getFeeds";
import Login from "./component/login";

function App() {
  const [feeds, setFeed] = useState([]);

  useEffect(() => {
    let mounted = true;
    getFeeds().then((items) => {
      if (mounted) {
        setFeed(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/feed"
            element={
              <React.Fragment>
                <Header />
                <Body feeds={feeds} />
                <Footer />
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
