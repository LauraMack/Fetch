import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignInBtn from "./auth0/SignInBtn";
import { useAuth0 } from "@auth0/auth0-react";
import { CurrentUserContext } from "./CurrentUserContext";
import { v4 as uuidv4 } from "uuid";
const Signup = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { currentUser, setCurrentUser, signedIn, setSignedIn } =
    useContext(CurrentUserContext);

  console.log(user);

  const handleRegularSignUp = (ev) => {
    ev.preventDefault();
    const newId = uuidv4();
  };

  return (
    <Wrapper>
      <Div>
        <SignUpDiv>
          <Title>Sign Up for Fetch</Title>
          <Label>Email</Label>
          <Input type="text" placeholder="email@email.com"></Input>
          <Label>Password</Label>
          <Input type="text" placeholder="password"></Input>
          <Button>Sign up</Button>
          <Or>or</Or>
          <SignInBtn />
          <Member>
            Already a member? <Link to={"/signin"}>Sign in</Link>
          </Member>
        </SignUpDiv>
      </Div>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  font-family: "Raleway";
  background-color: rgb(237, 238, 255);
  height: max-content;
  width: 100vw;
`;

const Div = styled.div`
  background-color: white;
  height: 400px;
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const SignUpDiv = styled.div`
  height: 400px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  position: relative;
  top: 30px;
  flex-direction: column;
`;

const Input = styled.input`
  font-family: "Raleway";
  padding: 5px;
  width: 300px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
`;

const Title = styled.p`
  width: 300px;
  text-align: center;
  font-size: 24px;
`;

const Label = styled.p`
  margin: 0;
  font-size: 12px;
  margin-top: 10px;
`;

const Button = styled.button`
  font-family: "Raleway";
  width: 312px;
  margin-top: 10px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  padding: 5px;
  background-color: #8e94f2;
  color: white;
  font-weight: bold;
`;

const Or = styled.p`
  font-size: 12px;
  color: grey;
  width: 300px;
  text-align: center;
  margin-top: 10px;
`;

const Member = styled.p`
  font-size: 12px;
  width: 300px;
  text-align: center;
  margin-top: 20px;
`;
