import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UsersContext } from "./UsersContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";
import User from "./User";

const SearchResults = ({ result, setResult, profileId }) => {
  const { allUsers } = useContext(UsersContext);
  let { searchResult } = useParams();
  const [matchingResults, setMatchingResults] = useState(null);

  const starRating = {
    star: IoStarOutline,
  };

  console.log(allUsers.data);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    setResult(searchResult);
    let matchesArray = [];
    if (allUsers.data) {
      allUsers.data.forEach((i) => {
        console.log(i.name);
        i.forte.forEach((forte) => {
          if (forte.toLowerCase().includes(result.toLowerCase())) {
            matchesArray.push(i);
          }
        });

        if (
          i.name.toLowerCase().includes(result.toLowerCase()) &&
          !matchesArray.includes(i)
        ) {
          matchesArray.push(i);
        }
      });
      setMatchingResults(matchesArray);
    }
  }, [searchResult]);

  console.log(matchingResults, "matching results");

  return (
    matchingResults && (
      <Main>
        <SearchDiv>Search results for "{searchResult}"</SearchDiv>
        <UserDiv>
          {matchingResults.map((user) => {
            return <User user={user} profileId={profileId} />;
          })}
        </UserDiv>
      </Main>
    )
  );
};

export default SearchResults;

const Main = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;

const SearchDiv = styled.div`
  width: 1000px;
  height: 200px;
  margin: 0 auto;
  margin-top: 200px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: gray;
`;

const UserDiv = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
`;
