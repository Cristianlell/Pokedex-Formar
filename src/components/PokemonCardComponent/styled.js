import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkContainer = styled(Link)`
    margin: 13px 0;
    text-decoration: none;
    width: 25%;
    color: black;
    @media (max-width: 1024px) {
        width: 33%;
        justify-content: center;
    }
    @media (max-width: 768px) {
        width: 50%;
    }
    @media (max-width: 452px) {
        width: 80%;
    }
`;

export const Div = styled.div`
    display: ${(props) => (props.borrar ? "none" : "")};
    margin-bottom: 30px;
    text-decoration: none;
    width: 25%;
    color: black;
    @media (max-width: 1024px) {
        width: 33%;
        justify-content: center;
    }
    @media (max-width: 768px) {
        width: 50%;
    }
    @media (max-width: 452px) {
        width: 80%;
        margin-bottom: 45px;
    }
`;

export const Img = styled.img`
    width: 35%;
    height: 100%;
`;

export const DivImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 65%;
    background: #ff002ca1;
    margin: 3px;
`;
export const DivNamePokemon = styled.div`
    display: flex;
    flex-direction: column;
    height: 35%;
    margin-bottom: 10px;
`;

export const NamePokemon = styled.h3`
    padding: 0px 8px;
    margin: 9px 0px;
`;

export const Button = styled.button`
    border: 1px solid #fff;
    align-self: flex-end;
    margin: 0px 10px;
    font-weight: 500;
    padding: 0px 10px;
    color: white;
    text-decoration: none;
    background: #ee0101;

    border-radius: 20px;
    &:hover {
        background: #ff0000;
    }
`;

export const SpanPokemon = styled.span`
        margin: 0px 5px;
    padding: 0px 8px;
    font-weight: 500;
    background: ${(props) => (props.color == "#ff00b359" ? "#ff00b359" : "")};
    @media (max-width: 1024px) {
        padding: 0px 7px;
    }
`;
