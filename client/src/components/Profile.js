import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UsersContext } from "./UsersContext";
import { IoStarOutline } from "react-icons/io5";

const Profile = () => {
  const { profile, setProfile } = useContext(UsersContext);
  const { profileId } = useParams();

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
          <Image src={profile.avatar} />
          <div>{profile.name}</div>
          <div>{profile.bio}</div>
          <div>
            {" "}
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
          </div>
          <ForteContainer>
            <div>Fortes:</div>
            {profile.forte?.length > 0 &&
              profile.forte?.slice(0, 3).map((skill) => {
                return <Forte key={`id-${skill}`}>{skill}</Forte>;
              })}
          </ForteContainer>
          <div>
            <span>My Pets</span>
            {profile.myPets.map((i) => {
              return (
                <div>
                  <PetImage src={i.imageSrc} />
                  {i.name}
                </div>
              );
            })}
          </div>
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

const Div = styled.div`
  background-color: white;
  height: 800px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 20px;
`;

const Image = styled.img`
  height: 300px;
  border-radius: 40px;
  margin: 20px;
`;

const ForteContainer = styled.div`
  height: 200px;
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
