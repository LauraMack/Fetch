import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import Homepage from "./components/Homepage";
import MyAds from "./components/MyAds";
import AllAds from "./components/AllAds";
import UserProfile from "./components/UserProfile";
import MyProfile from "./components/MyProfile";
import EditProfile from "./components/EditProfile";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import CategoryPage from "./components/CategoryPage";
import Map from "./components/Map/Map";
import UserAds from "./components/UserAds";
import SavedUsers from "./components/SavedUsers";
import Contact from "./components/Contact";

const App = ({ profileId }) => {
  const [result, setResult] = useState(null);
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Homepage result={result} setResult={setResult} />
          </Route>
          <Route exact path="/my-ads/:_id">
            <MyAds />
          </Route>
          <Route exact path="/all-ads">
            <AllAds profileId={profileId} />
          </Route>
          <Route exact path="/users/ads/:id">
            <UserAds />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/profile/:profileId">
            <UserProfile />
          </Route>
          <Route exact path="/my-profile/:id">
            <MyProfile />
          </Route>
          <Route exact path="/my-profile/:id/favourites">
            <SavedUsers profileId={profileId} />
          </Route>
          <Route exact path="/edit-profile/:id">
            <EditProfile />
          </Route>
          <Route exact path="/search/:searchResult">
            <SearchResults result={result} setResult={setResult} />
          </Route>
          <Route exact path="/category/:categoryQuery">
            <CategoryPage result={result} setResult={setResult} />
          </Route>
          <Route exact path="/map">
            <Map />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;

const Main = styled.div`
  display: flex;
  background-color: #e1eedd;
  height: 200vh;
  width: max-content;
  margin: 0px;
`;
