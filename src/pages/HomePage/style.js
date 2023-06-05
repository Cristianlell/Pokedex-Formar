import styled, { css } from 'styled-components';

export const Div = styled.div`
  display:flex;
  justify-content: left;
  align-items: center;
  font-family: 'Raleway', sans-serif;
`
export const DivLoading = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`

export const Span = styled.span`
  margin-left: 5px;
  font-weight: bold;
  font-size: 18px;
`

export const DivRow = styled.div`
  display: flex;
  flex-direction: column;
  width:${props => props.width == 25 ? 25 : 75}% ;
  border-left:${props => props.border == true ? '1px solid black' : ''} ;
  align-self: start;

`

export const DivPokemon = styled.div`
  display: flex;
  flex-direction:column;
`
export const DivFiltrar = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  margin: 5px;
`

export const DivTipes = styled.div`
  align-self: center;
`

export const DivFilterType = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
      font-weight: 800;
    text-decoration: none;
    background: #e363bc;
    border-radius: 20px;
    margin-top: 20px;
    width: 15%;
    align-self: center;
    color: white;
    padding: 10px;

`