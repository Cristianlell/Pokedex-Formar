import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import { DivTypeName, InputType, LabelTypeName } from './styled'

export const FilterComponent = () => {
  const {types,handleTypePokemons} = useContext(PokemonContext)

  return (
    <div>
      <div>

        {
         types.map((type,index) =>(
            <DivTypeName key={index}>
              <InputType type="checkbox" name={type.name} id={type.name} onChange={handleTypePokemons} />
              <LabelTypeName htmlFor={type.name}>{type.name}</LabelTypeName>
            </DivTypeName>
          ))
        }
      </div>
    </div>
  )
}
