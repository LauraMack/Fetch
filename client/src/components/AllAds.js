import React, { useContext } from "react";
import styled from "styled-components";
import { UsersContext } from "./UsersContext";
import { Link } from "react-router-dom";

const AllAds = () => {
  const { allUsers } = useContext(UsersContext);
  console.log(allUsers.data);
  return (
    <Wrapper>
      {allUsers.data &&
        allUsers.data.map((user) => {
          if (user.ads && user.ads.length > 0) {
            return (
              <div>
                {user.ads.map((i) => {
                  return (
                    <AdsDiv>
                      <Info>
                        <Link to={`/profile/${user._id}`}>
                          <Image src={user.avatar} />
                        </Link>
                        <Link to={`/profile/${user._id}`}>
                          <From>{user.name}</From>
                        </Link>
                        <From>-</From>
                        <Timestamp>{i.timestamp}</Timestamp>
                      </Info>
                      <Body>{i.body}</Body>
                    </AdsDiv>
                  );
                })}
              </div>
            );
          }
        })}
    </Wrapper>
  );
};

export default AllAds;

const Wrapper = styled.div`
  background-color: #faf9f0;
  height: max-content;
  width: 100vw;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 40px;
`;

const AdsDiv = styled.div`
  display: flex;
  border-top: solid 1px #d3d3d3;
  height: max-content;
  width: 1000px;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 25px;
  border: solid 1px #d3d3d3;
  border-radius: 5px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 250px;
  margin-top: 5px;
`;

const From = styled.p`
  font-size: 12px;
  color: darkgray;
`;

const Timestamp = styled.p`
  font-size: 12px;
  color: darkgray;
`;

const Body = styled.p`
  margin-left: 10px;
  font-size: 14px;
  color: #3d405b;
`;
