import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar.jsx";
const Header = ({ title }) => {
  return (
    <div className='header'>
      <Link to='/movie'>
        <h1>{title}</h1>
      </Link>
      {/* <SearchBar>{children}</SearchBar> */}
    </div>
  );
};

export default Header;
