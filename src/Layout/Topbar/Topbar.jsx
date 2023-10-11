import { NavLink } from "react-router-dom";
import Logo from "@/shared/assets/Logo.png";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <img className="logo-img" src={Logo} />
        <div className="logo-escrita">
          <p className="logo-tipografia">Vascular</p>
          <p className="logo-tipografia-sub">Estética vascular integrada</p>
        </div>
      </div>

      <nav className="topbar-navegacao">
        <NavLink to="/" title="Home">
          HOME
        </NavLink>
        <NavLink to="/drluis" title="DR.Luis Fernando Bastos">
          DR.LUIS FERNANDO BASTOS
        </NavLink>
        <NavLink to="/procedimentos" title="Procedimentos">
          PROCEDIMENTOS
        </NavLink>
        <NavLink to="/blog" title="Blog">
          BLOG
        </NavLink>
        <NavLink to="/agendamento" title="Agendamento">
          AGENDAMENTO
        </NavLink>
      </nav>
    </div>
  );
};

export default Topbar;
