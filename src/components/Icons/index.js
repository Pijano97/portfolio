import React from "react";
import {
  IconsContainer,
  IconsSocial,
  Icon,
  IconsContant,
} from "./IconsElements";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import white from "@material-ui/core/colors/yellow";

function Icons() {
  return (
    <>
      <IconsSocial>
        <Icon to="www.github.com">
          <GitHubIcon style={{ fontSize: 35, color: white[50] }} />
        </Icon>
        <Icon to="www.linkedin.com">
          <LinkedInIcon style={{ fontSize: 35, color: white[50] }} />
        </Icon>
      </IconsSocial>
      <IconsContant></IconsContant>
    </>
  );
}

export default Icons;
