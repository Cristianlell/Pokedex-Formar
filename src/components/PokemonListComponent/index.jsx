import { useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { PokemonContext } from '../../context/PokemonContext';
import { PokemonCardComponent } from '../PokemonCardComponent';
import { Div } from './styled';

export const PokemonListComponent = () => {


  const { allPokemons, typePokemons,setTypePokemons} = useContext(PokemonContext)
 

  
  return (
    <Div>
      {typePokemons.length ? (
        <>
          {typePokemons.map(pokemon => (
            <PokemonCardComponent pokemon={pokemon} key={uuid()} />
          ))}
        </>
      ) : (
        <>
          {allPokemons.map(pokemon => (
            <PokemonCardComponent pokemon={pokemon} key={uuid()} />
          ))}
        </>
      )
      }
    </Div>
  )
}
