import CharacterItem from "./CharacterItem";
import PropTypes from "prop-types";

const CharacterList = ({ characters }) => {
  return (
    <ul className="character-list">
      {characters.map((character, index) => (
        <CharacterItem key={index} character={character} />
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
