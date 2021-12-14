import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UsersContext } from "./UsersContext";
import NoResultsFound from "./NoResultsFound";
import styled from "styled-components";
import User from "./User";

const SearchResults = ({ result, setResult, profileId }) => {
  const { allUsers } = useContext(UsersContext);
  let { searchResult } = useParams();
  const [matchingResults, setMatchingResults] = useState(() => {
    const persistParam = window.sessionStorage.getItem("matching-results");
    return persistParam !== null ? JSON.parse(persistParam) : null;
  });

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
        if (i.forte) {
          i.forte.forEach((forte) => {
            if (forte.toLowerCase().includes(result.toLowerCase())) {
              matchesArray.push(i);
            }
          });
        }

        if (
          i.name &&
          i.name.toLowerCase().includes(result.toLowerCase()) &&
          !matchesArray.includes(i)
        ) {
          matchesArray.push(i);
        }
      });
      setMatchingResults(matchesArray);
      window.sessionStorage.setItem(
        "matching-results",
        JSON.stringify(matchesArray)
      );
    }
  }, [searchResult]);

  console.log(matchingResults, "matching results");
  if (matchingResults <= 0) {
    return <NoResultsFound searchResult={searchResult} />;
  } else {
    return (
      <Main>
        {matchingResults && (
          <div>
            <SearchDiv>Search results for "{searchResult}"</SearchDiv>
            <UserDiv>
              {matchingResults.map((user) => {
                return <User user={user} profileId={user._id} />;
              })}
            </UserDiv>
          </div>
        )}
      </Main>
    );
  }
};

export default SearchResults;

const Main = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: max-content;
  background-color: #e1eedd;
`;

const SearchDiv = styled.div`
  width: 1000px;
  height: 200px;
  margin: 0 auto;
  margin-top: 200px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: #183a1d;
`;

const UserDiv = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
`;
