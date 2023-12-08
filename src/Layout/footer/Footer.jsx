import { NavLink } from "react-router-dom";
import { BsTelephone } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { LuMail } from 'react-icons/lu';
import { FaRegBuilding } from 'react-icons/fa';
import { TfiLocationPin } from 'react-icons/tfi';
import { abreEmail, abreGoogleMaps, abreNumeroTelefone, abreWhatsapp, scrollTop } from "@/utils/helpers";



const Footer = () => {
    return (
        <footer className="footer-tipografia">
            <div className="coloracao "></div>
            <div className="footer-container">
                <div className="footer-links">
                    <div className="cont navegacao">
                        <p>Navegação</p>
                        <nav className="links naveg">
                            <NavLink className="link" to="/dr-luis/" onClick={() => scrollTop(0, 0)} title="Home">Home</NavLink>
                            <NavLink className="link" to="/dr-luis/dr-luis-fernando" onClick={() => scrollTop(0, 0)} title="Dr. Luiz Fernando">Dr. Luis Fernando</NavLink>
                            <NavLink className="link" to="/dr-luis/procedimentos" onClick={() => scrollTop(0, 0)} title="Procedimentos">Procedimentos</NavLink>
                            <NavLink className="link" to="/dr-luis/blog" onClick={() => scrollTop(0, 0)} title="Blog">Blog</NavLink>
                            <NavLink className="link" to="/dr-luis/agendamento" onClick={() => scrollTop(0, 0)} title="Agendamento">Agendamento</NavLink>
                        </nav>
                    </div>

                    <div className="cont contatos">
                        <p>Contato</p>
                        <nav className="links contacts">
                            <a className="link" title="Telefone" onClick={abreNumeroTelefone}><BsTelephone />(61)2099-2889</a>
                            <a className="link" title="Whatsapp" onClick={abreWhatsapp}><BsWhatsapp />(61)99935-5005</a>
                            <a className="email link" title="Email" onClick={abreEmail}><LuMail />drluis.site@gmail.com</a>
                            <a title="Cnpj"><FaRegBuilding />CNPJ:25.1234.359/0001-48</a>
                        </nav>
                    </div>

                    <div className="cont localizacao">
                        <p>Localização</p>
                        <div>
                            <span onClick={abreGoogleMaps}>
                                <a title="Endereço" src="#"><TfiLocationPin />710/910 Sul, Ed. Via Brasil - Sala 222</a>
                                <a title="Endereço" className="ms-3">Asa Sul, Brasília/DF</a>
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