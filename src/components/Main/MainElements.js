import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-self: center;
  flex-direction: column;
  position: absolute;
  left: 45%;
  top: 35%;

  @media screen and (max-width: 1200px) {
    left: 45%;
    top: 34;
  }

  @media screen and (max-width: 768px) {
    left: 20%;
    top: 35%;
  }
`;

export const MainParagraph = styled.p`
  color: #fff;
  font-size: 64px;
  font-weight: 500;
  line-height: 75px;
`;
