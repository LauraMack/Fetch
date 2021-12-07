import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
const Categories = ({ setResult }) => {
  let history = useHistory();

  return (
    <div>
      <Title>Roam by category:</Title>
      <Button
        onClick={(ev) => {
          ev.preventDefault();
          setResult("house-sitting");
          history.push(`/category/house%20sitting`);
        }}
      >
        <p>House Sitting</p>
      </Button>
      <Button
        onClick={(ev) => {
          ev.preventDefault();
          setResult("drop-in%20visits");
          history.push(`/category/drop-in%20visits`);
        }}
      >
        <p>Drop-in Visits</p>
      </Button>
      <Button
        onClick={(ev) => {
          ev.preventDefault();
          setResult("dog%20walking");
          history.push(`/category/dog%20walking`);
        }}
      >
        <p>Dog Walking</p>
      </Button>
      <Button
        onClick={(ev) => {
          ev.preventDefault();
          setResult("emergency%20vet%20transportation");
          history.push(`/category/emergency%20vet%20transportation`);
        }}
      >
        <p>Emergency Vet Transportation</p>
      </Button>
      <Button
        onClick={(ev) => {
          ev.preventDefault();
          setResult("daycare");
          history.push(`/category/daycare`);
        }}
      >
        <p>Daycare</p>
      </Button>
      <Button
        onClick={(ev) => {
          ev.preventDefault();
          setResult("overnight%20boarding");
          history.push(`/category/overnight%20boarding`);
        }}
      >
        <p>Overnight Boarding</p>
      </Button>
    </div>
  );
};
export default Categories;

const Button = styled.button`
  margin: 10px;
  border-radius: 4px;
  font-family: "Raleway";
  cursor: pointer;
  background-color: transparent;
`;

const Title = styled.p`
  text-align: center;
`;
