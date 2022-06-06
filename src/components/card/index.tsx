import { FC } from "react";
import styled from "styled-components";

type Card = {
  title: string
};

const H2 = styled.h2`
  color: #5045CD;
  background: white;
  font-size: 25px;
  box-shadow: 0px 2px 3px #ddd;
  padding: 14px;
`;

const Card: FC<Card> = ({ title }) => {

  return (
    <H2>{title}</H2>
  );
};

export default Card;