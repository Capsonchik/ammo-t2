import styled from "styled-components";

export const StyledCustom = styled.section`
  background-color: #2A313C;
  
  .contentWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .content {
    padding-left: 128px;
  }
  
  .customText {
    color: rgba(223, 223, 223, 0.80);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    margin-top: 38px;
  }
  
  .customList {
    margin-top: 65px;
    display: flex;
    justify-content: space-between;
    
    & img {
      width: 170px;
      height: 103px;
    }
  }
  
`