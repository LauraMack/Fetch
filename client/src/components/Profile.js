import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { profileId } = useParams();

  return <Div>Profile</Div>;
};

export default Profile;

const Div = styled.div`
  font-family: "Raleway";
`;
