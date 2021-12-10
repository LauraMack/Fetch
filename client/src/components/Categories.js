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
          <Category>House Sitting</Category>
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("drop-in%20visits");
            history.push(`/category/drop-in%20visits`);
          }}
        >
          <Category>Drop-in Visits</Category>
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("dog%20walking");
            history.push(`/category/dog%20walking`);
          }}
        >
          <Category>Dog Walking</Category>
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("last%20minute%20transport");
            history.push(`/category/last%20minute%20transport`);
          }}
        >
          <Category>Last Minute Transport</Category>
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("daycare");
            history.push(`/category/daycare`);
          }}
        >
          <Category>Daycare</Category>
        </Button>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            setResult("overnight%20boarding");
            history.push(`/category/overnight%20boarding`);
          }}
        >
          <Category>Overnight Boarding</Category>
        </Button>
      </Div>
    </div>
  );
};
export default Categories;

const Button = styled.button`
  margin: 10px;
  border-radius: 15px;
  font-family: "Raleway";
  cursor: pointer;
  background-color: #8e94f2;
  font-weight: bold;
  width: 120px;
  border-style: none;
`;

const Category = styled.p`
  font-size: 14px;
  color: rgb(237, 238, 255);
`;

const Title = styled.p`
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  justify-content: center;
`;
