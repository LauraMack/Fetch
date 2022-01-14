import React from "react";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { FiCheckCircle } from "react-icons/fi";
import { IoStarSharp } from "react-icons/io5";
import { FaRegTimesCircle } from "react-icons/fa";
import { FiUsers, FiArchive, FiEdit } from "react-icons/fi";
import leaves from "../assets/glitch.png";

const MyProfile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  let history = useHistory();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
  }, []);

  return (
    <Wrapper>
      {currentUser.data.name ? (
        <Div>
          <CoverDiv></CoverDiv>
          <Whitespace></Whitespace>
          <Image src={currentUser.data.avatar} />

          <Name>{currentUser.data.name}</Name>
          <RatingDiv>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </RatingDiv>
          <Bio>{currentUser.data.bio}</Bio>
          {currentUser.data.openToTrading ? (
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
              {currentUser.data.forte.map((skill) => {
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
              <AdsDiv>
                <AdsButton
                  onClick={() => {
                    history.push(`/my-ads/${currentUser.data._id}`);
                  }}
                >
                  <AdsIcon />
                  <Ads>My ads</Ads>
                </AdsButton>
              </AdsDiv>
              <SavedDiv>
                <SavedButton
                  onClick={() =>
                    history.push(
                      `/my-profile/${currentUser.data._id}/favourites`
                    )
                  }
                >
                  <SavedUsersIcon />
                  <Saved>Favourited users</Saved>
                </SavedButton>
              </SavedDiv>
              <SavedDiv>
                <EditButton
                  onClick={() =>
                    history.push(`/edit-profile/${currentUser.data._id}`)
                  }
                >
                  <EditIcon />
                  <Edit>Edit profile</Edit>
                </EditButton>
              </SavedDiv>
            </InfoDiv>
          </InfoContainer>
        </Div>
      ) : (
        history.push(`/edit-profile/${currentUser.data._id}`)
      )}
    </Wrapper>
  );
};
export default MyProfile;

const Wrapper = styled.div`
  font-family: "Lora";
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
  left: 40px;
  height: 400px;
`;

const ForteTitle = styled.p`
  color: #183a1d;
`;

const InfoDiv = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 25px;
`;

const AdsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const SavedDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const CoverDiv = styled.div`
  height: 200px;
  position: relative;
  border-radius: 5px;
  background-color: #40916c;
  opacity: 1;
  background-image: linear-gradient(
      30deg,
      #e1eedd 12%,
      transparent 12.5%,
      transparent 87%,
      #e1eedd 87.5%,
      #e1eedd
    ),
    linear-gradient(
      150deg,
      #e1eedd 12%,
      transparent 12.5%,
      transparent 87%,
      #e1eedd 87.5%,
      #e1eedd
    ),
    linear-gradient(
      30deg,
      #e1eedd 12%,
      transparent 12.5%,
      transparent 87%,
      #e1eedd 87.5%,
      #e1eedd
    ),
    linear-gradient(
      150deg,
      #e1eedd 12%,
      transparent 12.5%,
      transparent 87%,
      #e1eedd 87.5%,
      #e1eedd
    ),
    linear-gradient(
      60deg,
      #e1eedd77 25%,
      transparent 25.5%,
      transparent 75%,
      #e1eedd77 75%,
      #e1eedd77
    ),
    linear-gradient(
      60deg,
      #e1eedd77 25%,
      transparent 25.5%,
      transparent 75%,
      #e1eedd77 75%,
      #e1eedd77
    );
  background-size: 26px 46px;
  background-position: 0 0, 0 0, 13px 23px, 13px 23px, 0 0, 13px 23px;
`;

const Cover = styled.img`
  height: 200px;
  width: 1000px;
`;

const Whitespace = styled.div`
  height: 40px;
  position: relative;
  background-color: #faf9f0;
  top: -25px;
`;

const AdsButton = styled.button`
  background-color: transparent;
  padding: 10px;
  font-size: 18px;
  border-style: none;
  height: 50px;
  width: 100px;
  cursor: pointer;
`;

const SavedButton = styled.button`
  background-color: transparent;
  padding: 10px;
  font-size: 18px;
  border-style: none;
  height: 50px;
  width: 100px;
  cursor: pointer;
`;

const EditButton = styled.button`
  background-color: transparent;
  padding: 10px;
  font-size: 18px;
  border-style: none;
  height: 50px;
  width: 100px;
  cursor: pointer;
`;

const Saved = styled.p`
  text-align: center;
  font-size: 14px;
  color: #183a1d;
`;

const Ads = styled.p`
  text-align: center;
  font-size: 14px;
  color: #183a1d;
`;

const Edit = styled.p`
  text-align: center;
  font-size: 14px;
  color: #183a1d;
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
  font-family: "Lora";
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

const Ex = styled(FaRegTimesCircle)`
  padding: 5px;
  position: relative;
  top: 8px;
`;

const AdsIcon = styled(FiArchive)`
  font-size: 40px;
  color: #40916c;
  &:hover {
    color: #f6c453;
    transition: 0.3s ease-in-out;
  }
`;

const SavedUsersIcon = styled(FiUsers)`
  font-size: 40px;
  color: #40916c;
  &:hover {
    color: #f6c453;
    transition: 0.3s ease-in-out;
  }
`;

const EditIcon = styled(FiEdit)`
  font-size: 40px;
  color: #40916c;
  &:hover {
    color: #f6c453;
    transition: 0.3s ease-in-out;
  }
`;
