import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FaReply } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import moment from "moment";

const Message = ({ message, userId }) => {
  const [replyTo, setReplyTo] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const { currentUser, status, setStatus } = useContext(CurrentUserContext);

  const handleToggleReply = (ev) => {
    setReplyTo(!replyTo);
    console.log(ev.currentTarget);
    setStatus("idle");
  };

  const handleSetMessage = (ev) => {
    setReplyMessage(ev.target.value);
  };

  const handleSendMessage = (ev) => {
    ev.preventDefault();
    setStatus("pending");
    fetch(`/contact/${userId}`, {
      method: "POST",
      body: JSON.stringify({
        _id: currentUser.data._id,
        avatar: currentUser.data.avatar,
        name: currentUser.data.name,
        timestamp: moment(new Date()).format("MMMM DD, YYYY"),
        body: replyMessage,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          setReplyMessage("");
          setStatus("success");
          setTimeout(() => {
            console.log("hello");
            setReplyTo(false);
          }, 2000);
        }
      });
  };

  return (
    <MessageDiv>
      <Info>
        <From>
          <Image src={message.avatar} />
          <Link to={`/profile/${message._id}`}>
            <Name>{message.name}</Name>
          </Link>
        </From>
        <ReplyButton aria-label="reply to message" onClick={handleToggleReply}>
          <Reply />
        </ReplyButton>
      </Info>
      <Body>{message.body}</Body>
      <Timestamp>Sent on {message.timestamp}</Timestamp>
      {replyTo && (
        <div>
          <Form onSubmit={handleSendMessage}>
            <Textarea
              placeholder={`Reply to ${message.name}`}
              onChange={handleSetMessage}
              value={replyMessage}
            />
            <SendMsgBtnDiv>
              <SendBtn type="submit">Send</SendBtn>
            </SendMsgBtnDiv>
          </Form>
          <Cancel
            onClick={() => {
              setReplyMessage("");
              setReplyTo(false);
              setStatus("idle");
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
        </div>
      )}
    </MessageDiv>
  );
};

export default Message;

const MessageDiv = styled.div`
  display: flex;
  background-color: #e8f1e4;
  height: max-content;
  width: 880px;
  padding: 15px;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 25px;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 40px;
  margin-bottom: 10px;
`;

const Info = styled.div`
  display: flex;
  width: 875px;
  justify-content: space-between;
  margin-top: 5px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #183a1d;
`;
const From = styled.div`
  display: flex;
`;
const Name = styled.p`
  text-decoration: underline;
  margin-left: 20px;
  color: #183a1d;
  font-size: 15px;
`;

const Body = styled.p`
  font-size: 17px;
  color: #183a1d;
  width: 870px;
`;

const Timestamp = styled.p`
  font-size: 14px;
  color: #183a1d;
`;

const Reply = styled(FaReply)`
  font-size: 24px;
  margin-top: 20px;
  margin-right: 10px;
  color: #40916c;
`;

const ReplyButton = styled.button`
  border-style: none;
  background-color: transparent;
  cursor: pointer;
`;

const Textarea = styled.textarea`
  background-color: #faf9f0;
  border-radius: 10px;
  border: 1px solid #f0f0f0;
  margin-bottom: 30px;
  margin-top: 3px;
  font-size: 16px;
  padding: 10px 16px;
  transition: 0.3s ease-in-out;
  height: 100px;
  width: 850px;
  margin-right: 5px;
  &:focus,
  &:hover {
    outline: none;
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
  left: 630px;
  bottom: 15px;
  padding: 10px;
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
  bottom: 68px;
  left: 5px;
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
