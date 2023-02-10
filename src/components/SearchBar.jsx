import { useState } from "react";

const SearchBar = ({ setSearchValue }) => {
  const [newInput, setNewInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(newInput);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={newInput}
        placeholder='Type to search... '
        onChange={(e) => setNewInput(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBar;
