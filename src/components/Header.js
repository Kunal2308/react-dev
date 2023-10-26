import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty => useEffect is called on initial rendet(just once)
  // if dependency array is [login] => called everytime login is updated
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img alt="app-logo" className="app-logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link className="link-style" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
