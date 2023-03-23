import { Link } from "react-router-dom";
const Header = ({ title, handleHeaderClick }) => {
  return (
    <div className='header'>
      <Link to='/' onClick={handleHeaderClick}>
        <h1>{title}</h1>
      </Link>
    </div>
  );
};

export default Header;
