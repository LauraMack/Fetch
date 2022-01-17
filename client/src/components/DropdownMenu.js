import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ul>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FiMenu />
        </button>
        {open && <DropdownBox></DropdownBox>}
        {/* <Link>
          <ListItem>
            <MenuDiv>My Profile</MenuDiv>
          </ListItem>
        </Link>
        <Link>
          <ListItem>
            <MenuDiv>Edit Profile</MenuDiv>
          </ListItem>
        </Link>
        <Link>
          <ListItem>
            <MenuDiv>Favourites</MenuDiv>
          </ListItem>
        </Link>
        <Link>
          <ListItem>
            <MenuDiv>Messages</MenuDiv>
          </ListItem>
        </Link>
        <Link>
          <ListItem>
            <MenuDiv>Sign out</MenuDiv>
          </ListItem>
        </Link> */}
      </ul>
    </div>
  );
};

export default DropdownMenu;

const DropdownBox = styled.div`
  position: absolute;
  width: 300px;
`;
