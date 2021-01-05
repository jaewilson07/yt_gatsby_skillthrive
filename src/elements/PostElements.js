import styled from "styled-components"

export const PostWrapper = styled.main`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1.1;
    color: ${({ theme }) => theme.colors.dark1};
  }

  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  h1 {
    font-size: 2.25rem;
    line-weight: 2.5rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1.5rem;
    line-weight: 1.875rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.375rem;
    line-weight: 1.625rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1.125rem;
    line-weight: 1.5rem;
    font-weight: 400;
  }

  h5 {
    font-size: 1.125rem;
    line-weight: 1.375rem;
    font-weight: 700;
  }
  h6 {
    font-size: 1rem;
    line-weight: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.dark2};
    margin-top: 2rem;
    overflow-wrap: break-word;
  }

  a {
    color: ${({ theme }) => theme.colors.main1};
    text-decoration: underline;

    &:hover {
      transition: color 0.15s;
      background: linear-gradient(#eee, #eee);
      background-repeat: no-repeat;
    }
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  blockquote p {
    font-style: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }

  ul,
  ol {
    color: ${({ theme }) => theme.colors.dark2};
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.25rem 0;
  }

  code {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 1rem;
    line-hieght: 1.875rem;
    color: ${({ theme }) => theme.colors.light1};
    background-color: ${({ theme }) => theme.colors.dark3};
    padding: 1rem 1rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.dark1};
    opacity: 0.1;
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  table,
  th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.dark3};
  }

  th {
    padding: .75rem;
    font-weight: 700;
  }

  th td {
    text-align: left;
  }

  tr:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.light1};
    }
  }

  tr,td {
    padding: .5rem;
  }

  img {
    display: block;
    margin: auto;
    max-width: 100%;
    padding: 1rem 1rem;    
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: ${({ theme }) =>
      `${theme.spacings.medium} ${theme.spacings.large}`};
  }
`
