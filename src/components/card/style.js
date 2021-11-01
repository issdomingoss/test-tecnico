import styled from "styled-components";

export const CardWrap = styled.div`
    border: 1px solid black;
    width: 120px;
    height: 200px;
    margin-top: 20px;

    @media (min-width: 425px){
        width: 180px;
    }

    @media (min-width: 768px) {
    height: 300px;
  }
`