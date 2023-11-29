import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "@/shared/assets/Logo.png";
import MobileNav from "./MobileNav";
import BurgerIcon from "@/Components/BurgerIcon";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

const Topbar = () => {
  const { toggle, open } = useContext(MenuContext);
  // const { open } = useContext(MenuContext);
  // const [isOpen, setIsOpen] = useState(false);

  // const closeMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  
  return (
    <topbar className="topbar">
      <div className="logo">
        <img className="logo-img" src={Logo} />
        <div className="logo-escrita">
          <span className="logo-tipografia">Vascular.</span>
          <span className="logo-tipografia-sub">
            Estética vascular integrada
          </span>
        </div>
      </div>

      <nav className="topbar-navegacao">
        <MobileNav />
        <div onClick={toggle}>{open ? <GiHamburgerMenu /> : <FaHamburger />}</div>

        <div className="contorno-navlink">
          <NavLink to="/" title="Home">
            HOME
          </NavLink>
        </div>
        <div className="contorno-navlink">
          <NavLink to="/dr-luis" title="DR.Luis Fernando Bastos">
            DR.LUIS FERNANDO BASTOS
          </NavLink>
        </div>
        <div className="contorno-navlink">
          <NavLink to="/procedimentos" title="Procedimentos">
            PROCEDIMENTOS
          </NavLink>
        </div>
        <div className="contorno-navlink">
          <NavLink to="/blog" title="Blog">
            BLOG
          </NavLink>
        </div>
        <div className="contorno-navlink">
          <NavLink to="/agendamento" title="Agendamento">
            AGENDAMENTO
          </NavLink>
        </div>
      </nav>
    </topbar>
  );
};

export default Topbar;
