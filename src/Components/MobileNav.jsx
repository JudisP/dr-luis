import { NavLink } from "react-router-dom";
import BurgerIcon from "./burgerIcon";

// eslint-disable-next-line react/prop-types
const MobileNav = ({ isOpen, closeMenu }) => {
  return (
    <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
      <BurgerIcon isOpen={isOpen} toggleMenu={closeMenu} />

      <NavLink to="/" onClick={closeMenu}>
        HOME
      </NavLink>
      <NavLink to="/dr-luis" onClick={closeMenu}>
        DR. LUIS FERNANDO BASTOS
      </NavLink>
      <NavLink to="/procedimentos" onClick={closeMenu}>
        PROCEDIMENTOS
      </NavLink>
      <NavLink to="/blog" onClick={closeMenu}>
        BLOG
      </NavLink>
      <NavLink to="/agendamento" onClick={closeMenu}>
        AGENDAMENTO
      </NavLink>
    </div>
  );
};

export default MobileNav;
