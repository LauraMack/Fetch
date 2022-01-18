import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import { FiMail } from "react-icons/fi";
import Message from "./Message";
import Loading from "./Loading";

const Inbox = () => {
  const { currentUser, inbox, setInbox } = useContext(CurrentUserContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "all 1s ease 0s",
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
      {inbox ? (
        <Div>
          <TitleDiv>
            <Title>Inbox</Title>
            <Mail />
          </TitleDiv>
          {inbox.length >= 1 ? (
            inbox &&
            inbox.map((message) => {
              const userId = message._id;
              return <Message message={message} userId={userId} />;
            })
          ) : (
            <Empty>Your Inbox is empty.</Empty>
          )}
        </Div>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};
export default Inbox;

const Wrapper = styled.div`
  background-color: #e1eedd;
  height: max-content;
  width: 100vw;
`;

const Div = styled.div`
  background-color: #faf9f0;
  height: 1150px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const TitleDiv = styled.div`
  display: flex;
  width: 900px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 40px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #183a1d;
`;

const Title = styled.h3`
  font-size: 30px;
  margin-top: 40px;
  margin-bottom: 5px;
  color: #183a1d;
`;

const Mail = styled(FiMail)`
  font-size: 30px;
  margin-top: 38px;
  margin-left: 15px;
  color: #183a1d;
`;

const Empty = styled.p`
  font-size: 20px;
  width: 880px;
  text-align: center;
  margin-left: 48px;
  margin-top: 30px;
  color: #183a1d;
`;
