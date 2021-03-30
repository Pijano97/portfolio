import styled from "styled-components";
import { Link } from "react-router-dom";

export const IconsSocial = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100px;
  top: 1.2rem;
  right: 1.5rem;
  z-index: 9999;
  @media screen and (max-width: 768px) {
    top: 1.2rem;
    right: 6rem;
  }
`;

export const Icon = styled(Link)``;

export const IconsContant = styled.div``;
