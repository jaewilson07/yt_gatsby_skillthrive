import React from "react"
import styled from "styled-components"

export const SidebarWrapper = styled("aside")`
  flex-shrink: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-top: 0px;

  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);

  .sideBarUL {
    li a {
      color: ${({ theme }) => theme.colors.text};
    }
    .item > a:hover {
      color: #fff !important;
    }
  }

  .hideFrontLine {
    .collapser {
      background: transparent;
      border: none;
      outline: none;
      position: absolute;
      right: 20px;
      z-index: 1;
      cursor: pointer;
    }

    .active > a {
      background-color: #1ed3c6;
      color: #fff !important;
    }
  }

  .showFrontLine {
    .item > a:hover {
      color: ${({ theme }) => theme.colors.dark2};
    }
    .active > a {
      color: ${({ theme }) => theme.colors.dark1};
      background-color: #001933;
    }
    .item .item {
      border-left: 1px solid #e6ecf1;
      border-left-color: rgb(230, 236, 241);
      padding: 0;
      width: calc(100% - 16px) !important;
    }
    .item .active > a {
      border-color: rgb(230, 236, 241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #1ed3c6 !important;
      color: #fff;
    }
  }

  .rightSideTitle {
    font-size: 10px;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    padding: 7px 24px 7px 16px;
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);

    color: ${props => props.theme.colors.text};
  }

  .rightSideBarUL {
    margin-top: 32px;
  }

  .rightSideBarUL li {
    list-style-type: none;
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);
  }

  .rightSideBarUL li a {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    padding: 7px 24px 7px 16px;

    color: ${props => props.theme.colors.text};
  }

  @media only screen and (max-width: 1023px) {
    width: 100%;
    /* position: relative; */
    height: 100vh;
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    height: auto;
  }
`

export const ListItem = styled(
  ({ className, active, level, children, ...props }) => {
    return <li className={className}>{children}</li>
  }
)`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};

    padding: 0.45rem 0 0.45rem ${props => (props.level || 0) * 1}rem;

    display: block;
    position: relative;

    &:hover {
      color: #1ed3c6 !important;
    }

    ${props =>
      props.active &&
      `
      color: #1ED3C6;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`
