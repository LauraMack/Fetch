import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import Homepage from "./components/Homepage";
import MyAds from "./components/MyAds";
import PostAd from "./components/PostAd";
import Profile from "./components/Profile";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import CategoryPage from "./components/CategoryPage";

const App = () => {
  const [result, setResult] = useState("");
  const [reload, setReload] = useState(false);
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Homepage
              result={result}
              setResult={setResult}
              reload={reload}
              setReload={setReload}
            />
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
          <Route exact path="/search/:searchResult">
            <SearchResults
              reload={reload}
              setReload={setReload}
              result={result}
              setResult={setResult}
            />
          </Route>
          <Route exact path="/category/:categoryQuery">
            <CategoryPage
              result={result}
              setResult={setResult}
              reload={reload}
              setReload={setReload}
            />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;

const Main = styled.div`
  display: flex;
  background-color: rgb(237, 238, 255);
  height: 200vh;
  width: max-content;
  margin: 0px;
`;
