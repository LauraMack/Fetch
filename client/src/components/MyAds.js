import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import dogWalker from "../assets/dog-walker.jpeg";

const MyAds = () => {
  const { currentUser, myProfile } = useContext(CurrentUserContext);
  const { _id } = useParams();

  return (
    <Wrapper>
      {myProfile.data.ads > 0 ? (
        <div>
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
        </div>
      ) : (
        <Container>
          <NoAdsDiv>
            <Title>No ads yet...</Title>
            <PostAd>Post an Ad</PostAd>
          </NoAdsDiv>
          <Illustration src={dogWalker} />
        </Container>
      )}
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
  font-size: 40px;
  margin-left: 20px;
`;

const Container = styled.div`
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NoAdsDiv = styled.div``;

const Illustration = styled.img`
  height: 500px;
`;

const PostAd = styled.button`
  width: 150px;
  border-radius: 5px;
  padding: 10px;
  background-color: #40916c;
  border-style: none;
  color: #e1eedd;
  cursor: pointer;
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
  }
`;
