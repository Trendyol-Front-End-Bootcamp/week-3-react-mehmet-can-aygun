import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext";
import Loading from "../layout/Loading";

const CharacterDetail = (props) => {
  const appContext = useContext(AppContext);
  const { getCharacter, character, cleanCharacter } = appContext;

  useEffect(() => {
    // Get single character with params id
    getCharacter(props.match.params.id);

    // eslint-disable-next-line
  }, []);

  if (!character) {
    return <Loading />;
  } else {
    return (
      <main className="character-detail-page">
        <Link to="/" className="back-link" onClick={() => cleanCharacter()}>
          Go Back
        </Link>

        <h1 className="detail-title">
          Details for <span>{character.name}</span>
        </h1>

        <div className="character-container">
          <div className="img-container">
            <div
              className="img"
              style={{ backgroundImage: `url(${character.image})` }}
            ></div>
          </div>
          <div className="info">
            <ul className="detail-list">
              <li>
                <span>Species:</span> {character.species}
              </li>
              <li>
                <span>Gender:</span> {character.gender}
              </li>
              <li>
                <span>Status:</span> {character.status}
              </li>
              <li>
                <span>Location:</span> {character.location.name}
              </li>
              <li>
                <span>Origin:</span> {character.origin.name}
              </li>
              <li>
                <span>Episodes:</span> {character.episode.length}
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
};

export default CharacterDetail;
