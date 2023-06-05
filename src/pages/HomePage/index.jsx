import React, { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { Header } from "../../components/HeaderComponent"
import { FaListUl } from "react-icons/fa"
import { Div, DivLoading, DivFilterType, DivFiltrar, DivPokemon, DivRow, DivTipes, Span, Button } from "./style"
import { PokemonListComponent } from "../../components/PokemonListComponent"
import { FilterComponent } from "../../components/FilterComponent"
import { HashLoader } from 'react-spinners';
export const HomePage = () => {
  
  const { handleLoad,loading } = useContext(PokemonContext)
  
  return (
    <>
      <Header />
      {loading
        ? <DivLoading> <HashLoader color="#ff0144" /> </DivLoading>
        :
        (
          <Div>
            <DivRow width={25}>
              <DivFiltrar>
                <DivFilterType>
                  <FaListUl />
                  <Span>Filtrar:</Span>
                </DivFilterType>
                <DivTipes>
                  <FilterComponent />
                </DivTipes>
              </DivFiltrar>
            </DivRow>
            <DivRow border={true}>
              <DivPokemon>
                <PokemonListComponent />
              </DivPokemon>
                <Button onClick={handleLoad}>Cargar más</Button>
            </DivRow>

          </Div >

        )
      }

    </>
  )
}