import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
const Categories = ({ setResult }) => {
  let history = useHistory();

  return (
    <div>
      <Title>Roam by category:</Title>
      <Div>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("house-sitting");
            history.push(`/category/house%20sitting`);
          }}
        >
          House Sitting
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("drop-in%20visits");
            history.push(`/category/drop-in%20visits`);
          }}
        >
          Drop-in Visits
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("dog%20walking");
            history.push(`/category/dog%20walking`);
          }}
        >
          Dog Walking
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("last%20minute%20transport");
            history.push(`/category/last%20minute%20transport`);
          }}
        >
          Last Minute Transport
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("daycare");
            history.push(`/category/daycare`);
          }}
        >
          Daycare
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("overnight%20boarding");
            history.push(`/category/overnight%20boarding`);
          }}
        >
          Overnight Boarding
        </Button>
      </Div>
    </div>
  );
};
export default Categories;

const Button = styled.button`
  margin: 10px;
  cursor: pointer;
  background-color: #40916c;
  font-weight: bold;
  width: 145px;
  border-style: none;
  border-radius: 5px;
  font-size: 16px;
  color: #faf9f0;
  font-weight: bold;
  height: 60px;
  &:hover {
    color: #f6c453;
  }
`;

const Category = styled.p`
  font-size: 16px;
  color: #faf9f0;
  font-weight: bold;
  &:hover {
    color: #3d405b;
  }
`;

const Title = styled.p`
  text-align: center;
  color: #3d405b;
`;

const Div = styled.div`
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  justify-content: center;
`;
