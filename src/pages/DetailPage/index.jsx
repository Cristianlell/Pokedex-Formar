import { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext'
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { Card, CardContent, CardLogo, DivAbilityType, DivLoading, H3, MainCard, P } from './style';
import { Header } from '../../components/HeaderComponent';



export const DetailPage = () => {
  const { getPokemonById } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();
  const getPokemon = async (id) => {
    const data = await getPokemonById(id);
    setPokemon(data);
    setLoading(false);
  }

  useEffect(() => {
    getPokemon(id)

  }, [])
  return (
    <>
      <Header />
      <MainCard>
        {
          loading
            ? (<DivLoading>  <HashLoader color="#36d7b7" /> </DivLoading>)
            :
            <Card>
              <CardLogo>
                <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
              </CardLogo>
              <CardContent>
                <CardContent>
                  <h1>{pokemon.name}</h1>
                </CardContent>
                <H3>Tipe</H3>
                <DivAbilityType>
                  {
                    pokemon.types.map(({ type }) => (

                      <P>{type.name}</P>
                    ))
                  }
                </DivAbilityType>
                <H3>Abilities:</H3>
                <DivAbilityType>

                  {
                    pokemon.abilities.map(({ ability }) => (

                      <P>{ability.name}</P>
                    ))
                  }


                </DivAbilityType>
                <CardContent>
                  <h3>Weight: {pokemon.weight} Kg</h3>
                </CardContent>
              </CardContent>

            </Card>

        }
      </MainCard>
    </>

  )
}
