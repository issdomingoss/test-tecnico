import styled from "styled-components";


export const ButtonUpdate = styled.button`

    position: fixed;
    right: 20px;
    bottom: 20px;
    border-radius: 100px;
    padding: 20px;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    opacity: 0.5;

    &:hover{
        cursor: pointer;
        opacity: 1;
        transition: 0.5s;
    }
`