import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-search">
        <Link to="/home">
          <span className="logo-rawg">RAWG</span>
        </Link>
        <input type="search" />
      </div>
      <div className="signup-login">
        <span>LOG IN</span>
        <span>SIGN UP</span>
        <span>API</span>
        <span className="icon">
          <FontAwesomeIcon icon="bars" />
        </span>
      </div>
    </div>
  );
};

export default Header;