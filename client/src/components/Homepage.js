import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import Categories from "./Categories";
import User from "./User";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [allUsers, setAllUsers] = useState("");
  const [moreUsers, setMoreUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data.data);
        //slice the original array for pagination purposes
        const sliced = data.data.slice(0, 4);
        setMoreUsers(sliced);
        console.log(sliced, "sliced");
      });
  }, []);

  console.log(allUsers);

  return (
    <>
      <Div>
        Homepage
        <Searchdiv>
          <Searchbar />
        </Searchdiv>
        <CategoryDiv>
          <Categories />
        </CategoryDiv>
        <UserDiv>
          {moreUsers.map((user) => {
            const image = user.avatar;
            const name = user.name;
            const rating = user.rating;

            return <User image={image} rating={rating} name={name} />;
          })}
        </UserDiv>
      </Div>
    </>
  );
};

export default Homepage;

const Div = styled.div`
  font-family: "Raleway";
  height: max-content;
  width: 100vw;
`;
const Searchdiv = styled.div`
  height: 50px;
  width: 400px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 200px;
`;

const CategoryDiv = styled.div`
  height: 50px;
  width: 600px;
  display: flex;
  flex-direction: row wrap;
  margin: 0 auto;
  margin-top: 30px;
`;

const UserDiv = styled.div`
  height: 50px;
  width: 600px;
  display: flex;
  flex-direction: row wrap;
  margin: 0 auto;
  margin-top: 200px;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 75px;
`;
