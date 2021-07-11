import React from 'react'
import CharacterItem from "./CaracterItem";

const CharacterList = ({ characters }) => {
  return (
    <ul className="character-list">
      {characters.map((character, index) => (
        <CharacterItem key={index} character={character} />
      ))}
    </ul>
  )
}

export default CharacterList
