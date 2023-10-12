import { NavLink } from "react-router-dom";
import Logo from "@/shared/assets/Logo.png";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <img className="logo-img" src={Logo} />
        <div className="logo-escrita">
          <span className="logo-tipografia">Vascular.</span>
          <span className="logo-tipografia-sub">Estética vascular integrada</span>
        </div>
      </div>

      <nav className="topbar-navegacao">
        <div className="contorno-navlink">
          <NavLink to="/" title="Home">
            HOME
          </NavLink>
        </div>
        <div className="contorno-navlink">
        <NavLink to="/drluis" title="DR.Luis Fernando Bastos">
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
    </div>
  );
};

export default Topbar;
