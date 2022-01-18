import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "./UsersContext";
import styled from "styled-components";
import paperPlane from "../assets/paper-airplane.png";
import User from "./User";
import Loading from "./Loading";

const CategoryPage = ({ setResult }) => {
  const { allUsers } = useContext(UsersContext);
  let { categoryQuery } = useParams();
  const [matchingCategory, setMatchingCategory] = useState(() => {
    const persistParam = window.sessionStorage.getItem("matching-category");
    return persistParam !== null ? JSON.parse(persistParam) : null;
  }); // page stays populated on refresh

  const [description, setDescription] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    setResult(categoryQuery);
    // if / else conditionals for rendering the different category tag lines
    if (categoryQuery === "Drop-in Visits") {
      setDescription(
        "Find someone to drop-in to say hi to your furry friends."
      );
    } else if (categoryQuery === "House Sitting") {
      setDescription(
        "Connect with someone willing to keep your pets AND your home company."
      );
    } else if (categoryQuery === "Dog Walking") {
      setDescription("Find someone to take a little jaunt with your dog.");
    } else if (categoryQuery === "Last Minute Transport") {
      setDescription(
        "Need last minute transport for your pet and don't have a car? See who's willing to help. "
      );
    } else if (categoryQuery === "Daycare") {
      setDescription("Connect with someone for your daycare needs.");
    } else if (categoryQuery === "Overnight Boarding") {
      setDescription("Let's help your pet find a sleepover buddy.");
    } else {
      setDescription("");
    }
    let matchesArray = [];
    // rendering matches from user data based on category
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
