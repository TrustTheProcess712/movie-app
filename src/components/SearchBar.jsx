import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ setError, setSearchValue }) => {
  const [input, setInput] = useState("");
  const [timeoutId, setTimeoutId] = useState(undefined);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(
      setTimeout(() => {
        setSearchValue(input);
        navigate("/movies");
      }, 1000)
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        placeholder='Type to search... '
        value={input}
        onChange={handleChange}
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBar;
