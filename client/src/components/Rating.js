import React, { useState } from "react";
import styled from "styled-components";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const Rating = () => {
  const [rating, setRating] = useState(1);

  return (
    <Div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label>
            <Input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                console.log(rating);
              }}
            />
            <StyledStarOutline />
          </label>
        );
      })}
    </Div>
  );
};

export default Rating;

const Div = styled.div`
  font-size: 50px;
`;
const StyledFullStar = styled(IoStarSharp)`
  color: #f2cc8f;
  cursor: pointer;
`;

const StyledHalfStar = styled(IoStarHalfOutline)`
  color: #f2cc8f;
`;

const StyledStarOutline = styled(IoStarOutline)`
  color: #f2cc8f;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;
