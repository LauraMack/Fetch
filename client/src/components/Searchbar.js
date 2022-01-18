import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { useHistory } from "react-router";

const Searchbar = ({ result, setResult }) => {
  let history = useHistory();

  const handleSearch = (ev) => {
    ev.preventDefault();
    if (result) {
      history.push(`/search/${result}`);
    }
  };

  return (
    <Searchdiv>
      <Input
        type="text"
        placeholder="Search by name or forte"
        placeholderTextColor="#3d405b"
        onChange={(ev) => {
          setResult(ev.target.value);
        }}
      ></Input>
      <Button aria-label="search" onClick={(ev) => handleSearch(ev)}>
        <Paw>
          <FiArrowRight />
        </Paw>
      </Button>
    </Searchdiv>
  );
};

export default Searchbar;

const Searchdiv = styled.div`
  height: 50px;
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 500px;
  height: 25px;
  margin-left: 90px;
  font-family: "Montserrat";
  background-color: #faf9f0;
  border: solid 1px #3d405b;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  color: #3d405b;
  &:focus {
    outline: none;
    border: solid 2px #40916c;
  }
  &::placeholder {
    color: #183a1d;
  }
`;

const Button = styled.button`
  margin-left: 5px;
  height: 48px;
  width: 80px;
  padding: 10px;
  background-color: transparent;
  border-style: none;
  border-radius: 5px;
  color: #f4f1de;
  font-size: 20px;
  position: relative;
  z-index: 10;
  right: 70px;
  cursor: pointer;
`;

const Paw = styled.p`
  color: #183a1d;
  margin-top: 5px;
  &:hover {
    color: #183a1d;
  }
`;
