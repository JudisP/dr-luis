import { NavLink } from "react-router-dom";
// import BurgerIcon from "@/Components/burgerIcon";
import { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

// eslint-disable-next-line react/prop-types
const MobileNav = () => {
  const { toggle, open } = useContext(MenuContext);


  return (
    <div>
      
      <div className={`mobile-nav ${open ? "open" : "close"}`}>

        <NavLink to="/" onClick={toggle}>
          HOME
        </NavLink>
        <NavLink to="/dr-luis" onClick={toggle}>
          DR. LUIS FERNANDO BASTOS
        </NavLink>
        <NavLink to="/procedimentos" onClick={toggle}>
          PROCEDIMENTOS
        </NavLink>
        <NavLink to="/blog" onClick={toggle}>
          BLOG
        </NavLink>
        <NavLink to="/agendamento" onClick={toggle}>
          AGENDAMENTO
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
