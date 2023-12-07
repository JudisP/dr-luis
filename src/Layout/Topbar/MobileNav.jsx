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

        <NavLink to="/dr-luis/" onClick={toggle}>
          HOME
        </NavLink>
        <NavLink to="/dr-luis/dr-luis-fernando" onClick={toggle}>
          DR. LUIS FERNANDO BASTOS
        </NavLink>
        <NavLink to="/dr-luis/procedimentos" onClick={toggle}>
          PROCEDIMENTOS
        </NavLink>
        <NavLink to="/dr-luis/blog" onClick={toggle}>
          BLOG
        </NavLink>
        <NavLink to="/dr-luis/agendamento" onClick={toggle}>
          AGENDAMENTO
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
