import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { UsersContext } from "./UsersContext";
import { IoStarSharp } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { FaRegTimesCircle } from "react-icons/fa";
import { CurrentUserContext } from "./CurrentUserContext";
import placeholder from "../assets/placeholder-image2.jpeg";
import Rating from "./Rating";
import moment from "moment";
import Loading from "./Loading";
import { v4 as uuidv4 } from "uuid";

const UserProfile = () => {
  const { profile, setProfile, rating, setRating } = useContext(UsersContext);
  const { currentUser, error, setError, myProfile, status, setStatus } =
    useContext(CurrentUserContext);
  const { profileId } = useParams();
  const [newReview, setNewReview] = useState("");
  const [reviewsUpdated, setReviewsUpdated] = useState(false);

  let history = useHistory();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    fetch(`/profile/${profileId}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.data);
      });
  }, [profileId, reviewsUpdated]);

  console.log(profile);

  const starRating = {
    star: IoStarSharp,
  };

  const handleReviewChange = (ev) => {
    setNewReview(ev.target.value);
    setError("");
  };

  const handleReviewSubmit = (ev) => {
    ev.preventDefault();
    setStatus("pending");
    const newId = uuidv4();
    fetch(`/profile/${profileId}`, {
      method: "POST",
      body: JSON.stringify({
        _id: newId,
        avatar: currentUser.data.avatar,
        from: currentUser.data.name,
        timestamp: moment(new Date()).format("MMMM DD, YYYY"),
        rating: ratingArray,
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
          setStatus("success");
        }
        if (data.message === "error") {
          setError("Sorry, your review couldn't be posted. Please try again. ");
        }
      });
  };
  let ratingArray = [];
  ratingArray.length = rating;
  console.log(ratingArray);
  return (
    <Wrapper>
      {profile ? (
        <div>
          <Div>
            <CoverDiv></CoverDiv>
            <Whitespace></Whitespace>
            <div></div>
            <Image src={profile.avatar} />
            <Name>{profile.name}</Name>
            <RatingDiv>
              {profile.rating.map((i) => {
                const icon = starRating[i];
                return <Star>{icon ? icon() : null}</Star>;
              })}
            </RatingDiv>
            <Bio>{profile.bio}</Bio>
            {profile.openToTrading === true ? (
              <Trade>
                <Check />
                Open to trading
              </Trade>
            ) : (
              <Trade>
                <Ex />
                {profile.name} isn't currently available to trade their time.
              </Trade>
            )}
            <InfoContainer>
              <ForteDiv>
                <ForteTitle>{profile.name}'s Fortes:</ForteTitle>
                {profile.forte.map((skill) => {
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
              </ForteDiv>
              <InfoDiv>
                <Contact>Contact {profile.name}</Contact>

                <AdsButton
                  onClick={() => {
                    history.push(`/users/ads/${profile._id}`);
                  }}
                >
                  {profile.name}'s Ads
                </AdsButton>
              </InfoDiv>
            </InfoContainer>
          </Div>
          <TitleDiv>
            <ReviewsTitle>User Reviews</ReviewsTitle>
          </TitleDiv>
          {profile.reviews.map((i) => {
            return (
              <ReviewsDiv>
                <Info>
                  <Placeholder
                    src={
                      currentUser && i.from === currentUser.data.name
                        ? currentUser.data.avatar
                        : placeholder
                    }
                  />
                  <From>{i.from}</From>
                  <Timestamp>{i.timestamp}</Timestamp>
                  <ReviewRating>
                    {i.rating.map((star) => {
                      const icon = starRating.star;
                      return <Star>{icon()}</Star>;
                    })}
                  </ReviewRating>
                </Info>
                <Body>{i.body}</Body>
              </ReviewsDiv>
            );
          })}
          <ReviewDiv>
            <Form onSubmit={handleReviewSubmit}>
              <LeaveRvw>Leave a Review</LeaveRvw>
              <Rating />
              <Input
                type="text"
                placeholder="write your review"
                onChange={handleReviewChange}
                value={newReview}
              ></Input>
              <SendMsgBtnDiv>
                <SendBtn type="submit" disabled={newReview === ""}>
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
            <Cancel
              onClick={() => {
                setNewReview("");
              }}
            >
              Cancel
            </Cancel>
          </ReviewDiv>{" "}
        </div>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

export default UserProfile;

const Wrapper = styled.div`
  font-family: "Raleway";
  background-color: #e1eedd;
  height: max-content;
  width: 100vw;
`;

const Div = styled.div`
  background-color: #faf9f0;
  height: 850px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  border-style: solid;
  border-width: 1px;
  border-color: #d3d3d3;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-evenly;
  position: relative;
  top: -160px;
  left: 50px;
  height: 400px;
`;

const LeaveRvw = styled.p`
  color: #183a1d;
  font-size: 18px;
`;

const ForteTitle = styled.p`
  color: #183a1d;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 20px;
`;

const ReviewsDiv = styled.div`
  background-color: #faf9f0;
  height: max-content;
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #d3d3d3;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
const TitleDiv = styled.div`
  width: 1000px;
  text-align: center;
  margin: 0 auto;
`;
const ReviewsTitle = styled.h2`
  color: #183a1d;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const ReviewDiv = styled.div`
  background-color: #e1eedd;
  height: max-content;
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #d3d3d3;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const CoverDiv = styled.div`
  height: 200px;
  position: relative;
  background-color: #40916c;
  border-radius: 5px;
`;

const Whitespace = styled.div`
  height: 40px;
  position: relative;
  background-color: #faf9f0;
  top: -25px;
`;

const AdsButton = styled.button`
  background-color: #40916c;
  border: solid 1px #183a1d;
  border-radius: 5px;
  color: #e1eedd;
  padding: 20px;
  font-size: 18px;
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
  }
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
  color: #183a1d;
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
  color: #183a1d;
`;

const RatingDiv = styled.div`
  padding: 10px;
  color: black;
  display: flex;
  font-size: 20px;
  margin: 0 auto;
  width: 500px;
  position: relative;
  left: 195px;
  top: -140px;
`;
const Star = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  position: relative;
  right: 10px;
  color: #f6c453;
  font-size: 18px;
`;

const ForteDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -100px;
`;

const Contact = styled.button`
  background-color: #40916c;
  border: solid 1px #183a1d;
  border-radius: 5px;
  font-size: 18px;
  color: #e1eedd;
  padding: 20px;
  margin-bottom: 10px;
  margin-top: 40px;
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
  }
