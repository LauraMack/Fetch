import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { UsersContext } from "./UsersContext";
import { Link } from "react-router-dom";
import moment from "moment";
import { CurrentUserContext } from "./CurrentUserContext";
import dog from "../assets/dog2.png";
import Loading from "./Loading";

const AllAds = () => {
  const { allUsers, adsUpdated, setAdsUpdated } = useContext(UsersContext);
  const { currentUser, error, setError, status, setStatus } =
    useContext(CurrentUserContext);
  const [allAds, setAllAds] = useState([]);
  const [newAd, setNewAd] = useState("");

  useEffect(() => {
    let adsArray = [];
    if (allUsers.data) {
      allUsers.data.forEach((i) => {
        if (i.ads && i.ads.length > 0) {
          i.ads.forEach((ad) => {
            let newDate = new Date(ad.timestamp);
            let newAdsArray = {
              _id: i._id,
              name: i.name,
              avatar: i.avatar,
              timestamp: newDate,
              body: ad.body,
            };
            adsArray.push(newAdsArray);
            let sortedAdsArray = adsArray.sort((a, b) => {
              return a.timestamp - b.timestamp;
            });
            let reversed = sortedAdsArray.reverse();
            setAllAds(reversed);
          });
        }
      });
    }
  }, [allUsers]);

  console.log(currentUser.data.ads);

  const handleAdChange = (ev) => {
    setNewAd(ev.target.value);
    setError("");
  };

  const handleAdSubmit = (ev) => {
    ev.preventDefault();
    setStatus("pending");
    fetch("/all-ads", {
      method: "POST",
      body: JSON.stringify({
        _id: currentUser.data._id,
        avatar: currentUser.data.avatar,
        name: currentUser.data.name,
        timestamp: new Date(),
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
          setAdsUpdated(!adsUpdated);
          currentUser.data.ads.push(data.data);
          console.log(data.data, "NEW AD");
          console.log(currentUser.data.ads);
          setStatus("success");
          setNewAd("");
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
          value={newAd}
          onChange={handleAdChange}
          type="text"
          placeholder="What are you looking for?"
        ></Input>
        <SendMsgBtnDiv>
          <SendBtn type="submit" disabled={newAd === ""}>
            Submit
          </SendBtn>
          {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
        </SendMsgBtnDiv>
        {status === "pending" && (
          <LoadDiv>
            <Loading />
          </LoadDiv>
        )}
      </Form>
      <TitleDiv>
        <Dog src={dog} />
        <Title>Recent ads</Title>
      </TitleDiv>
      {allAds &&
        allAds.map((ad) => {
          return (
            <div>
              <AdsDiv>
                <InfoContainer>
                  <Info>
                    <Link to={`/profile/${ad._id}`}>
                      <Image src={ad.avatar} />
                    </Link>
                    <Link to={`/profile/${ad._id}`}>
                      <From>{ad.name}</From>
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

export default AllAds;

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

const Dog = styled.img`
  position: relative;
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
  position: relative;
  left: 710px;
  margin: 10px;
  background-color: #40916c;
  color: #e1eedd;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  width: 100px;
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
  }
`;

const Input = styled.input`
  height: 100px;
  width: 1000px;
  font-size: 20px;
  text-align: center;
  margin-top: 25px;
  background-color: #faf9f0;
  border: solid 1px #183a1d;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: solid 2px #40916c;
  }
  &::placeholder {
    color: #183a1d;
  }
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
  color: #183a1d;
  font-size: 24px;
`;

const TitleDiv = styled.div`
  width: 1000px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const LoadDiv = styled.div`
  height: 100px;
  width: 100px;
  margin-left: 720px;
  margin-top: -50px;
  position: relative;
`;
