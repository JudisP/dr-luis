import { NavLink } from "react-router-dom";
import Logo from '@/shared/assets/Logo.png';

const Topbar = () => {
    return (
      <div className="topbar">
        <img className="logo" src={Logo}/>
  
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