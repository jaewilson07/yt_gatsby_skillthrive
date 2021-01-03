import React from "react"

import {
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  StyledSocialIcons,
  P,
} from "../elements"

export const Footer = () => (
  <FooterWrapper>
    <FooterSocialWrapper>
      <FooterSocialIcons>
        <a
          href="https://www.youtube.com/c/onyxreporting2"
          target="_blank"
          alt="YouTube Link"
        >
          <StyledSocialIcons icon={faYoutube} size="2x" color="main1" />
        </a>
        <a
          href="https://www.linkedin.com/in/jaewor/"
          target="_blank"
          alt="LinkedIn Link"
        >
          <StyledSocialIcons icon={faLinkedin} size="2x" color="main1" />
        </a>
        <a href="https://twitter.com/jaewor" target="_blank" alt="Twitter Link">
          <StyledSocialIcons icon={faTwitter} size="2x" color="main1" />
        </a>
      </FooterSocialIcons>
      <P size="xSmall" color="main1">
        © 2020 Onyx Reporting. All rights reserved.
      </P>
    </FooterSocialWrapper>
  </FooterWrapper>
)
