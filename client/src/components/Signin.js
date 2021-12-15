import React, { useContext } from "react";
import styled from "styled-components";
import SignInBtn from "./auth0/SignInBtn";
import { CurrentUserContext } from "./CurrentUserContext";
import { useHistory } from "react-router";
import { UsersContext } from "./UsersContext";

const Signin = () => {
  const {
    setCurrentUser,
    setSignedIn,
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
  } = useContext(CurrentUserContext);

  const { setCurrentLatitude, setCurrentLongitude } = useContext(UsersContext);

  let history = useHistory();

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
    setError("");
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
    setError("");
  };

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
          setSignedIn(true);
          setCurrentLatitude(null);
          setCurrentLongitude(null);
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
            Not yet a member?{" "}
            <SignupButton
              onClick={() => {
                setError("");
                history.push("/signup");
              }}
            >
              Sign up for Fetch
            </SignupButton>
          </Member>
          {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
        </SignUpDiv>
      </Div>
    </Wrapper>
  );
};

export default Signin;

const Wrapper = styled.div`
  background-color: #e1eedd;
  height: max-content;
  width: 100vw;
`;

const Div = styled.div`
  background-color: #e1eedd;
  height: 410px;
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
  font-family: "Lora";
  padding: 5px;
  width: 300px;
  border-radius: 4px;
  border: solid 1px #183a1d;
  background-color: #faf9f0;
  &::placeholder {
    color: #183a1d;
  }
  &:focus {
    outline: none;
    border: solid 2px #40916c;
  }
`;

const Title = styled.p`
  width: 300px;
  text-align: center;
  font-size: 24px;
  color: #183a1d;
`;

const Label = styled.p`
  margin: 0;
  font-size: 12px;
  margin-top: 10px;
  color: #183a1d;
`;

const Button = styled.button`
  font-family: "Lora";
  width: 312px;
  margin-top: 10px;
  border-radius: 4px;
  border: solid 1px #183a1d;
  padding: 5px;
  background-color: #40916c;
  color: #e1eedd;
  font-weight: bold;
  font-size: 14px;
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
  }
`;

const Or = styled.p`
  font-size: 12px;
  color: #183a1d;
  width: 300px;
  text-align: center;
`;

const Member = styled.p`
  font-family: "Lora";
  font-size: 12px;
  width: 300px;
  text-align: center;
  margin-top: 20px;
  color: #183a1d;
`;

const SignupButton = styled.button`
  font-size: 12px;
  width: 110px;
  text-align: center;
  border-style: none;
  background-color: transparent;
  color: #40916c;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  width: 300px;
  text-align: center;
  margin: 0;
`;
