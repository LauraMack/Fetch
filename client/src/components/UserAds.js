import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import moment from "moment";

const UserAds = () => {
  const [userAds, setUserAds] = useState("");
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    fetch(`/users/ads/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAds(data.data);
      });
  }, []);
  return (
    <Wrapper>
      {userAds &&
        userAds.ads.map((ad) => {
          return (
            <div>
              <AdsDiv>
                <InfoContainer>
                  <Info>
                    <Link to={`/profile/${userAds._id}`}>
                      <Image src={userAds.avatar} />
                    </Link>
                    <Link to={`/profile/${userAds._id}`}>
                      <From>{userAds.name}</From>
                    </Link>
                    <From>-</From>
                    <Timestamp>
                      {moment(ad.timestamp).format("MMMM DD, YYYY")}
                    </Timestamp>
                  </Info>
                  <ContactButton>Contact</ContactButton>
                </InfoContainer>
                <Body>{ad.body}</Body>
              </AdsDiv>
            </div>
          );
        })}
    </Wrapper>
  );
};

export default UserAds;

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
  margin-top: 300px;
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

const InfoContainer = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-between;
`;

const ContactButton = styled.button`
  width: 170px;
  height: 30px;
  margin-top: 5px;
  margin-right: 5px;
  border-radius: 5px;
  border-style: none;
  background-color: #40916c;
  color: #e1eedd;
  cursor: pointer;
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
  }
`;
