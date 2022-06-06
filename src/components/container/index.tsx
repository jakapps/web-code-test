import { FC, ReactNode } from "react";
import styled from "styled-components";

type Container = {
  children?: ReactNode
};

const Responsive = styled.div`
  padding: 10px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1024px;
  }

  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
  }

  @media only screen and (min-width: 1536px) {
  }
`;

const Container: FC<Container> = ({ children }) => {
  return <Responsive>{children}</Responsive>
};

export default Container;