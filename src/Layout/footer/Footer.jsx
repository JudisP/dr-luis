import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer"> 
            <div className="navegação"> 
                <p>Navegação</p>
                <nav>
                    <NavLink to="/" title="Home">(61)Home</NavLink>
                    <NavLink to="/" title="Dr. Luiz Fernando">Dr. Luiz Fernando</NavLink>
                    <NavLink to="/" title="Procedimentos">Procedimentos</NavLink>
                    <NavLink to="/" title="Blog">Blog</NavLink>
                    <NavLink to="/" title="Agendamento">Agendamento</NavLink>
                </nav>
            </div>

            <div className="contatos"> 
                <p>Contato</p>
                <nav>
                    <NavLink to="/" title="number-one">(61)99999-9999</NavLink>
                    <NavLink to="/" title="number-two">(61)99999-9999</NavLink>
                    <NavLink to="/" title="email">luisfernando@vascularclinica.com.br</NavLink>
                    <NavLink to="/" title="cnpj">CNPJ:25.1234.359/0001-48</NavLink>
                </nav>
            </div>


            <div className="localização"> 
                <p>Localização</p>
                <div>
                    <span>
                        <a src="#">710/910 Sul, Ed. Via Brasil - Sala 222 Asa Sul, Brasília/DF</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;