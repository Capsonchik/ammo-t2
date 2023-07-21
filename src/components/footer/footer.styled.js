import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #222730;
  padding-top: 130px;
  padding-bottom: 194px;
  
  ul {
    list-style: none;
  }
  
  li {
    color: #999;
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 12px;
  }
  
  li:hover {
    cursor: pointer;
  }
  
  .contentWrapper {
    display: flex;
  }
  
  
  img {
    width: 170px;
    height: 48px;
  }
  
  .companyInfo {
    width: 294px;
    margin-right: 150px;
    display: flex;
    flex-direction: column;
  }
  
  .companyText {
    margin-top: 35px;
    color: #999;
    font-size: 15px;
    font-weight: 400;
  }
  
  .menu {
    margin-right: 150px;
  }
  
  .menuHeader {
    color: #FFF;
    font-size: 18px;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 23px;
  }
  
`