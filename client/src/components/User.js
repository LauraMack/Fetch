import React from "react";
import styled from "styled-components";
import { IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const User = ({ user, profileId }) => {
  const starRating = {
    star: IoStarOutline,
  };
  return (
    <Div>
      <UserLink to={`/profile/${profileId}`}>
        <Wrapper>
          <div>
            <Image src={user.avatar} />
          </div>
          <Name>{user.name}</Name>
          <Rating>
            {user.rating.map((i) => {
              const icon = starRating[i];
              return <Star>{icon ? icon() : null}</Star>;
            })}
          </Rating>
          <ForteContainer>
            <ForteIntro>Fortes:</ForteIntro>
            {user.forte?.length > 0 &&
              user.forte?.slice(0, 3).map((skill) => {
                return <Forte key={`id-${skill}`}>{skill}</Forte>;
              })}
          </ForteContainer>
        </Wrapper>
      </UserLink>
    </Div>
  );
};

export default User;

const Div = styled.div`
  border-radius: 15px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  margin: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 325px;
  padding: 15px;
  border-radius: 15px;
  transition: 0.5s ease-in-out;
  &:hover {
    /* background-color: #f9f9f9; */
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`;

const UserLink = styled(Link)`
  width: 300px;
  margin: 20px;
  text-decoration: none;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 30%;
`;

const Name = styled.div`
  margin-top: 10px;
  font-weight: bold;
  color: grey;
  font-size: 20px;
`;

const Rating = styled.div`
  padding: 10px;
  color: black;
  display: flex;
`;
const Star = styled.p`
  margin: 0;
  color: #edb230;
`;
const ForteContainer = styled.div`
  height: 200px;
`;

const Forte = styled.li`
  list-style-type: none;
  font-size: 14px;
  background-color: #558b6e;
  border-radius: 20px;
  width: 200px;
  margin: 5px;
  padding: 5px;
  text-align: center;
  color: #e5ebea;
`;

const ForteIntro = styled.div`
  font-size: 14px;
  text-align: center;
  color: grey;
`;
