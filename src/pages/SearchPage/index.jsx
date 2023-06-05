import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext'
import { useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { Header } from '../../components/HeaderComponent';
import { PokemonCardComponent } from '../../components/PokemonCardComponent';
import { Div } from './style';




export const SearchPage = () => {
  const location = useLocation();

  const {totalPokemons} = useContext(PokemonContext);
  const filterPokemons = totalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))
  console.log(totalPokemons);
  
  return (
    <>
    <Header />
     <div>
      <h3>Pokemones encontrados: {filterPokemons.length}</h3>
      <Div>
        {filterPokemons.map((pokemon,index) => (
          <PokemonCardComponent pokemon={pokemon} key={index} />
        ))}
      </Div>
     </div>
    </>

  )
}
