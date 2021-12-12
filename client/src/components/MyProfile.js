import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import placeholder from "../assets/placeholder-image2.jpeg";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const MyProfile = () => {
  const { currentUser, myProfile } = useContext(CurrentUserContext);
  const { id } = useParams();

  console.log(myProfile.data.name);

  return (
    <Wrapper>
      <Div>
        <Link to={`/edit-profile/${currentUser.data._id}`}>
          <Skip>edit profile</Skip>
        </Link>
        <Image src={placeholder} />
        <UploadLink to={"#"}>
          <Upload>Upload a photo</Upload>
        </UploadLink>
        <Name>{myProfile.data.name}</Name>
        <Bio>{myProfile.data.bio}</Bio>
        <Underline></Underline>
        <Forte>Fortes:</Forte>
        {myProfile.data.forte?.length > 0 &&
          myProfile.data.forte?.slice(0, 3).map((skill) => {
            return <Forte key={`id-${skill}`}>{skill}</Forte>;
          })}
      </Div>
    </Wrapper>
  );
};
export default MyProfile;

const Wrapper = styled.div`
  font-family: "Raleway";
  background-color: #faf9f0;
  height: max-content;
  width: 100vw;
`;

const Div = styled.div`
  background-color: white;
  height: 600px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 80px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const Image = styled.img`
  border-style: solid;
  border-width: 2px;
  border-color: darkgray;
  height: 250px;
  width: 250px;
  border-radius: 80px;
  position: relative;
  top: 60px;
  left: 60px;
`;

const Upload = styled.p`
  position: relative;
  width: 250px;
  text-align: center;
  top: 60px;
  left: 60px;
`;

const UploadLink = styled(Link)`
  text-decoration: underline;
`;

const Name = styled.h2`
  margin-bottom: 40px;
  padding: 15px;
  border-radius: 15px;
  color: black;
  width: 500px;
  position: relative;
  left: 400px;
  top: -200px;
  text-align: center;
`;

const Bio = styled.h3`
  margin-bottom: 40px;
  padding: 15px;
  border-radius: 15px;
  width: 500px;
  position: relative;
  left: 400px;
  top: -200px;
  text-align: center;
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

const Skip = styled.p`
  width: 1000px;
  text-align: center;
  position: absolute;
  top: 120px;
  text-decoration: underline;
  color: darkgray;
`;
