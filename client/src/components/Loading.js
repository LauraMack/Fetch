import React from "react";
import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div>
      <Loader></Loader>
    </div>
  );
};

export default Loading;
const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;
const spin = keyframes`
0% {
  transform: rotate(0deg);
} 100% {
  transform: rotate(360deg)
}

`;

const Loader = styled.div`
  border-top: 8px solid #faf9f0;
  border-right: 8px solid #40916c;
  border-bottom: 8px solid #183a1d;
  border-left: 8px solid #f6c453;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 2s linear infinite;
`;
