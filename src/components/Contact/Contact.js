import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { HiPhone, HiMail } from "react-icons/hi";
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
  InfoContainer,
  Phone,
  Adress,
  Mail,
  ContactTitle,
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
        <InfoContainer>
          {/* Need to style */}
          <Adress>
            <FiMapPin />
            <ContactTitle>Belgrade, Serbia</ContactTitle>
          </Adress>
          <Phone>
            <HiPhone />
            <ContactTitle>+381613631480</ContactTitle>
          </Phone>
          <Mail>
            <HiMail />
            <ContactTitle>gadzic.dimitrije97@gmail.com</ContactTitle>
          </Mail>
        </InfoContainer>
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
