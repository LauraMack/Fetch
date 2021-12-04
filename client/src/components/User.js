import React from "react";

const User = ({ image, rating, name }) => {
  return (
    <div>
      <img src={image} />
      <div>{name}</div>
      <div>{rating}</div>
    </div>
  );
};

export default User;
