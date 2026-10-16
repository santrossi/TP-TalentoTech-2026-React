import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/cart"}>CARRITO</Link>
        </li>
      </ul>
    </nav>
  );
};
