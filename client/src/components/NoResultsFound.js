import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const NoResultsFound = ({ searchResult }) => {
  let history = useHistory();
  const handleHomeClick = () => {
    history.push("/");
  };
  return (
    <Wrapper>
      <Div>
        <div>
          <Title>Whoops...</Title>
          <NoMatching>
            No matching results were found for "{searchResult}"
          </NoMatching>
          <TryAgain onClick={handleHomeClick}>Try again</TryAgain>
        </div>
      </Div>
    </Wrapper>
  );
};
export default NoResultsFound;

const Wrapper = styled.div`
  font-family: "Montserrat";
  background-color: #e1eedd;
  height: max-content;
  width: 100vw;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: #183a1d;
  margin-left: 100px;
  margin-top: 150px;
  font-size: 45px;
`;

const NoMatching = styled.h2`
  color: #183a1d;
  margin-left: 100px;
  font-size: 25px;
`;

const TryAgain = styled.button`
  margin-left: 100px;
  margin-top: 20px;
  font-size: 18px;
  padding: 5px;
  width: 150px;
  border-radius: 5px;
  border-style: none;
  background-color: #40916c;
  color: #e1eedd;
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
  }
`;
