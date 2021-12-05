import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./components/Homepage";
import MyAds from "./components/MyAds";
import PostAd from "./components/PostAd";
import Profile from "./components/Profile";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/my-ads">
            <MyAds />
          </Route>
          <Route exact path="/post-ad">
            <PostAd />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/profile/:profileId">
            <Profile />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;

const Main = styled.div`
  display: flex;
  background-color: #e5ebea;
  height: 200vh;
  width: max-content;
`;
