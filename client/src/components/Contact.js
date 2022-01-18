import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { UsersContext } from "./UsersContext";
import { FiCheck, FiSend } from "react-icons/fi";
import { CurrentUserContext } from "./CurrentUserContext";
import moment from "moment";

const Contact = () => {
  const { profileId } = useParams();
  const { profile, setProfile } = useContext(UsersContext);
  const { currentUser, status, setStatus } = useContext(CurrentUserContext);
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    setStatus("idle");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 0.5s ease 0s",
    });
    fetch(`/contact/${profileId}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.data); //set profile for displaying the contactee
      });
  }, [profileId]);

  const handleNewMessage = (ev) => {
    setNewMessage(ev.target.value);
  };

  // send msg > is pushed to message array of contactee
  const handleSendMessage = (ev) => {
    ev.preventDefault();
    setStatus("pending");
    fetch(`/contact/${profileId}`, {
      method: "POST",
      body: JSON.stringify({
        _id: currentUser.data._id,
        avatar: currentUser.data.avatar,
        name: currentUser.data.name,
        timestamp: moment(new Date()).format("MMMM DD, YYYY"),
        body: newMessage,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          setNewMessage("");
          setStatus("success");
        }
      });
  };

  return (
    <Wrapper>
      <ReviewDiv>
        <TitleDiv>
          <Image src={profile.avatar} />
          <SendMsgTitle>Send a Message to {profile.name}</SendMsgTitle>
          <Envelope />
        </TitleDiv>
        <Form onSubmit={handleSendMessage}>
          <Input
            type="text"
            placeholder="Your message"
            onChange={handleNewMessage}
            value={newMessage}
          ></Input>
          <SendMsgBtnDiv>
            <SendBtn type="submit">Send</SendBtn>
          </SendMsgBtnDiv>
        </Form>
        <Cancel
          onClick={() => {
            setNewMessage("");
          }}
        >
          Cancel
        </Cancel>
        {status === "success" && (
          <ConfirmationDiv>
            <Check />
            <MessageSent>Your message has been sent!</MessageSent>
          </ConfirmationDiv>
        )}
      </ReviewDiv>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  background-color: #e1eedd;
  height: max-content;
  width: 100vw;
`;

const TitleDiv = styled.div`
  display: flex;
  width: 800px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 40px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #183a1d;
`;

const ReviewDiv = styled.div`
  background-color: #e1eedd;
  height: max-content;
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  border-style: solid;
  border-width: 1px;
  border-color: #d3d3d3;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 150px;
  position: relative;

  margin-bottom: 20px;
`;

const SendMsgTitle = styled.h3`
  color: #183a1d;
`;

const Input = styled.input`
  height: 100px;
  width: 800px;
  text-align: center;
  font-size: 16px;
  background-color: #faf9f0;
  border: solid 1px #183a1d;
  border-radius: 5px;
  margin-top: 40px;
  &:focus {
    outline: none;
    border: solid 2px #40916c;
  }
  &::placeholder {
    color: #183a1d;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SendMsgBtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 630px;
  justify-content: space-between;
`;

const SendBtn = styled.button`
  position: relative;
  left: 610px;
  margin: 10px;
  background-color: #40916c;
  color: #e1eedd;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  width: 100px;
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
  }
`;

const Cancel = styled.button`
  position: relative;
  bottom: 60px;
  left: 88px;
  margin: 10px;
  background-color: #40916c;
  color: #e1eedd;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  width: 100px;
  &:hover {
    background-color: #f6c453;
    color: #183a1d;
  }
`;

const Envelope = styled(FiSend)`
  font-size: 30px;
  color: #183a1d;
`;

const ConfirmationDiv = styled.div`
  display: flex;
  width: 800px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const MessageSent = styled.h3`
  margin-left: 20px;
  color: #183a1d;
`;
const Check = styled(FiCheck)`
  font-size: 20px;
  color: #183a1d;
`;
