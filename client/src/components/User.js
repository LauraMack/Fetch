import React from "react";
import styled from "styled-components";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const User = ({ user, profileId }) => {
  let history = useHistory();
  const starRating = {
    star: IoStarSharp,
  };
  return (
    <div>
      {!user.email && (
        <Div key={`id-${profileId}`}>
          <UserLink to={`/profile/${profileId}`}>
            <Wrapper>
              <div>
                <Image src={user.avatar} />
              </div>
              <Name>{user.name}</Name>
              <Rating>
                {user.rating.map((i) => {
                  const icon = starRating[i];
                  return (
                    <Star key={Math.floor(Math.random() * 1000000000000000)}>
                      {icon ? icon() : null}
                    </Star>
                  );
                })}
              </Rating>
              <ForteContainer>
                <ForteIntro>Fortes:</ForteIntro>
                {user.forte?.slice(0, 3).map((skill) => {
                  return (
                    <Forte
                      onClick={(ev) => {
                        ev.preventDefault();
                        history.push(`/category/${skill}`);
                      }}
                      key={Math.floor(Math.random() * 1000000000000000)}
                    >
                      {skill}
                    </Forte>
                  );
                })}
              </ForteContainer>
            </Wrapper>
          </UserLink>
        </Div>
      )}
    </div>
  );
};

export default User;

const Div = styled.div`
  border-radius: 15px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  margin: 30px;
  background-color: #e1eedd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 340px;
  padding: 15px;
  border-radius: 5px;
  transition: 0.5s ease-in-out;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 1px 2px 3px 1px,
      rgba(60, 64, 67, 0.15) 1px 3px 6px 3px;
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
  color: #3d405b;
  font-size: 20px;
`;

const Rating = styled.div`
  padding: 10px;
  color: black;
  display: flex;
`;
const Star = styled.p`
  margin: 0;
  color: #ffba08;
`;

const ForteContainer = styled.div`
  height: 200px;
`;

const Forte = styled.li`
  list-style-type: none;
  font-size: 14px;
  background-color: #40916c;
  border-radius: 5px;
  width: 200px;
  margin: 5px;
  padding: 5px;
  text-align: center;
  color: #e5ebea;
  &:hover {
    color: #032b43;
  }
`;

const ForteIntro = styled.div`
  font-size: 14px;
  text-align: center;
  color: grey;
`;
