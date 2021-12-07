import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UsersContext } from "./UsersContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";
import User from "./User";

const CategoryPage = ({ result, setResult }) => {
  const { allUsers } = useContext(UsersContext);
  let { categoryQuery } = useParams();
  const [matchingCategory, setMatchingCategory] = useState(null);

  const starRating = {
    star: IoStarOutline,
  };

  console.log(allUsers.data);

  useEffect(() => {
    setResult(categoryQuery);
    let matchesArray = [];
    if (allUsers.data) {
      allUsers.data.forEach((i) => {
        i.forte.forEach((forte) => {
          if (forte.toLowerCase().includes(result.toLowerCase())) {
            matchesArray.push(i);
          }
        });
      });
      setMatchingCategory(matchesArray);
    }
  }, [result]);

  return (
    matchingCategory && (
      <Main>
        <SearchDiv>Category: {categoryQuery}</SearchDiv>
        <UserDiv>
          {matchingCategory.map((user) => {
            return <User user={user} />;
          })}
        </UserDiv>
      </Main>
    )
  );
};
export default CategoryPage;

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
