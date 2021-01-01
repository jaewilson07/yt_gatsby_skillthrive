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
        <a href="youtube.com" target="_blank" alt="YouTube Link">
          <StyledSocialIcons icon={faYoutube} size="2x" color="main1" />
        </a>
        <a href="linkedin.com" target="_blank" alt="LinkedIn Link">
          <StyledSocialIcons icon={faLinkedin} size="2x" color="main1" />
        </a>
        <a href="twitter.com" target="_blank" alt="Twitter Link">
          <StyledSocialIcons icon={faTwitter} size="2x" color="main1" />
        </a>
      </FooterSocialIcons>
      <P size="xSmall" color="main1">
        © 2020 Onyx Reporting. All rights reserved.
      </P>
    </FooterSocialWrapper>
  </FooterWrapper>
)
