import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UsersContext } from "./UsersContext";
import { Link } from "react-router-dom";
import moment from "moment";
import placeholder from "../assets/placeholder-image2.jpeg";
import { CurrentUserContext } from "./CurrentUserContext";
import dog from "../assets/dog2.png";

const AllAds = () => {
  const { allUsers } = useContext(UsersContext);
  const { currentUser, error, setError } = useContext(CurrentUserContext);
  const [newAd, setNewAd] = useState("");
  const [adsUpdated, setAdsUpdated] = useState(false);

  console.log(allUsers.data);

  const handleAdChange = (ev) => {
    setNewAd(ev.target.value);
    setError("");
  };

  const handleAdSubmit = (ev) => {
    ev.preventDefault();
    fetch("/all-ads", {
      method: "POST",
      body: JSON.stringify({
        _id: currentUser.data._id,
        avatar: placeholder,
        name: currentUser.data.name,
        timestamp: moment(new Date()).format("MMMM DD, YYYY"),
        body: newAd,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          setNewAd("");
          setAdsUpdated(!adsUpdated);
        }
        if (data.message === "error") {
          setError("Sorry, your ad couldn't be posted. Please try again. ");
        }
      });
  };

  return (
    <Wrapper>
      <Form onSubmit={handleAdSubmit}>
        <Title>
          Need help with your pets? Post an ad to see if anyone can lend a hand.
        </Title>
        <Input
          onChange={handleAdChange}
          type="text"
          placeholder="What are you looking for?"
        ></Input>
        <SendMsgBtnDiv>
          <Cancel>Cancel</Cancel>
          <SendBtn type="submit">Submit</SendBtn>
          {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
        </SendMsgBtnDiv>
      </Form>
      <img src={dog} />
      <Title>Recent ads</Title>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SendMsgBtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 630px;
  justify-content: space-between;
`;

const SendBtn = styled.button`
  margin: 10px;
  background-color: #81b29a;
  color: #faf9f0;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  width: 100px;
  &:hover {
    background-color: #5b9e82;
  }
`;

const Cancel = styled.button`
  position: relative;
  z-index: 10;
  margin: 10px;
  background-color: #e07a5f;
  color: #faf9f0;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  width: 100px;
  &:hover {
    background-color: #ee7257;
  }
`;

const ReviewDiv = styled.div`
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

const Input = styled.input`
  height: 100px;
  width: 1000px;
  font-size: 20px;
  text-align: center;
  margin-top: 25px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  width: 300px;
  text-align: center;
  margin-top: 10px;
`;

const Title = styled.h1`
  margin-top: 20px;
  padding: 20px;
`;
