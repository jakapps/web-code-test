import { FC } from "react";
import styled from "styled-components";

type Card = {
  title: string,
  body: string,
  large?: boolean
};

const Container = styled.div`
  box-shadow: 0px 2px 3px #ddd;
  padding: 14px;
`;

const Heading = styled.h2<{ large: boolean }>`
  color: #5045CD;
  background: white;
  font-size: ${props => props.large ? "25px" : "21px"}
`;

const Body = styled.p<{ large: boolean }>`
  font-size: ${props => props.large ? "18px" : "16px"}
`;

const Card: FC<Card> = ({ title, body, large = false }) => {

  return (
    <Container>
      <Heading large={large}>{title}</Heading>
      <Body large={large}>{body}</Body>
    </Container>
  );
};

export default Card;