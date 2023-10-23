import { NavLink } from "react-router-dom";
import { BsTelephone } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { LuMail } from 'react-icons/lu';
import { FaRegBuilding } from 'react-icons/fa';
import { TfiLocationPin } from 'react-icons/tfi';



const Footer = () => {
    return (
        <footer className="footer-tipografia">
            <div className="coloracao "></div>
            <div className="footer-container">
                <div className="footer-links">
                    <div className="cont navegacao">
                        <p>Navegação</p>
                        <nav className="links naveg">
                            <NavLink className="link" to="/" title="Home">Home</NavLink>
                            <NavLink className="link" to="/" title="Dr. Luiz Fernando">Dr. Luis Fernando</NavLink>
                            <NavLink className="link" to="/" title="Procedimentos">Procedimentos</NavLink>
                            <NavLink className="link" to="/" title="Blog">Blog</NavLink>
                            <NavLink className="link" to="/" title="Agendamento">Agendamento</NavLink>
                        </nav>
                    </div>

                    <div className="cont contatos">
                        <p>Contato</p>
                        <nav className="links contacts">
                            <a to="/" title="number-one"><BsTelephone />(61)99999-9999</a>
                            <a to="/" title="number-two"><BsWhatsapp />(61)99999-9999</a>
                            <a className="email" to="/" title="email"><LuMail />luisfernando@vascularclinica.com.br</a>
                            <a to="/" title="cnpj"><FaRegBuilding />CNPJ:25.1234.359/0001-48</a>
                        </nav>
                    </div>

                    <div className="cont localizacao">
                        <p>Localização</p>
                        <div>
                            <span>
                                <a src="#"><TfiLocationPin />710/910 Sul, Ed. Via Brasil - Sala 222</a>
                                <a className="ms-3">Asa Sul, Brasília/DF</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-info">
                <div className="container-info">
                    <span>Copyright © 2023</span>
                    <span>Clínica Vascular. Todos os direitos reservados | Criação de Site por <a href="https://wa.me/5561998719320">GJ Design</a></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;