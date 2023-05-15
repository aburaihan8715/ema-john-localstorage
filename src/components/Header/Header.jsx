import logo from "../../assets/images/Logo.svg";
import "./Header.css";
function Header() {
  return (
    <header className="main_header">
      <nav className="navbar">
        <a className="logo_link" href="#">
          <h1 className="logo_heading">
            <img className="logo" src={logo} alt="brand logo" />
          </h1>
        </a>

        <ul className="nav_list">
          <li className="nav_item">
            <a href="#" className="nav_link">
              Order
            </a>
          </li>

          <li>
            <a href="#" className="nav_link">
              Review Order
            </a>
          </li>

          <li>
            <a href="#" className="nav_link">
              Manage Inventory
            </a>
          </li>

          <a href="#" className="nav_link nav_link_btn">
            Login
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
