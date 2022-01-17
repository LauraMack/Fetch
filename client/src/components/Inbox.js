import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";

const Inbox = () => {
  const { currentUser, inbox, setInbox } = useContext(CurrentUserContext);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    fetch(`/users/inbox/${currentUser.data._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          setInbox(data.data.messages);
          window.sessionStorage.setItem("currentUser", JSON.stringify(data));
        }
      });
  }, []);
  console.log(inbox);
  return (
    <Wrapper>
      {inbox &&
        inbox.map((message) => {
          return (
            <div>
              <img src={message.avatar} />
              <p>{message.name}</p>
              <p>{message.timestamp}</p>
              <p>{message.body}</p>
            </div>
          );
        })}
    </Wrapper>
  );
};
export default Inbox;

const Wrapper = styled.div`
  background-color: #e1eedd;
  height: max-content;
  width: 100vw;
`;
