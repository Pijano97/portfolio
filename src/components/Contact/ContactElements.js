import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(5px);
  width: 80%;
  color: #fff;
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
  background: #090d0f;
  padding: 50px 80px;
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
