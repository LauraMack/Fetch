import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UsersContext } from "./UsersContext";
import styled from "styled-components";
import { IoStarOutline } from "react-icons/io5";
import User from "./User";

const CategoryPage = ({ setResult, profileId }) => {
  const { allUsers } = useContext(UsersContext);
  let { categoryQuery } = useParams();
  const [matchingCategory, setMatchingCategory] = useState(null);

  console.log(allUsers.data);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    console.log("running category page");
    setResult(categoryQuery);
    let matchesArray = [];
    if (allUsers.data) {
      allUsers.data.forEach((i) => {
        if (i.forte) {
          i.forte.forEach((forte) => {
            if (forte.toLowerCase().includes(categoryQuery.toLowerCase())) {
              matchesArray.push(i);
            }
          });
        }
      });
      setMatchingCategory(matchesArray);
    }
  }, [categoryQuery]);

  return (
    matchingCategory && (
      <Main>
        <SearchDiv>Category: {categoryQuery}</SearchDiv>
        <UserDiv>
          {matchingCategory.map((user) => {
            return <User user={user} profileId={user._id} />;
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
