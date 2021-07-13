import { useState, useContext } from "react";
import AppContext from "../../context/appContext";

const Search = () => {
  const appContext = useContext(AppContext);
  const { searchCharacters, setIsSearching, setCurrentPage } = appContext;

  // Form Input Values - Component Level State
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSearching(true);

    searchCharacters({ name, status, gender });
  };

  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group">
        <label>Name</label>
        <input
          type="search"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter character name"
        />
      </div>
      <div className="input-group">
        <label>Status</label>
        <select
          onChange={(e) => setStatus(e.target.value)}
          defaultValue={status}
        >
          <option value="">None</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="input-group">
        <label>Gender</label>
        <select
          onChange={(e) => setGender(e.target.value)}
          defaultValue={gender}
        >
          <option value="">None</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="input-group btn">
        <label>Search Btn</label>
        <button
          className="search-btn"
          onClick={() =>
            setCurrentPage({
              pageNumber: 1,
              pageUrl: `https://rickandmortyapi.com/api/character/?page=1${
                name && "&name=" + name
              }&status=${status}&gender=${gender}`,
            })
          }
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
