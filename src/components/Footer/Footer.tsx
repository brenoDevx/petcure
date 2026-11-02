import "./Footer.css";
import logo from "../../assets/icons/logo-petcure.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";
import facebookIcon from "../../assets/icons/icon-facebook.svg";
import whatsappIcon from "../../assets/icons/icon-whatsapp2.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <a href="/" className="footer-logo" aria-label="PetCure - Página Inicial">
            <img src={logo} alt="PetCure - Clínica Veterinária" />
          </a>
          <p className="footer-tagline">
            Cuidado, dedicação e saúde para o seu pet em cada detalhe.
          </p>
        </div>

        <div className="footer-info">
          <h3 className="footer-title">Contato & Localização</h3>
          <address className="footer-address">
            <div className="footer-item">
              <span className="footer-label">Endereço:</span>
              <p>Bloco B, 2º Piso, Sala A211 <br />
              Rua 36, Nº115, Bairro Loanda, <br />
              João Monlevade, MG. </p>
            </div>
            <div className="footer-item">
              <span className="footer-label">Telefone:</span>
              <a href="tel:+5531993327631" className="footer-link">
                (31) 99332-7631
              </a>
            </div>
          </address>
        </div>

        <div className="footer-social">
          <h3 className="footer-title">Redes Sociais</h3>
          <div className="social-links">
            <a
              href="https://www.instagram.com/visaojrufop/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Visão Jr."
              className="social-btn"
            >
              <img src={instagramIcon} alt="Ícone do Instagram" />
            </a>

            <a
              href="https://www.facebook.com/visaojrufop/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Visão Jr."
              className="social-btn"
            >
              <img src={facebookIcon} alt="Ícone do Facebook" />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5531993327631"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-btn"
            >
              <img src={whatsappIcon} alt="Ícone do WhatsApp" />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p> © 2026 PetCure — Clínica Veterinária. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;