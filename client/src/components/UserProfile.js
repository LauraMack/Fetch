import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { UsersContext } from "./UsersContext";
import { IoStarOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { CurrentUserContext } from "./CurrentUserContext";
import pawPrint from "../assets/paw-print.png";
import Rating from "./Rating";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const UserProfile = () => {
  const { profile, setProfile } = useContext(UsersContext);
  const { currentUser, error, setError } = useContext(CurrentUserContext);
  const { profileId } = useParams();
  const [newReview, setNewReview] = useState("");
  const [reviewsUpdated, setReviewsUpdated] = useState(false);

  console.log(currentUser.data.name);

  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    //   transition: "all 0.5s ease 0s",
    // });
    fetch(`/profile/${profileId}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.data);
      });
  }, [profileId, reviewsUpdated]);

  console.log(profile.reviews);

  const starRating = {
    star: IoStarOutline,
  };

  const handleReviewChange = (ev) => {
    setNewReview(ev.target.value);
    setError("");
  };

  const handleReviewSubmit = (ev) => {
    ev.preventDefault();
    const newId = uuidv4();
    fetch(`/profile/${profileId}`, {
      method: "POST",
      body: JSON.stringify({
        _id: newId,
        from: currentUser.data.name,
        timestamp: moment(new Date()).format("MMMM DD, YYYY"),
        rating: ["star", "star", "star", "star", "star"],
        body: newReview,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          setNewReview("");
          setReviewsUpdated(!reviewsUpdated);
        }
        if (data.message === "error") {
          setError("Sorry, your review couldn't be posted. Please try again. ");
        }
      });
  };

  return (
    profile && (
      <Wrapper>
        <Div>
          <CoverDiv></CoverDiv>
          <Whitespace></Whitespace>
          <ContactDiv>
            <button>Contact {profile.name}</button>
            <div>
              <p>
                <FiCheckCircle />
                Open to trading
              </p>
            </div>
          </ContactDiv>
          <Image src={profile.avatar} />
          <Name>{profile.name}</Name>
          <RatingDiv>
            {profile.rating.map((i) => {
              const icon = starRating[i];
              return <Star>{icon ? icon() : null}</Star>;
            })}
          </RatingDiv>
          <Bio>{profile.bio}</Bio>
          {profile.reviews.map((i) => {
            return (
              <HomeFeedDiv>
                <Info>
                  <PawPrint src={pawPrint} />
                  <From>{i.from}</From>
                  <Timestamp>{i.timestamp}</Timestamp>
                </Info>
                <ReviewRating>
                  {i.rating.map((star) => {
                    const icon = starRating[star];
                    return <Star>{icon ? icon() : null}</Star>;
                  })}
                </ReviewRating>
                <Body>{i.body}</Body>
              </HomeFeedDiv>
            );
          })}
        </Div>
        <ReviewDiv>
          <Form onSubmit={handleReviewSubmit}>
            <p>Leave a Review</p>
            <Rating />
            <Input
              type="text"
              placeholder="write your review"
              onChange={handleReviewChange}
            ></Input>
            <SendMsgBtnDiv>
              <Cancel>Cancel</Cancel>
              <SendBtn type="submit">Submit</SendBtn>
              {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
            </SendMsgBtnDiv>
          </Form>
        </ReviewDiv>
      </Wrapper>
    )
  );
};

export default UserProfile;

const Wrapper = styled.div`
  font-family: "Raleway";
  background-color: #faf9f0;
  height: max-content;
  width: 100vw;
`;

const Div = styled.div`
  background-color: #faf9f0;
  height: max-content;
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  border-style: solid;
  border-width: 1px;
  border-color: #d3d3d3;
  border-radius: 5px;
`;

const CoverDiv = styled.div`
  height: 200px;
  position: relative;
  background-color: lightsteelblue;
`;

const Whitespace = styled.div`
  height: 40px;
  position: relative;
  background-color: #faf9f0;
  top: -25px;
`;

const Image = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 150px;
  position: relative;
  z-index: 2;
  top: -150px;
  left: 350px;
`;

const Name = styled.h2`
  color: #3d405b;
  width: 500px;
  position: relative;
  text-align: center;
  top: -130px;
  left: 230px;
  font-size: 20px;
`;

const Bio = styled.h3`
  border-radius: 15px;
  width: 500px;
  position: relative;
  text-align: center;
  font-size: 16px;
  left: 230px;
  top: -150px;
  color: #3d405b;
`;

const RatingDiv = styled.div`
  padding: 10px;
  color: black;
  display: flex;
  font-size: 20px;
  margin: 0 auto;
  width: 500px;
  position: relative;
  left: 185px;
  top: -140px;
`;
const Star = styled.p`
  margin: 0;
  color: #edb230;
`;

const ContactDiv = styled.div`
  display: flex;
  width: 900px;
  margin: 0 auto;
  justify-content: space-between;
`;

const Forte = styled.h3`
  margin-bottom: 40px;
  padding: 15px;
  border-radius: 15px;
  width: 500px;
  position: relative;
  left: 400px;
  top: -150px;
  text-align: center;
  font-size: 16px;
`;

const Underline = styled.div`
  border-bottom: 1px solid lightgray;
  border-top: none;
  border-right: none;
  border-left: none;
  height: 10px;
  position: relative;
  top: -140px;
  width: 900px;
  margin: 0 auto;
`;

const ReviewRating = styled.div`
  display: flex;
  width: 280px;
  justify-content: center;
`;

const HomeFeedDiv = styled.div`
  display: flex;
  border-top: solid 1px #d3d3d3;
  height: max-content;
  width: 1000px;
  flex-direction: column;
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

const PawPrint = styled.img`
  height: 40px;
  width: 50px;
  border-radius: 40px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 250px;
  margin-top: 5px;
`;

const From = styled.p`
  font-size: 12px;
  color: #3d405b;
`;

const Timestamp = styled.p`
  font-size: 12px;
  color: #3d405b;
`;

const Body = styled.p`
  margin-left: 10px;
  font-size: 14px;
  color: #3d405b;
`;

const Input = styled.input`
  height: 100px;
  width: 600px;
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  width: 300px;
  text-align: center;
  margin-top: 10px;
`;
