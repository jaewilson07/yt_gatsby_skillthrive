import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { testColor } from "../elements"

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  & p {
    text-align: center;
    flex: 0 0 100%;
  }
`

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 1rem;

  & svg {
    margin: 0 1rem;
    transition: filter 0.3s ease;
  }

  & svg:hover,
  svg:focus {
    filter: brightness(50%);
  }
`

export const StyledSocialIcons = styled(FontAwesomeIcon)`
  color: ${props =>
    props.color ? testColor(props) : props.theme.colors.main1};
`
