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
            history.push(`/category/House%20Sitting`);
          }}
        >
          House Sitting
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("drop-in%20visits");
            history.push(`/category/Drop-in%20Visits`);
          }}
        >
          Drop-in Visits
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("dog%20walking");
            history.push(`/category/Dog%20Walking`);
          }}
        >
          Dog Walking
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("last%20minute%20transport");
            history.push(`/category/Last%20Minute%20Transport`);
          }}
        >
          Last Minute Transport
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("daycare");
            history.push(`/category/Daycare`);
          }}
        >
          Daycare
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("overnight%20boarding");
            history.push(`/category/Overnight%20Boarding`);
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
    color: #183a1d;
    background-color: #f6c453;
  }
`;

const Title = styled.p`
  text-align: center;
  color: #183a1d;
  font-size: 18px;
`;

const Div = styled.div`
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  justify-content: center;
`;
