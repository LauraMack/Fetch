import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UsersContext } from "./UsersContext";
import styled from "styled-components";
import paperPlane from "../assets/paper-airplane.png";
import User from "./User";
import Loading from "./Loading";

const CategoryPage = ({ setResult, profileId }) => {
  const { allUsers } = useContext(UsersContext);
  let { categoryQuery } = useParams();
  const [matchingCategory, setMatchingCategory] = useState(() => {
    const persistParam = window.sessionStorage.getItem("matching-category");
    return persistParam !== null ? JSON.parse(persistParam) : null;
  });
  const [description, setDescription] = useState("");

  console.log(categoryQuery);
  console.log(allUsers);
  console.log(matchingCategory);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    console.log("hello");
    setResult(categoryQuery);
    if (categoryQuery === "Drop-in Visits") {
      setDescription("Find someone to drop-in on your furry friends today.");
    } else if (categoryQuery === "House Sitting") {
      setDescription(
        "Connect with someone willing to keep your pets AND your home company."
      );
    } else if (categoryQuery === "Dog Walking") {
      setDescription("Help someone stretch their legs!");
    } else if (categoryQuery === "Last Minute Transport") {
      setDescription(
        "Need last minute transport for your pet and don't have a car? See who's willing to help. "
      );
    } else if (categoryQuery === "Daycare") {
      setDescription(
        "Let's find you someone to look after your pet for the day."
      );
    } else if (categoryQuery === "Overnight Boarding") {
      setDescription("Like a sleepover with your pets.");
    } else {
      setDescription("");
    }
    console.log("Hi");
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
      console.log(matchesArray);
      setMatchingCategory(matchesArray);
      window.sessionStorage.setItem(
        "matching-category",
        JSON.stringify(matchesArray)
      );
    }
  }, [categoryQuery]);

  console.log(description);

  return !matchingCategory ? (
    <Loading />
  ) : (
    <Main>
      <ImageDiv>
        <Plane src={paperPlane} />
      </ImageDiv>
      <SearchDiv>{categoryQuery}</SearchDiv>
      <DescriptionDiv>{description}</DescriptionDiv>
      <MatchingDiv>Matching profiles:</MatchingDiv>
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
  margin-top: 60px;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  color: #183a1d;
`;

const DescriptionDiv = styled.div`
  width: 1000px;
  height: 100px;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: #183a1d;
`;

const MatchingDiv = styled.div`
  width: 1000px;
  height: 50px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
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

const Plane = styled.img`
  height: 100px;
`;
