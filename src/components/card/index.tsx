import { FC } from "react";
import styled from "styled-components";

type Card = {
  title: string,
  body: string,
  large?: boolean
};

const CardLayoutContainer = styled.div<{ large: boolean }>`
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: ${props => props.large ? "100%" : "50%" };
  }

  @media only screen and (min-width: 1024px) {
    width: ${props => props.large ? "66.666666%" : "33.333333%" };
  }
`;

const CardContainer = styled.div`
  box-shadow: 0px 2px 3px #ddd;
  padding: 20px;
  background: white;
  margin: 16px;
  overflow: hidden;
  height: 200px;
`;

const Heading = styled.h2<{ large: boolean }>`
  color: #5045CD;
  font-size: ${props => props.large ? "25px" : "21px"};
  font-weight: 500;
`;

const Body = styled.p<{ large: boolean }>`
  font-size: ${props => props.large ? "18px" : "16px"};
`;

const Card: FC<Card> = ({ title, body, large = false }) => {

  return (
    <CardLayoutContainer large={large}>
      <CardContainer>
        <Heading large={large}>{title}</Heading>
        <Body large={large}>{body}</Body>
      </CardContainer>
    </CardLayoutContainer>
  );
};

export default Card;