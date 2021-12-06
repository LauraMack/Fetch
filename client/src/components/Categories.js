import React from "react";
import styled from "styled-components";

const Categories = () => {
  return (
    <div>
      <Title>Roam by category:</Title>
      <Button>
        <p>House Sitting</p>
      </Button>
      <Button>
        <p>Drop-in Visits</p>
      </Button>
      <Button>
        <p>Dog Walking</p>
      </Button>
      <Button>
        <p>Emergency Vet Transportation</p>
      </Button>
      <Button>
        <p>Daycare</p>
      </Button>
      <Button>
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
