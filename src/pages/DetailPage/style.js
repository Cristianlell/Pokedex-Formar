import styled from "styled-components";

export const Card = styled.div`
  font-family: 'Raleway', sans-serif;
    display: flex;
    justify-content: center;
    width: 50%;
    border-radius: 10px;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.295) 0px 0px 10px;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        align-items: center;
    }
`;

export const CardLogo = styled.div`
    padding: 10px;
    margin-right: 15px;
`;

export const CardContent = styled.div`
      text-transform: capitalize ;
 @media (max-width: 768px) {
      align-self: start;
    margin-left: 5px;
    }`;

export const DivAbilityType = styled.div`
      display: flex;
`;

export const H3 = styled.h3`
      margin: 0;
`;

export const P = styled.p`
      margin-right: 10px;
      padding: 0 10px;
      background-color: #ff00eb61;
`;

export const MainCard = styled.main`
    display: flex;
    justify-content: center;
`;

export const DivLoading = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`