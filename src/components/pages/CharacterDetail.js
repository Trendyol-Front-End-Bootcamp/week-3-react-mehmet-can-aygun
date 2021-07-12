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
    const {
      name,
      image,
      species,
      gender,
      status,
      location,
      origin,
      characterEpisodes,
    } = character;

    return (
      <main className="character-detail-page">
        <Link to="/" className="back-link" onClick={() => cleanCharacter()}>
          Go Back
        </Link>

        <h1 className="detail-title">
          Details for <span>{name}</span>
        </h1>

        <div className="character-container">
          <div className="img-container">
            <div
              className="img"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
          <div className="info">
            <ul className="detail-list">
              <li>
                <span>Species:</span> {species}
              </li>
              <li>
                <span>Gender:</span> {gender}
              </li>
              <li>
                <span>Status:</span> {status}
              </li>
              <li>
                <span>Location:</span> {location.name}
              </li>
              <li>
                <span>Origin:</span> {origin.name}
              </li>
              <li>
                <span>Last Episodes:</span>
                <ul className="episodes-list">
                  {characterEpisodes &&
                    characterEpisodes
                      .slice()
                      .reverse()
                      .map((ep) => (
                        <li key={ep.id}>
                          &#8212; <b>{ep.episode}</b>. {ep.name} ({ep.air_date})
                        </li>
                      ))}
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
