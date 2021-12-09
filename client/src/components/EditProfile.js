import React from "react";
import styled from "styled-components";
import placeholder from "../assets/placeholder-image2.jpeg";
import placeholderPet from "../assets/placeholder-pet.png";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <Wrapper>
      <Div>
        <Edit>Edit Your Profile</Edit>
        <Image src={placeholder} />
        <UploadLink to={"#"}>
          <Upload>Upload a photo</Upload>
        </UploadLink>
        <ProfileForm>
          <Input type="text" placeholder="name"></Input>
          <Input type="text" placeholder="bio"></Input>
          <ForteTitle>What's your forte?</ForteTitle>
          <ForteTitleTwo>Select all that apply</ForteTitleTwo>
          <ForteContainer>
            <ForteDiv>
              <label>
                <Checkbox type="checkbox"></Checkbox>Dog Walking
              </label>
              <label>
                <Checkbox type="checkbox"></Checkbox>House Sitting
              </label>
              <label>
                <Checkbox type="checkbox"></Checkbox>Overnight Boarding
              </label>
            </ForteDiv>
            <ForteDiv>
              <label>
                <Checkbox type="checkbox"></Checkbox>Daycare
              </label>
              <label>
                <Checkbox type="checkbox"></Checkbox>Last Minute Transport
              </label>
              <label>
                <Checkbox type="checkbox"></Checkbox>Drop-in Visits
              </label>
            </ForteDiv>
          </ForteContainer>
        </ProfileForm>
        <Underline></Underline>
      </Div>
      <PetDiv>
        <Edit>Upload Your Pets</Edit>
        <PetContainer>
          <PetImage src={placeholderPet} />
          <PetInput type="text" placeholder="name"></PetInput>
        </PetContainer>
        <PetContainer>
          <PetImage src={placeholderPet} />
          <PetInput type="text" placeholder="name"></PetInput>
        </PetContainer>
        <Add>Add more</Add>
      </PetDiv>
    </Wrapper>
  );
};

export default EditProfile;

const Wrapper = styled.div`
  font-family: "Raleway";
  background-color: rgb(237, 238, 255);
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

const PetDiv = styled.div`
  background-color: white;
  height: 520px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 60px;
  border-radius: 80px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const PetContainer = styled.div`
  width: 900px;
`;

const Image = styled.img`
  border-style: solid;
  border-width: 2px;
  border-color: darkgray;
  height: 250px;
  width: 250px;
  border-radius: 80px;
  margin-left: 60px;
  position: relative;
  top: 120px;
`;

const Add = styled.p`
  width: 500px;
  text-align: center;
  margin-left: 250px;
  text-decoration: underline;
  color: darkgray;
`;
const PetImage = styled.img`
  border-style: solid;
  border-width: 2px;
  border-color: darkgray;
  height: 150px;
  width: 200px;
  border-radius: 60px;
  margin-left: 90px;
  position: relative;
  top: 80px;
`;

const PetInput = styled.input`
  margin-bottom: 40px;
  margin-left: 60px;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #f0f0f0;
  background: #f0f0f0;
  width: 300px;
  font-size: 16px;
`;

const Edit = styled.h2`
  width: 900px;
  text-align: center;
  position: relative;
  height: 40px;
  top: 50px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid darkgray;
  margin: 0 auto;
`;

const Upload = styled.p`
  position: relative;
  width: 250px;
  text-align: center;
  margin-left: 60px;
  top: 120px;
`;

const UploadLink = styled(Link)`
  text-decoration: underline;
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  position: relative;
  left: 400px;
  top: -170px;
`;

const Input = styled.input`
  margin-bottom: 40px;
  padding: 15px;
  border-radius: 15px;
  border: 1px solid #f0f0f0;
  background: #f0f0f0;
  width: 500px;
  font-size: 16px;
`;

const ForteDiv = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const ForteContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-evenly;
`;

const ForteTitle = styled.p`
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: 80px;
  width: 300px;
  text-align: center;
  font-size: 18px;
`;
const ForteTitleTwo = styled.p`
  margin-top: 0;
  margin-left: 80px;
  width: 300px;
  text-align: center;
  font-size: 14px;
  color: darkgray;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Underline = styled.div`
  border-bottom: 1px solid darkgray;
  border-top: none;
  border-right: none;
  border-left: none;
  height: 100px;
  position: relative;
  top: -375px;
  width: 900px;
  margin: 0 auto;
`;
