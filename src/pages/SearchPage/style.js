import styled from "styled-components";

export const Div = styled.div`
    font-family: "Raleway", sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    @media (max-width: 728px) {
        justify-content: center;
    }
`;
