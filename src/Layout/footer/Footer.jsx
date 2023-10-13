import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <div className="navegacao">
                        <p>Navegação</p>
                        <nav className="links naveg">
                            <NavLink className={'link'} to="/" title="Home">Home</NavLink>
                            <NavLink className={'link'} to="/" title="Dr. Luiz Fernando">Dr. Luiz Fernando</NavLink>
                            <NavLink className={'link'} to="/" title="Procedimentos">Procedimentos</NavLink>
                            <NavLink className={'link'} to="/" title="Blog">Blog</NavLink>
                            <NavLink className={'link'} to="/" title="Agendamento">Agendamento</NavLink>
                        </nav>
                    </div>

                    <div className="contatos">
                        <p>Contato</p>
                        <nav className="links contacts">
                            <NavLink className={'link'} to="/" title="number-one">(61)99999-9999</NavLink>
                            <NavLink className={'link'} to="/" title="number-two">(61)99999-9999</NavLink>
                            <NavLink className={'link email'} to="/" title="email">luisfernando@vascularclinica.com.br</NavLink>
                            <NavLink className={'link'} to="/" title="cnpj">CNPJ:25.1234.359/0001-48</NavLink>
                        </nav>
                    </div>


                    <div className="localizacao">
                        <p>Localização</p>
                        <div>
                            <span>
                                <a src="#">710/910 Sul, Ed. Via Brasil - Sala 222 <br/> Asa Sul, Brasília/DF</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-info">
                <div className="container-info">
                    <span>Copyright © 2023</span>
                    <span>Clínica Vascular. Todos os direitos reservados | Criação de Site por GJ Design</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;