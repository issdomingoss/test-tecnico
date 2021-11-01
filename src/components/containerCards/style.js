import styled from "styled-components";

export const ContainerWrap = styled.div`
  padding: 20px;
  h2{
    font-size: 45px;
  }
`

export const ContainerCardWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;

    @media (min-width: 768px) {
    justify-content: space-around;
  }

`