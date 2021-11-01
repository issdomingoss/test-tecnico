import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 45px 30px;
    
    margin: 0 auto;
    margin-bottom: 100px;
`

export const ContainerMenuLinks = styled.div`

    ul{
        display: flex;
        justify-content: space-between;
        width: 50%;

        li{
            font-size: 20px;
            margin-left: 20px;
            border-bottom: 1px solid red;
            &:hover{
                cursor: pointer;
                border-bottom: 1px solid black;
                transition: 0.5s;
            }
        }
    }
`