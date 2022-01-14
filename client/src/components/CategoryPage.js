import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UsersContext } from "./UsersContext";
import styled from "styled-components";
import dog from "../assets/dog-backwards.png";
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    setResult(categoryQuery);
    switch (categoryQuery) {
      case "Drop-in Visits":
        return setDescription(
          "Find someone to drop-in on your furry friends today."
        );
        break;
      case "House Sitting":
        return setDescription(
          "Connect with someone willing to keep your pets AND your home company."
        );
        break;
      case "Dog Walking":
        return setDescription("Help someone stretch their legs!");
        break;
      case "Last Minute Transport":
        return setDescription(
          "Need last minute transport for your pet and don't have a car? See who's willing to help. "
        );
        break;
      case "Daycare":
        return setDescription(
          "Let's find you someone to look after your pet for the day."
        );
        break;
      case "Overnight Boarding":
        return setDescription("Like a sleepover with your pets.");
        break;
      default:
        setDescription("");
    }
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
