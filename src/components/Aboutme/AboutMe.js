import React from "react";
import { FaChessKnight } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { BsFillPuzzleFill } from "react-icons/bs";

import img from "../../images/img.png";
import {
  Container,
  TitleWrapper,
  Title,
  Name,
  DescriptionWrapper,
  DescriptionContainer,
  ProfileImage,
  Description,
  IntrestContainer,
  H2,
  Icons,
  IconsWrapper,
} from "./AboutMeElements";

function AboutMe() {
  return (
    <>
      <Container>
        <TitleWrapper>
          <Title>ABOUT ME</Title>
          <Name>Dimitrije Gadzic</Name>
        </TitleWrapper>
        <DescriptionWrapper>
          <ProfileImage src={img} alt="Avatar" />
          <DescriptionContainer>
            <Description>
              I am someone who is consantly growing him self and who takes the
              time to continue learning even though it's not a direct requirment
              of the job. I find that many times it's a combination of what you
              study both direclty and indirectly related to work. I am looking
              for a career that is both challenging and rewarding.
            </Description>
          </DescriptionContainer>
        </DescriptionWrapper>
        <IntrestContainer>
          <H2>INTERESTS & HOBBIES</H2>
          <IconsWrapper>
            <Icons>
              <FaChessKnight />
              Chess
            </Icons>
            <Icons>
              <BsFillPuzzleFill />
              Puzzle
            </Icons>
            <Icons>
              <BsFillPuzzleFill />
              Games
            </Icons>
            <Icons>
              <GiDeliveryDrone />
              Drone
            </Icons>
            <Icons>
              <GiDeliveryDrone />
              Video
            </Icons>
            <Icons>
              <GiDeliveryDrone />
              Football
            </Icons>
          </IconsWrapper>
        </IntrestContainer>
      </Container>
    </>
  );
}

export default AboutMe;
