import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import dogWalker from "../assets/dog-walker.jpeg";
import moment from "moment";

const MyAds = () => {
  const { currentUser, myAds, setMyAds } = useContext(CurrentUserContext);
  let history = useHistory();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    fetch(`/my-ads/${currentUser.data._id}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAds(data.data.ads);
        window.sessionStorage.setItem("currentUser", JSON.stringify(data));
      });
  }, []);

  return (
    <Wrapper>
      {!myAds || myAds.length < 1 ? (
        <Container>
          <NoAdsDiv>
            <Title>No ads yet...</Title>
            <PostAd
              onClick={() => {
                history.push("/all-ads");
              }}
            >
              Post an Ad
            </PostAd>
          </NoAdsDiv>
          <Illustration src={dogWalker} />
        </Container>
      ) : (
        <div>
          <div>
            <Title>My ads</Title>
          </div>
          {myAds &&
            myAds.map((ad) => {
              return (
                <AdsDiv>
                  <Info>
                    <Link to={`/my-profile/${currentUser.data._id}`}>
                      <Image src={ad.avatar} />
                    </Link>
                    <Link to={`/my-profile/${currentUser.data._id}`}>
                      <From>{ad.name}</From>
                    </Link>
                    <From>-</From>
                    <Timestamp>
                      {moment(ad.timestamp).format("MMMM DD, YYYY")}
                    </Timestamp>
                  </Info>
                  <Body>{ad.body}</Body>
                </AdsDiv>
              );
            })}
        </div>
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
  background-color: #faf9f0;
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

const Title = styled.div`
  margin: 0 auto;
  text-align: center;
  color: #183a1d;
  font-size: 40px;
  margin-top: 120px;
  margin-bottom: 80px;
`;

const Container = styled.div`
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NoAdsDiv = styled.div`
  width: 500px;
  margin-right: 50px;
`;

const Illustration = styled.img`
  height: 500px;
  margin-left: 50px;
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
