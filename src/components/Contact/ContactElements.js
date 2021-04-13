import styled from "styled-components";
import { COLORS } from "../color";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(5px);
  width: 80%;
  color: #fff;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 425px) {
    margin-top: 40px;
    width: 100%;
  }
`;

export const Title = styled.h1`
  width: 240px;
  margin-top: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 960px;
  height: 648px;
  margin-top: 3rem;
  background: ${COLORS.black};
  padding: 50px 80px;

  @media screen and (max-width: 1024px) {
    margin-top: 1rem;
    width: 450px;
    height: 600px;
    padding: 0 70px;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 425px) {
    margin-top: 2.5rem;
    width: 350px;
    height: 430px;
    padding: 5px 25px;
  }
`;

export const FormContainer = styled.div``;

export const InputName = styled.input`
  color: #fff;
  padding: 10px;
  width: 35%;
  background: none;
  border: none;
  border-bottom: 2px solid #690996;
`;
export const InputEmail = styled.input`
  color: #fff;
  background: none;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #690996;
  width: 65%;
`;

export const InputTitle = styled.p`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const TextArea = styled.input`
  color: #fff;
  padding: 100px 10px;
  background: none;
  border: none;
  border-bottom: 2px solid #690996;
  width: 90%;
  height: 1;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 425px) {
    padding: 10px 10px;
  }
`;

export const Button = styled.button`
  align-self: center;
  margin-top: 2.5rem;
  width: 300px;
  padding: 15px 20px;
  border: none;
  background: rgba(105, 9, 150, 0.5);
  color: #fff;
`;

export const InfoContainer = styled.div`
  font-size: 24px;
  position: absolute;
  top: 10rem;
  right: -300px;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const Adress = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  color: #fff;
  flex: 1;
  background: ${COLORS.black};
  transition: transform 0.6s ease;
  transform: translateX(0px);

  &:hover {
    transform: translateX(-200px);
  }
`;
export const Mail = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex: 1;
  background: ${COLORS.black};
  margin-top: 35px;
  transition: transform 0.6s ease;
  transform: translateX(0px);

  &:hover {
    transform: translateX(-200px);
  }
`;
export const Phone = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex: 1;
  background: ${COLORS.black};
  margin-top: 35px;
  transition: transform 0.6s ease;
  transform: translateX(0px);

  &:hover {
    transform: translateX(-200px);
  }
`;
