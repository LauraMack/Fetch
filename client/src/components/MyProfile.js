import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import placeholder from "../assets/placeholder-image2.jpeg";
import { Link, useHistory } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { FiCheckCircle } from "react-icons/fi";
import { IoStarSharp } from "react-icons/io5";
import { FaRegTimesCircle } from "react-icons/fa";

const MyProfile = () => {
  const { currentUser, myProfile } = useContext(CurrentUserContext);
  const { id } = useParams();
  let history = useHistory();

  console.log(myProfile.data.name);

  return (
    <Wrapper>
      <Div>
        <CoverDiv></CoverDiv>
        <Whitespace></Whitespace>
        <Link to={`/edit-profile/${currentUser.data._id}`}>
          <Skip>edit profile</Skip>
        </Link>
        <Image src={placeholder} />
        <Name>{myProfile.data.name}</Name>
        <RatingDiv>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </RatingDiv>
        <Bio>{myProfile.data.bio}</Bio>
        {myProfile.data.openToTrading ? (
          <Trade>
            <Check />
            Open to trading
          </Trade>
        ) : (
          <Trade>
            <Ex />
            You're not currently available to trade your time.
          </Trade>
        )}
        <InfoContainer>
          <ForteDiv>
            <ForteTitle>My Fortes:</ForteTitle>
            {myProfile.data.forte.map((skill) => {
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
            <AdsButton
              onClick={() => {
                history.push(`/my-ads/${currentUser.data._id}`);
              }}
            >
              My ads
            </AdsButton>
          </InfoDiv>
        </InfoContainer>
      </Div>
    </Wrapper>
  );
};
export default MyProfile;

const Wrapper = styled.div`
  font-family: "Raleway";
  background-color: #e1eedd;
  height: max-content;
  width: 100vw;
`;

const Div = styled.div`
  background-color: #e1eedd;
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
  background-color: #e1eedd;
  top: -25px;
`;

const AdsButton = styled.button`
  margin-top: 75px;
  background-color: #40916c;
  border: solid 1px #183a1d;
  border-radius: 5px;
  color: #e1eedd;
  padding: 20px;
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
  left: 185px;
  top: -140px;
`;
const Star = styled(IoStarSharp)`
  margin-top: 0;
  position: relative;
  right: 10px;
  color: #f6c453;
  font-size: 24px;
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
  top: -160px;
  color: #183a1d;
`;

const Check = styled(FiCheckCircle)`
  padding: 5px;
  position: relative;
  top: 8px;
`;

const ReviewRating = styled.div`
  display: flex;
  width: 280px;
  justify-content: center;
`;

const Placeholder = styled.img`
  height: 50px;
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
  margin-top: 0;
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
  left: 100px;
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

const Cancel = styled.button`
  position: relative;
  right: 100px;
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

const Skip = styled.p`
  width: 1000px;
  text-align: center;
  position: absolute;
  top: 120px;
  text-decoration: underline;
  color: #40916c;
`;

const Ex = styled(FaRegTimesCircle)`
  padding: 5px;
  position: relative;
  top: 8px;
`;
