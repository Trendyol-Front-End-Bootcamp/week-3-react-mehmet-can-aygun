import React from "react";
import { useState } from "react";

const Search = ({ getSearchResults }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("alive");
  const [gender, setGender] = useState("female");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`
      );

      const data = await res.json();

      getSearchResults(data.results);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group">
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="input-group">
        <label>Status</label>
        <select
          onChange={(e) => setStatus(e.target.value)}
          defaultValue="alive"
        >
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="input-group">
        <label>Gender</label>
        <select
          onChange={(e) => setGender(e.target.value)}
          defaultValue="female"
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="input-group btn">
        <label>Search Btn</label>
        <button className="search-btn">Search</button>
      </div>
    </form>
  );
};

export default Search;
