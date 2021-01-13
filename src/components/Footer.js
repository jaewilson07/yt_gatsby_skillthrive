import React from "react"

import {
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import {
  FooterSocialWrapper,
  FooterSocialIcons,
  StyledSocialIcons,
  P,
} from "../elements"

export const Footer = () => (
  <React.Fragment>
    <FooterSocialWrapper>
      <FooterSocialIcons>
        <a
          href="https://www.youtube.com/c/onyxreporting2"
          target="_blank"
          alt="YouTube Link"
          rel="noreferrer"
        >
          <StyledSocialIcons icon={faYoutube} size="2x" color="main1" />
        </a>
        <a
          href="https://www.linkedin.com/in/jaewor/"
          target="_blank"
          alt="LinkedIn Link"
          rel="noreferrer"
        >
          <StyledSocialIcons icon={faLinkedin} size="2x" color="main1" />
        </a>
        <a
          href="https://twitter.com/jaewor"
          target="_blank"
          alt="Twitter Link"
          rel="noreferrer"
        >
          <StyledSocialIcons icon={faTwitter} size="2x" color="main1" />
        </a>
      </FooterSocialIcons>
      <P size="xSmall" color="main1">
        © 2020 Onyx Reporting. All rights reserved.
      </P>
    </FooterSocialWrapper>
  </React.Fragment>
)
