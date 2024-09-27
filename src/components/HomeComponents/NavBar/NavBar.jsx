import Schedule from "./Schedule/Schedule";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
function NavBar() {
  const navItems = ["Home", "Properties", "Property Details", "Contact Us"];

  function showMenu() {
    const menu = document.querySelector(".ulmenu");
    menu.classList.toggle(styles.active);
  }
  return (
    <div className={styles.mainNav}>
      <div className={styles.NavBar}>
        <h2>VILLA</h2>
        <ul className={styles.ulNavBar}>
          {navItems.map((item, ind) => (
            <li key={ind}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={item == "Home" ? "/" : `/${item}`}
              >
                {item}
              </NavLink>
            </li>
          ))}
          <li>
            <Schedule />
          </li>
        </ul>
        <div className={styles.menu} onClick={showMenu}>
          <FaBarsStaggered size={22} />
        </div>
      </div>
      <ul className={`${styles.ulmenu} ulmenu`}>
        {navItems.map((item, ind) => (
          <li key={ind}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={showMenu}
              to={item == "Home" ? "/" : `/${item}`}
            >
              {item}
            </NavLink>
          </li>
        ))}
        <div>
          <Schedule />
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