`;

const Forte = styled.li`
  font-family: "Lora";
  list-style-type: none;
  font-size: 14px;
  background-color: #40916c;
  border-radius: 5px;
  width: 400px;
  margin: 5px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  color: #e5ebea;
  &:hover {
    color: #183a1d;
    background-color: #f6c453;
  }
`;

const Trade = styled.p`
  color: #183a1d;
  border-radius: 15px;
  width: 500px;
  position: relative;
  text-align: center;
  font-size: 16px;
  left: 230px;
  top: -150px;
  color: #183a1d;
`;

const Check = styled(FiCheckCircle)`
  padding: 5px;
  position: relative;
  top: 8px;
`;

const Ex = styled(FaRegTimesCircle)`
  padding: 5px;
  position: relative;
  top: 8px;
`;

const ReviewRating = styled.div`
  display: flex;
  position: relative;
  top: 10px;
  height: 30px;
`;

const Placeholder = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 40px;
`;

const Info = styled.div`
  display: flex;
  width: 400px;
  margin-top: 5px;
`;

const From = styled.p`
  font-size: 12px;
  color: #183a1d;
  margin-bottom: 0;
  width: 60px;
  margin-left: 15px;
`;

const Timestamp = styled.p`
  font-size: 12px;
  color: #183a1d;
  margin-bottom: 0;
  width: 140px;
`;

const Body = styled.p`
  margin-left: 10px;
  font-size: 14px;
  color: #183a1d;
  margin-top: 15px; ;
`;

const Input = styled.input`
  height: 100px;
  width: 800px;
  text-align: center;
  font-size: 16px;
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
  left: 610px;
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

const Cancel = styled.button`
  position: relative;
  bottom: 60px;
  left: 88px;
  margin: 10px;
  background-color: #40916c;
  color: #e1eedd;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  width: 100px;
  &:hover {
    background-color: #f6c453;
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

const LoadDiv = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  top: 1890px;
  left: 1150px;
`;
