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
`;

export const Title = styled.h1`
  font-size: 36px;
  padding-bottom: 10px;
  border-bottom: 2px solid #690996;
`;

export const Name = styled.p`
  font-size: 24px;
  padding-top: 10px;
`;

export const DescriptionWrapper = styled.div`
  width: 80%;
  margin-top: 4.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptionContainer = styled.div`
  width: 40%;
`;

export const ProfileImage = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  margin-right: 3.6rem;
`;
export const Description = styled.p`
  font-size: 24px;
  /* word-spacing: 5px; */
`;

export const IntrestContainer = styled.div`
  width: 80%;
  margin-top: 3.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconsWrapper = styled.div`
  margin-top: 3.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const H2 = styled.h2`
  font-size: 24px;
  padding-bottom: 10px;
  border-bottom: 2px solid #690996;
`;

export const Icons = styled.div`
  font-size: 24px;
  margin: 20px;
`;
