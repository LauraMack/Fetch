import React from "react";
import styled from "styled-components";
import { IoPawSharp } from "react-icons/io5";
import { useHistory } from "react-router";

const Searchbar = ({ result, setResult }) => {
  let history = useHistory();

  const handleSearch = (ev) => {
    ev.preventDefault();
    if (result) {
      history.push(`/search/${result}`);
    }
  };

  console.log(result);

  return (
    <Searchdiv>
      <Input
        type="text"
        placeholder="search a user by name or forte"
        placeholderTextColor="#3d405b"
        onChange={(ev) => {
          setResult(ev.target.value);
        }}
      ></Input>
      <Button aria-label="search" onClick={(ev) => handleSearch(ev)}>
        <IoPawSharp />
      </Button>
    </Searchdiv>
  );
};

export default Searchbar;

const Searchdiv = styled.div`
  height: 50px;
  width: 400px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 500px;
  height: 25px;
  margin-left: 10px;
  font-family: "Lora";
  background-color: #faf9f0;
  border: solid 1px #3d405b;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  color: #3d405b;
  &:focus {
    outline: none;
    border: solid 2px #81b29a;
  }
`;

const Button = styled.button`
  margin-left: 5px;
  height: 48px;
  width: 80px;
  padding: 10px;
  background-color: #40916c;
  border-style: none;
  border-radius: 5px;
  color: #f4f1de;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #3d405b;
  }
`;
