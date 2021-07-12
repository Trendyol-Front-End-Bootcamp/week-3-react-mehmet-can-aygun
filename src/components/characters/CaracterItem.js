import { Link } from "react-router-dom";

const CaracterItem = ({ character }) => {
  return (
    <li className="character-item">
      <Link to={`/detail/${character.id}`}>
        <div className="img-container">
          <div
            className="img"
            style={{ backgroundImage: `url(${character.image})` }}
          ></div>
        </div>
        <div className="info">
          <p>
            <strong>Name:</strong> {character.name}
          </p>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default CaracterItem;
