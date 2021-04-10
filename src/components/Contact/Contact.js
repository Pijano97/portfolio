import React, { useState } from "react";
import {
  ContactContainer,
  Title,
  Form,
  FormContainer,
  InputEmail,
  InputTitle,
  InputName,
  TextArea,
  Button,
} from "./ContactElements";

function Contact() {
  const [name, setName] = useState("");

  const namechange = (e) => {
    e.preventDefault();

    setName(e.value);
  };
  return (
    <>
      <ContactContainer>
        <Title>Contact</Title>
        <Form>
          <FormContainer>
            <InputTitle>*Name:</InputTitle>
            <InputName value={name} onChange={namechange} />
          </FormContainer>
          <FormContainer>
            <InputTitle>*Email:</InputTitle>
            <InputEmail />
          </FormContainer>
          <FormContainer>
            <InputTitle>*Message:</InputTitle>
            <TextArea />
          </FormContainer>
          <Button>SEND MESSAGE</Button>
        </Form>
      </ContactContainer>
    </>
  );
}

export default Contact;
