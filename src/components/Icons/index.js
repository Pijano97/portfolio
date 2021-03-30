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
        <Icon to={{ pathname: "https://github.com/Pijano97" }} target="_blank">
          <GitHubIcon style={{ fontSize: 35, color: white[50] }} />
        </Icon>
        <Icon
          to={{
            pathname: "https://www.linkedin.com/in/dimitrije-gadzic-5247aa1b5/",
          }}
          target="_blank"
        >
          <LinkedInIcon style={{ fontSize: 35, color: white[50] }} />
        </Icon>
      </IconsSocial>
      <IconsContant></IconsContant>
    </>
  );
}

export default Icons;
