import styled from "styled-components"

export const ContentWrapper = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.colors.light2};

  padding: ${({ theme }) =>
    `${theme.spacings.xLarge} ${theme.spacings.xxLarge}`};
`
