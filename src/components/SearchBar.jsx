import { useState } from "react";

// import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchValue, setSearchValue }) => {
  const [input, setInput] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  // const navigate = useNavigate();

  // const handleSubmit = (e, newInput) => {
  //   e.preventDefault();
  //   if (newInput)
  //     setSearchValue((currValue) => {
  //       const newValue = newInput;
  //       return newValue;
  //     });
  //   navigate("/movies");
  //   setInput("");
  // };
  const handleChange = (e) => {
    const input = e.target.value;
    setInput(input);

    clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        if (input === "") {
          setSearchValue("Jackass");
        } else {
          setSearchValue(input);
        }
      }, 1000)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(input);
  };

  // const isInputEmpty = searchValue.trim() === "";

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        placeholder='Type to search... '
        value={searchValue}
        onChange={handleChange}
      />

      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBar;
