import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "./UsersContext";
import NoResultsFound from "./NoResultsFound";
import styled from "styled-components";
import User from "./User";

const SearchResults = ({ result, setResult }) => {
  const { allUsers } = useContext(UsersContext);
  let { searchResult } = useParams();
  const [matchingResults, setMatchingResults] = useState(() => {
    const persistParam = window.sessionStorage.getItem("matching-results");
    return persistParam !== null ? JSON.parse(persistParam) : null;
  });

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
        if (i.forte) {
          i.forte.forEach((forte) => {
            if (forte.toLowerCase().includes(result.toLowerCase())) {
              // filter users based on matching search result
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
        JSON.stringify(matchesArray) // set item in session storage to ensure page is loaded on refresh
      );
    }
  }, [searchResult]);

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
  margin-top: 160px;
  margin-bottom: 100px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: #183a1d;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserDiv = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Dog = styled.img`
  height: 150px;
  width: 200px;
  margin-bottom: 30px;
`;
