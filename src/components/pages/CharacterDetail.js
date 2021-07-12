import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext";
import Loading from "../layout/Loading";

const CharacterDetail = (props) => {
  const appContext = useContext(AppContext);
  const { getCharacter, character, cleanCharacter } = appContext;

  const printLastFiveEpisodes = (episodes) => {
    if (episodes.length <= 5) {
      // Return all
      return episodes.map((e, index) => (
        <li key={index}>{e.substr(40, 42)}</li>
      ));
    } else {
      return episodes
        .slice()
        .reverse()
        .filter((e, index) => index < 5)
        .map((e, index) => <li key={index}>{e.substr(40, 42)}</li>);
    }
  };

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
                <span>Last Episodes:</span>
                <ul className="episodes-list">
                  {printLastFiveEpisodes(character.episode)}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
};

export default CharacterDetail;
