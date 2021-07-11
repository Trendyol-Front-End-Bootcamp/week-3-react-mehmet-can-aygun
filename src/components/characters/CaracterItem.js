import React from 'react';

const CaracterItem = ({character}) => {
  return (
    <li className="character-item">
      <div className="img">
        <img src={character.image} alt="Character" />
      </div>
      <div className="info">
        <p><strong>Name:</strong> {character.name}</p>
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Origin:</strong> {character.origin.name}</p>
      </div>
    </li>
  )
}

export default CaracterItem;
