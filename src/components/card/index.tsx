import { FC } from "react";
import styled from "styled-components";
import { BsArrowRight } from 'react-icons/bs';

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
  padding: 26px;
  background: white;
  margin: 16px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2<{ large: boolean }>`
  color: #5045CD;
  font-size: ${props => props.large ? "25px" : "21px"};
  font-weight: 500;
  margin: 0;
`;

const Body = styled.p<{ large: boolean }>`
  font-size: ${props => props.large ? "18px" : "16px"};
  flex-grow: 1;
  overflow: hidden;
`;

const Icon = styled.div`
  color: #a8b6ff;
  text-align: right;
`;

const Card: FC<Card> = ({ title, body, large = false }) => {

  return (
    <CardLayoutContainer large={large}>
      <CardContainer>
        <Heading large={large}>{title}</Heading>
        <Body large={large}>{body}</Body>
        <Icon>
          <div aria-label="arrow-icon">
              <BsArrowRight />
          </div>
        </Icon>
      </CardContainer>
    </CardLayoutContainer>
  );
};

export default Card;