import { Link } from "react-router-dom";

const CaracterItem = ({ character }) => {
  const { id, image, name, gender, species, status, location } = character;

  return (
    <li className="character-item">
      <Link to={`/detail/${id}`}>
        <div className="img-container">
          <h3>{name}</h3>
          <div
            className="img"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="info-container">
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Species:</strong> {species}
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
          <p>
            <strong>Location:</strong> {location.name}
          </p>

          <div className="logo-container">
            <img src="/assets/logo.png" alt="Rick and Morty logo" />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CaracterItem;
