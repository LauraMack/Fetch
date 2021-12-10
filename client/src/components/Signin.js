import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignInBtn from "./auth0/SignInBtn";
import { CurrentUserContext } from "./CurrentUserContext";
import { useHistory } from "react-router";

const Signin = () => {
  // const { user, isAuthenticated, isLoading } = useAuth0();
  const {
    currentUser,
    setCurrentUser,
    signedIn,
    setSignedIn,
    myProfile,
    setMyProfile,
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
  } = useContext(CurrentUserContext);

  let history = useHistory();

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
    setError("");
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
    setError("");
  };

  console.log(password);

  const handleSignIn = (ev) => {
    ev.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    fetch(`/users/${email}`, {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          setCurrentUser(data);
          setMyProfile(data);
          setSignedIn(true);
          setError("");
          window.sessionStorage.setItem("currentUser", JSON.stringify(data));
          history.push("/");
        } else if (data.message === "incorrect password") {
          setError(
            `Oops! Looks like your password is incorrect. Please try again.`
          );
        } else {
          setError(
            `We're not seeing an account associated with that email. Please sign up instead.`
          );
        }
      });
  };
  console.log(error);

  return (
    <Wrapper>
      <Div>
        <SignUpDiv>
          <Title>Sign in</Title>
          <Label>Email</Label>
          <Input
            onChange={handleEmail}
            type="email"
            placeholder="email@email.com"
          ></Input>
          <Label>Password</Label>
          <Input
            onChange={handlePassword}
            type="password"
            placeholder="password"
          ></Input>
          <Button onClick={handleSignIn}>Sign in</Button>
          <Or>or</Or>
          <SignInBtn />
          <Member>
            Not yet a member? <Link to={"/signup"}>Sign up for Fetch</Link>
          </Member>
          {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
        </SignUpDiv>
      </Div>
    </Wrapper>
  );
};

export default Signin;

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
`;

const Member = styled.p`
  font-size: 12px;
  width: 300px;
  text-align: center;
  margin-top: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  width: 300px;
  text-align: center;
  margin-top: 2px;
`;
