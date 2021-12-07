import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UsersContext } from "./UsersContext";
import { IoStarOutline } from "react-icons/io5";

const Profile = () => {
  const { profile, setProfile } = useContext(UsersContext);
  const { profileId } = useParams();

  const starRating = {
    star: IoStarOutline,
  };

  useEffect(() => {
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
          <CoverContainer></CoverContainer>
          <WhiteSpace></WhiteSpace>
          <Image src={profile.avatar} />
          <Info>
            <Name>{profile.name}</Name>
            <Bio>{profile.bio}</Bio>
            {/* <Map>MAP</Map> */}
          </Info>
          <Rating>
            {" "}
            {profile.rating.map((i) => {
              const icon = starRating[i];
              return <Star>{icon ? icon() : null}</Star>;
            })}
          </Rating>
          <ForteContainer>
            <Fortes>Fortes:</Fortes>
            {profile.forte?.length > 0 &&
              profile.forte?.slice(0, 3).map((skill) => {
                return <Forte key={`id-${skill}`}>{skill}</Forte>;
              })}
          </ForteContainer>
          <PetDiv>
            <span>My Pets</span>
            {profile.myPets.map((i) => {
              return (
                <div>
                  <PetImage src={i.imageSrc} />
                  {i.name}
                </div>
              );
            })}
          </PetDiv>
        </Div>
      </Wrapper>
    )
  );
};

export default Profile;

const Wrapper = styled.div`
  font-family: "Raleway";
  background-color: rgb(237, 238, 255);
  height: max-content;
  width: 100vw;
`;

const CoverContainer = styled.div`
  height: 200px;
  background-color: #5c65eb;
  position: relative;
  border-radius: 20px;
`;

const WhiteSpace = styled.div`
  height: 40px;
  background-color: white;
  position: relative;
  top: -40px;
`;

const Div = styled.div`
  background-color: white;
  height: 800px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 20px;
`;

const Image = styled.img`
  border-style: solid;
  border-width: 2px;
  border-color: #8e94f2;
  height: 250px;
  border-radius: 80px;
  margin: 20px;
  position: absolute;
  z-index: 2;
  top: 250px;
`;

const ForteContainer = styled.div`
  height: 200px;
  margin-top: 10px;
  margin-left: 60px;
`;

const Fortes = styled.div`
  width: 200px;
  text-align: center;
`;

const Forte = styled.li`
  list-style-type: none;
  font-size: 14px;
  background-color: #558b6e;
  border-radius: 20px;
  width: 200px;
  margin: 5px;
  padding: 5px;
  text-align: center;
  color: #e5ebea;
`;

const PetImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 40px;
`;

const Name = styled.div`
  margin-top: 120px;
  margin-left: 120px;
  font-size: 24px;
  font-weight: bold;
`;

const Bio = styled.div`
  margin-top: 20px;
  margin-left: 50px;
`;

const Map = styled.div`
  height: 200px;
  width: 300px;
  border-style: solid;
  border-width: 2px;
  margin-top: -40px;
  margin-right: 20px;
`;

const Info = styled.div`
  display: flex;
  /* border-style: solid;
  border-width: 2px; */
  justify-content: space-around;
`;

const Star = styled.p`
  margin: 0;
  font-size: 20px;
`;

const Rating = styled.div`
  display: flex;
  margin-left: 110px;
`;

const PetDiv = styled.div`
  display: flex;
`;
