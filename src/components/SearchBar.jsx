const SearchBar = ({ setSearchValue }) => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        value=''
        placeholder='Type to search... '
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
