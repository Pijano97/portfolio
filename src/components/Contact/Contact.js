import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
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
            Belgrade, Serbia
          </Adress>
          <Phone>
            <FiMapPin />
            +381 61 3631480
          </Phone>
          <Mail>
            <FiMapPin />
            gadzic.dimitrije97@gmail.com
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
