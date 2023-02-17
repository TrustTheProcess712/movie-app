import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ setSearchValue }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e, newInput) => {
    e.preventDefault();
    navigate("/movies/search");
    setSearchValue((currValue) => {
      const newValue = newInput;
      // console.log(newValue);
      return newValue;
    });
    setInput("");
  };

  const isInputEmpty = input.trim() === "";

  return (
    <form onSubmit={(e) => handleSubmit(e, input)}>
      <input
        type='text'
        value={input}
        placeholder='Type to search... '
        onChange={(e) => setInput(e.target.value)}
      />
      <button type='submit' disabled={isInputEmpty}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
