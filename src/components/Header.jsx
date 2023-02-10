import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div className='header'>
      <Link to='/movies'>
        <h1>{title}</h1>
      </Link>
    </div>
  );
};

export default Header;
