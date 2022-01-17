import React, { useContext, useState } from "react";
import styled from "styled-components";
import placeholder from "../assets/placeholder-image2.jpeg";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { useHistory } from "react-router";

const EditProfile = () => {
  const {
    currentUser,
    setCurrentUser,
    name,
    setName,
    bio,
    setBio,
    forte,
    setForte,
    openToTrading,
    setOpenToTrading,
  } = useContext(CurrentUserContext);
  const [url, setUrl] = useState("");
  let history = useHistory();

  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleBio = (ev) => {
    setBio(ev.target.value);
  };

  const handleAvailability = (ev) => {
    if (ev.target.value === "Yes" && ev.target.checked) {
      setOpenToTrading(true);
    } else if (!ev.target.checked) {
      setOpenToTrading(false);
    }
  };
  console.log(openToTrading);

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

  const uploadImage = (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.append("file", ev.target.files[0]);
    data.append("upload_preset", "gbx7psse");
    data.append("cloud_name", "dnbqibbaq");
    fetch("https://api.cloudinary.com/v1_1/dnbqibbaq/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      });
  };

  console.log(currentUser.data.ads);

  const handleProfileSubmit = (ev) => {
    ev.preventDefault();
    fetch(`/users/${currentUser.data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: currentUser.data._id,
        avatar: url ? url : placeholder,
        name,
        bio,
        forte,
        openToTrading,
        rating: [],
        ads: currentUser.data.ads ? currentUser.data.ads : [],
        reviews: [],
        messages: [],
        favourites: currentUser.data.favourites
          ? currentUser.data.favourites
          : [],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          setCurrentUser(data);
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
          <Image src={url ? url : placeholder} />
          <InputDiv>
            <Input
              type="text"
              placeholder="name"
              onChange={handleName}
              required
            ></Input>
            <Input type="text" placeholder="bio" onChange={handleBio}></Input>
          </InputDiv>
          <Upload>
            <input type="file" onChange={uploadImage}></input>
          </Upload>
          <Trade>
            We love to see pet owners helping each other out. How do you feel
            about lending your time to others for their pet-related needs?
          </Trade>
          <TradeTwo>You can change this setting later.</TradeTwo>
          <AvailContainer>
            <label>
              <AvailCheckbox
                type="checkbox"
                value="Yes"
                onChange={handleAvailability}
              ></AvailCheckbox>
              Yes, I'm available to lend my time to others.
            </label>
          </AvailContainer>
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
            <SaveChanges type="submit" disabled={name === ""}>
              Save Changes
            </SaveChanges>
          </ButtonDiv>
        </ProfileForm>
      </Div>
    </Wrapper>
  );
};

export default EditProfile;

const Wrapper = styled.div`
  background-color: #e1eedd;
  height: max-content;
  width: 100vw;
`;

const Div = styled.div`
  background-color: #faf9f0;
  height: 700px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 900px;
  position: relative;
  left: 400px;
  top: -150px;
`;

const Edit = styled.h2`
  width: 900px;
  text-align: center;
  position: relative;
  color: #183a1d;
  height: 40px;
  top: 50px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #183a1d;
  margin: 0 auto;
`;

const Image = styled.img`
  border: solid 1px #183a1d;
  height: 250px;
  width: 250px;
  border-radius: 8px;
  position: relative;
  right: 320px;
  top: 250px;
`;

const Upload = styled.p`
  position: relative;
  width: 250px;
  color: #40916c;
  text-align: center;
  top: 30px;
  right: 317px;
`;

const InputDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 0;
`;

const Input = styled.input`
  margin-bottom: 40px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #183a1d;
  background: #faf9f0;
  width: 500px;
  font-size: 16px;
  &::placeholder {
    color: #183a1d;
  }
  &:focus {
    outline: none;
    border: solid 2px #40916c;
  }
`;

const AvailContainer = styled.div`
  position: relative;
  width: 250px;
  text-align: center;
  top: 35px;
  right: 317px;
  font-size: 14px;
  display: flex;
  color: #183a1d;
  flex-direction: column;
`;

const Trade = styled.p`
  position: relative;
  width: 250px;
  text-align: center;
  font-size: 14px;
  top: 40px;
  right: 317px;
  color: #183a1d;
`;

const TradeTwo = styled.p`
  position: relative;
  width: 250px;
  text-align: center;
  font-size: 12px;
  color: #40916c;
  top: 30px;
  right: 317px;
`;

const AvailCheckbox = styled.input`
  margin-right: 10px;
  margin-left: 15px;
`;

const NoAvailCheckbox = styled.input``;

const ForteDiv = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  color: #183a1d;
`;

const ForteContainer = styled.div`
  position: relative;
  top: -200px;
  left: 20px;
  display: flex;
  width: 500px;
  justify-content: space-evenly;
`;

const ForteTitle = styled.p`
  margin-bottom: 5px;
  position: relative;
  left: 20px;
  top: -220px;
  margin-left: 80px;
  width: 300px;
  text-align: center;
  color: #183a1d;
  font-size: 18px;
`;
const ForteTitleTwo = styled.p`
  position: relative;
  top: -210px;
  margin-top: 0;
  margin-left: 80px;
  left: 20px;
  width: 300px;
  text-align: center;
  font-size: 14px;
  color: #183a1d;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  margin-left: 15px;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: -300px;
`;

const SaveChanges = styled.button`
  width: 550px;
  padding: 20px;
  border-radius: 5px;
  background-color: #40916c;
  font-size: 20px;
  border-style: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: #e1eedd;
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
  }
`;

const Skip = styled.p`
  width: 200px;
  margin-left: 390px;
  text-align: center;
  position: absolute;
  z-index: 10;
  top: 120px;
  text-decoration: underline;
  color: #40916c;
  cursor: pointer;
`;
