import { Div, DivImage, Img, LinkContainer, DivNamePokemon, NamePokemon, SpanPokemon, Button } from './styled'
import { useContext, useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { HashLoader } from 'react-spinners';

export const PokemonCardComponent = ({ pokemon }) => {
  const {loading, handleDelete } = useContext(PokemonContext);
  const [borrar, setBorrar] = useState(false)
  return (
    <Div>
      <LinkContainer to={`/detail/${pokemon.id}`}>
        <DivImage>
          {loading
            ? (<HashLoader color="#36d7b7" />)
            : <Img src={pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : './mistico.png'} alt={`Pokemon ${pokemon.name}`} />
          }
        </DivImage>
      </LinkContainer>
      <DivNamePokemon>
        <SpanPokemon>N° {pokemon.id}</SpanPokemon>
        <NamePokemon>{pokemon.name}</NamePokemon>
        <div>
          {pokemon.types.map(type => (
            <SpanPokemon color='#ff00b359' key={type.type.name} className={type.type.name}>
              {type.type.name}
            </SpanPokemon>
          ))}
        </div>
      <Button onClick={() => handleDelete(pokemon.id)}>Borrar</Button>
      </DivNamePokemon>
    </Div>
  )
}
