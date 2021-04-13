import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(5px);
  width: 100%;
  color: #fff;
`;

export const TitleWrapper = styled.div`
  width: 80%;
  margin-top: 3.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 5rem;
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    margin-top: 5rem;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  padding-bottom: 10px;
  border-bottom: 2px solid #690996;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    background: none;
  }

  @media screen and (max-width: 425px) {
  }
`;

export const Name = styled.p`
  font-size: 24px;
  padding-top: 10px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 80%;
  margin-top: 6.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1.4rem;
  }
`;

export const DescriptionContainer = styled.div`
  width: 40%;

  @media screen and (max-width: 425px) {
    margin-top: 0.5rem;
    width: 80%;
  }
`;

export const ProfileImage = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  margin-right: 3.6rem;

  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 425px) {
    margin-right: 0;
  }
`;
export const Description = styled.p`
  font-size: 24px;
  /* word-spacing: 5px; */
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 425px) {
    text-align: left;
  }
`;

export const IntrestContainer = styled.div`
  width: 80%;
  margin-top: 3.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    margin-top: 2.5rem;
    width: 100%;
  }
`;

export const IconsWrapper = styled.div`
  margin-top: 3.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 425px) {
    margin-top: 2rem;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  padding-bottom: 10px;
  border-bottom: 2px solid #690996;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const Icons = styled.div`
  font-size: 24px;
  margin: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;
