import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { IoPawSharp } from "react-icons/io5";

const Searchbar = () => {
  return (
    <Searchdiv>
      <form>
        <FiSearch />
        <Input type="text" placeholder="search by name or category"></Input>
        <button aria-label="search">
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
  width: 300px;
  height: 25px;
  font-family: "Raleway";
`;
