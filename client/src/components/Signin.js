import React from "react";
import styled from "styled-components";

const Signin = () => {
  return (
    <Div>
      <SigninDiv>
        <Input type="text" placeholder="name"></Input>
        <Input type="text" placeholder="email"></Input>
        <Button>Sign in</Button>
      </SigninDiv>
    </Div>
  );
};

export default Signin;

const Div = styled.div`
  font-family: "Raleway";
  height: 100vh;
  width: 100vw;
`;

const SigninDiv = styled.div`
  height: 300px;
  width: 400px;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-family: "Raleway";
`;

const Button = styled.button`
  font-family: "Raleway";
`;
