import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // if no dependency array => useEffect is called on every render
  // if dependency array is empty => useEffect is called on initial rendet(just once)
  // if dependency array is [login] => called everytime login is updated
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []);

  return (
    <div className="flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100 shadow-lg my-2">
      <div className="logo-container">
        <img alt="app-logo" className="w-32" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link className="px-4" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="px-4">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
          <li className=" font-bold px-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
