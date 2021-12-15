import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UsersContext } from "./UsersContext";
import styled from "styled-components";
import dog from "../assets/dog-backwards.png";
import User from "./User";
import Loading from "./Loading";

const CategoryPage = ({ setResult, profileId }) => {
  const { allUsers } = useContext(UsersContext);
  let { categoryQuery } = useParams();
  const [matchingCategory, setMatchingCategory] = useState(() => {
    const persistParam = window.sessionStorage.getItem("matching-category");
    return persistParam !== null ? JSON.parse(persistParam) : null;
  });

  console.log(allUsers.data);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
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
      window.sessionStorage.setItem(
        "matching-category",
        JSON.stringify(matchesArray)
      );
    }
  }, [categoryQuery]);

  return !matchingCategory ? (
    <Loading />
  ) : (
    <Main>
      <ImageDiv>
        <img src={dog} />
      </ImageDiv>
      <SearchDiv>Category: {categoryQuery}</SearchDiv>
      <UserDiv>
        {matchingCategory.map((user) => {
          return <User user={user} profileId={user._id} />;
        })}
      </UserDiv>
    </Main>
  );
};
export default CategoryPage;

const Main = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: max-content;
  background-color: #e1eedd;
`;

const SearchDiv = styled.div`
  width: 1000px;
  height: 100px;
  margin: 0 auto;
  margin-top: 50px;
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

const ImageDiv = styled.div`
  width: 1000px;
  height: 100px;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
