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
        <Title>My ads</Title>
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
              <From>-</From>
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
  background-color: #e1eedd;
  height: max-content;
  width: 1000px;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 25px;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 250px;
  margin-top: 5px;
`;

const From = styled.p`
  font-size: 12px;
  color: #183a1d;
`;

const Timestamp = styled.p`
  font-size: 12px;
  color: #183a1d;
`;

const Body = styled.p`
  margin-left: 10px;
  font-size: 14px;
  color: #183a1d;
`;

const Title = styled.h2`
  color: #183a1d;
`;
