import "./Footer.css";
import logo from "../../assets/icons/logo-petcure.svg";
import pawIcon from "../../assets/icons/icon-dog-paw.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";
import facebookIcon from "../../assets/icons/icon-facebook.svg";
import mapPinIcon from "../../assets/icons/icon-location.svg";
import phoneIcon from "../../assets/icons/icon-phone.svg";
import mailIcon from "../../assets/icons/icon-email.svg";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

function Footer() {
  return (
    <footer className="footer">
      <img src={pawIcon} alt="" className="footer__paw footer__paw--left" aria-hidden="true" />
      <img src={pawIcon} alt="" className="footer__paw footer__paw--right" aria-hidden="true" />

      <div className="footer__container">
        
        <div className="footer__grid">
          
          <div className="footer__col footer__col--brand">
            <img src={logo} alt="PetCure - Clínica Veterinária" className="footer__logo" />
            <p className="footer__slogan">
              Cuidado e carinho em cada<br />
              etapa da vida do seu pet.
            </p>
          </div>

          <div className="footer__col footer__col--contact">
            <h3 className="footer__title">Contato</h3>
            <ul className="footer__list">
              <li>
                <img src={mapPinIcon} alt="Endereço" className="footer__icon" />
                <span>
                  Bloco B, 2º Piso, Sala A211 <br />
                  Rua 36, Nº115, Bairro Loanda, <br />
                  João Monlevade, MG.
                </span>
              </li>
              <li>
                <img src={phoneIcon} alt="Telefone" className="footer__icon" />
                <span>(31) 99332-7631</span>
              </li>
              <li>
                <img src={mailIcon} alt="E-mail" className="footer__icon" />
                <span>contato@visaojunior.com.br</span>
              </li>
            </ul>
          </div>

          <div className="footer__col footer__col--nav">
            <h3 className="footer__title">Navegação</h3>
            <ul className="footer__list">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre nós</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#galeria">Galeria</a></li>
            </ul>
          </div>

          <div className="footer__col footer__col--social">
            <h3 className="footer__title">Redes Sociais</h3>
            <div className="footer__social-icons">
              <a href="https://www.instagram.com/visaojrufop/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/visaojrufop/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </div>
            
            <div className="footer__btn-wrapper">
                <WhatsAppButton className="footer-button" />
            </div>
          </div>

        </div>

        <div className="footer__copyright">
          <p>© 2026 PetCure – Clínica Veterinária. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;