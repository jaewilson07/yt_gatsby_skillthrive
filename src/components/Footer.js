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
} from "../elements"

export const Footer = () => (
  <FooterWrapper>
    <FooterSocialWrapper>
      <FooterSocialIcons>
        <a href="youtube.com" target="_blank" alt="YouTube Link">
          <StyledSocialIcons icon={faYoutube} size="2x" />
        </a>
        <a href="linkedin.com" target="_blank" alt="LinkedIn Link">
          <StyledSocialIcons icon={faLinkedin} size="2x" />
        </a>
        <a href="twitter.com" target="_blank" alt="Twitter Link">
          <StyledSocialIcons icon={faTwitter} size="2x" />
        </a>
      </FooterSocialIcons>
      <p>© 2020 Onyx Reporting. All rights reserved.</p>
    </FooterSocialWrapper>
  </FooterWrapper>
)
