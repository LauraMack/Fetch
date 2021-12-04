import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import Categories from "./Categories";
import User from "./User";

const Homepage = () => {
  return (
    <>
      <Div>
        Homepage
        <img src="http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652775/profile-picture12_uvyqb1.jpg" />
        <Searchdiv>
          <Searchbar />
        </Searchdiv>
        <CategoryDiv>
          <Categories />
        </CategoryDiv>
        <UserDiv>
          <User />
        </UserDiv>
      </Div>
    </>
  );
};

export default Homepage;

const Div = styled.div`
  font-family: "Raleway";
  height: 100vh;
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
