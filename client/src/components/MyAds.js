import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";

const MyAds = () => {
  const { currentUser, myProfile } = useContext(CurrentUserContext);
  const { _id } = useParams();

  console.log(myProfile.data.ads);
  return (
    <Wrapper>
      <div>
        <h2>My ads</h2>
      </div>
      {myProfile.data.ads.map((ad) => {
        return (
          <AdsDiv>
            <Info>
              <Link
                to={
                  myProfile.data
                    ? `/my-profile/${currentUser.data._id}`
                    : `/edit-profile/${currentUser.data._id}`
                }
              >
                <Image src={ad.avatar} />
              </Link>
              <Link
                to={
                  myProfile.data
                    ? `/my-profile/${currentUser.data._id}`
                    : `/edit-profile/${currentUser.data._id}`
                }
              >
                <From>{ad.name}</From>
              </Link>
              <Timestamp>{ad.timestamp}</Timestamp>
            </Info>
            <Body>{ad.body}</Body>
          </AdsDiv>
        );
      })}
    </Wrapper>
  );
};

export default MyAds;

const Wrapper = styled.div`
  background-color: #e1eedd;
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
