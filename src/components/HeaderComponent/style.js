import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: "Raleway", sans-serif;
    ${(props) =>
        props.$background &&
        css`
            background: rgb(175, 0, 0);
            background: linear-gradient(
                90deg,
                rgba(175, 0, 0, 1) 0%,
                rgba(255, 1, 1, 1) 36%,
                rgba(255, 0, 189, 1) 100%
            );
        `}
`;
export const Image = styled.img`
    width: 30px;
    margin-right: 5px;
    width: 100%;
        height: 57%;
        align-self: center;
    @media (max-width: 430px) {
        width: 100%;
    }
   
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    flex-direction: row;
    width: 50px;
    margin-right: 5px;
`;

export const Input = styled.input`
    font-family: "Raleway", sans-serif;
    font-style: italic;
    border: 2px solid black;
    padding: 3px;
    border-radius: 10px;
    outline: none;
    font-weight: 600;
    margin-right: 5px;
`;

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Raleway", sans-serif;
`;
export const DivLogo = styled.div`
    width: 50%;

    font-family: "Raleway", sans-serif;
    @media (max-width: 728px) {
        justify-content: center;
    }
`;

export const H1 = styled.h1`
    font-family: "Raleway", sans-serif;
    @media (max-width: 430px) {
        display: none;
    }
`;

export const Button = styled.button`
    background: transparent;
    border: none;

`;
