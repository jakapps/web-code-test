import { FC } from "react";
import styled from "styled-components";

type Card = {
  title: string,
  body: string
};

const Heading = styled.h2`
  color: #5045CD;
  background: white;
  font-size: 25px;
`;

const Container = styled.div`
  box-shadow: 0px 2px 3px #ddd;
  padding: 14px;
`;

const Body = styled.p`
  font-size: 18px;
`;

const Card: FC<Card> = ({ title, body }) => {

  return (
    <Container>
      <Heading>{title}</Heading>
      <Body>{body}</Body>
    </Container>
  );
};

export default Card;