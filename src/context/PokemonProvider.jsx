import { useForm } from "../hooks/useForm";
import { PokemonContext } from "./PokemonContext";
import { useState, useEffect } from "react";

export const PokemonProvider = ({ children }) => {
  const baseURL = "https://pokeapi.co/api/v2/";
  const [offset, setOffset] = useState(0);
  const [allPokemons, setAllPokemons] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search, onInputChange, resetForm } = useForm({ search: '' });
  const [typePokemons, setTypePokemons] = useState([]);

  const getAllPokemons = async (limit = 100000) => {
    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    const pokemonsPromises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(pokemonsPromises);
    if (limit < 100000) {
      setAllPokemons([...allPokemons, ...results]);
      setLoading(false);
    }
    setTotalPokemons(results);
    setLoading(false);
  };

  const getPokemonById = async (id) => {
    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();

    return data;
  };

  const getTypes = async () => {
    const res = await fetch(`${baseURL}type`);
    const data = await res.json();
    setTypes(data.results)
  };

  useEffect(() => {
    getAllPokemons(50);
    getTypes()
  }, [offset]);

  useEffect(() => {
    getTypes()
  }, []);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const handleLoad = () => {
    setOffset(offset + 50)
  }

  const [typeSelected, setTypeSelected] = useState({
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    grass: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknown: false,
    shadow: false,
  });
  const handleTypePokemons = (e) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.ckecked
    })
    if (e.target.checked) {
      const filterResults = totalPokemons.filter(pokemon => pokemon.types.map(type => type.type.name).includes(e.target.name))
      setTypePokemons([...typePokemons,...filterResults]);
    }else{
      const filterResults = typePokemons.filter(pokemon => !pokemon.types.map(type => type.type.name).includes(e.target.name))
      
      setTypePokemons(filterResults);
    }
  }

  const handleDelete = (id) => {
    console.log(id);
    const filterDelete = allPokemons.filter(pokemon => pokemon.id != id)
    console.log(filterDelete);
    setAllPokemons([...filterDelete])
  }

  return (
    <PokemonContext.Provider value={{
      search,
      onInputChange,
      resetForm,
      allPokemons,
      totalPokemons,
      getAllPokemons,
      getPokemonById,
      types,
      loading,
      handleLoad,
      handleTypePokemons,
      handleDelete,
      typePokemons,
      setTypePokemons
    }}>{children}</PokemonContext.Provider>
  );
};
