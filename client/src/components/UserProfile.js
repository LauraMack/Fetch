import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UsersContext } from "./UsersContext";
import { IoStarOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { CurrentUserContext } from "./CurrentUserContext";

const UserProfile = () => {
  const { profile, setProfile } = useContext(UsersContext);
  const { currentUser } = useContext(CurrentUserContext);
  const { profileId } = useParams();

  const starRating = {
    star: IoStarOutline,
  };

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
  }, [profileId]);

  console.log(profile);

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
          <Rating>
            {profile.rating.map((i) => {
              const icon = starRating[i];
              return <Star>{icon ? icon() : null}</Star>;
            })}
          </Rating>
          <Bio>{profile.bio}</Bio>
        </Div>
      </Wrapper>
    )
  );
};

export default UserProfile;

const Wrapper = styled.div`
  font-family: "Raleway";
  background-color: rgb(237, 238, 255);
  height: max-content;
  width: 100vw;
`;

const Div = styled.div`
  background-color: white;
  height: 800px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 30px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const CoverDiv = styled.div`
  height: 200px;
  position: relative;
  background-color: lightsteelblue;
  border-radius: 30px;
`;

const Whitespace = styled.div`
  height: 40px;
  position: relative;
  background-color: white;
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
  color: black;
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
`;

const Rating = styled.div`
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

/* <Image src={profile.avatar} />
<Info>
  <Name>{profile.name}</Name>
  <Bio>{profile.bio}</Bio>
  {/* <Map>MAP</Map> */
// </Info>
// <Rating>
//   {" "}
//   {profile.rating.map((i) => {
//     const icon = starRating[i];
//     return <Star>{icon ? icon() : null}</Star>;
//   })}
// </Rating>
// <ForteContainer>
//   <Fortes>Fortes:</Fortes>
//   {profile.forte?.length > 0 &&
//     profile.forte?.slice(0, 3).map((skill) => {
//       return <Forte key={`id-${skill}`}>{skill}</Forte>;
//     })}
// </ForteContainer>
// <PetDiv>
//   <span>My Pets</span>
//   {profile.myPets &&
//     profile.myPets.map((i) => {
//       return (
//         <div>
//           <PetImage src={i.imageSrc} />
//           {i.name}
//         </div>
//       );
//     })}
// </PetDiv> */}
