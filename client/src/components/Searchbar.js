import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
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
      <form>
        <FiSearch />
        <Input
          type="text"
          placeholder="search a user by name or forte"
          onChange={(ev) => {
            setResult(ev.target.value);
          }}
        ></Input>
        <button aria-label="search" onClick={(ev) => handleSearch(ev)}>
          <IoPawSharp />
        </button>
      </form>
    </Searchdiv>
  );
};

export default Searchbar;

const Searchdiv = styled.div`
  height: 50px;
  width: 400px;
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 325px;
  height: 25px;
  font-family: "Raleway";
`;
