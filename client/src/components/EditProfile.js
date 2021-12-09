import React, { useContext } from "react";
import styled from "styled-components";
import placeholder from "../assets/placeholder-image2.jpeg";
import placeholderPet from "../assets/placeholder-pet.png";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { useHistory } from "react-router";

const EditProfile = () => {
  const {
    currentUser,
    myProfile,
    setMyProfile,
    name,
    setName,
    bio,
    setBio,
    forte,
    setForte,
  } = useContext(CurrentUserContext);
  let history = useHistory();

  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleBio = (ev) => {
    setBio(ev.target.value);
  };

  const handleForte = (ev) => {
    let forteArray = [...forte];
    if (ev.target.checked && !forteArray.includes(ev.target.value)) {
      forteArray = [...forte, ev.target.value];
    } else if (!ev.target.checked && forteArray.includes(ev.target.value)) {
      forteArray = forteArray.filter((value) => {
        return value !== ev.target.value;
      });
    }
    setForte(forteArray);
  };

  console.log(forte);

  const handleProfileSubmit = (ev) => {
    console.log("hello");
    ev.preventDefault();
    fetch(`/users/${currentUser.data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: currentUser.data._id,
        name,
        bio,
        forte,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          setMyProfile(data);
          window.sessionStorage.setItem("currentUser", JSON.stringify(data));
          history.push(`/my-profile/${currentUser.data._id}`);
        }
      });
  };

  return (
    <Wrapper>
      <Div>
        <Link to={"/"}>
          <Skip>Skip this step for now</Skip>
        </Link>
        <Edit>Edit Your Profile</Edit>
        <ProfileForm onSubmit={handleProfileSubmit}>
          <Image src={placeholder} />
          <UploadLink to={"#"}>
            <Upload>Upload a photo</Upload>
          </UploadLink>
          <Input type="text" placeholder="name" onChange={handleName}></Input>
          <Input type="text" placeholder="bio" onChange={handleBio}></Input>
          <ForteTitle>What's your forte?</ForteTitle>
          <ForteTitleTwo>Select all that apply</ForteTitleTwo>
          <ForteContainer>
            <ForteDiv>
              <label>
                <Checkbox
                  onChange={handleForte}
                  type="checkbox"
                  value="Dog Walking"
                ></Checkbox>
                Dog Walking
              </label>
              <label>
                <Checkbox
                  onChange={handleForte}
                  type="checkbox"
                  value="House Sitting"
                ></Checkbox>
                House Sitting
              </label>
              <label>
                <Checkbox
                  onChange={handleForte}
                  type="checkbox"
                  value="Overnight Boarding"
                ></Checkbox>
                Overnight Boarding
              </label>
            </ForteDiv>
            <ForteDiv>
              <label>
                <Checkbox
                  onChange={handleForte}
                  type="checkbox"
                  value="Daycare"
                ></Checkbox>
                Daycare
              </label>
              <label>
                <Checkbox
                  onChange={handleForte}
                  type="checkbox"
                  value="Last Minute Transport"
                ></Checkbox>
                Last Minute Transport
              </label>
              <label>
                <Checkbox
                  onChange={handleForte}
                  type="checkbox"
                  value="Drop-in Visits"
                ></Checkbox>
                Drop-in Visits
              </label>
            </ForteDiv>
          </ForteContainer>
          <ButtonDiv>
            <Button type="submit" disabled={name === ""}>
              Save Changes
            </Button>
          </ButtonDiv>
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
  position: relative;
  right: 320px;
  top: 250px;
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
  top: 260px;
  right: 317px;
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
  margin-left: 15px;
`;

const Underline = styled.div`
  border-bottom: 1px solid darkgray;
  border-top: none;
  border-right: none;
  border-left: none;
  height: 10px;
  position: relative;
  top: -280px;
  width: 900px;
  margin: 0 auto;
`;

const ButtonDiv = styled.div`
  margin-top: 25px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border-radius: 15px;
  font-family: "Raleway";
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: #8e94f2;
  color: rgb(237, 238, 255);
  font-weight: bold;
  width: 150px;
  height: 50px;
  border-style: none;
  font-size: 16px;
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
`;

const Skip = styled.p`
  width: 1000px;
  text-align: center;
  position: absolute;
  top: 120px;
  text-decoration: underline;
  color: darkgray;
`;
