import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import { useState } from "react";
import "./Header.css";

import logo from "../../assets/icons/logo-petcure.svg";
import menu_mobile from "../../assets/icons/icon-menu-mobile.svg"
import homeIcon from "../../assets/icons/icon-home.svg"
import teamIcon from "../../assets/icons/icon-team.svg"
import stethoscopeIcon from "../../assets/icons/icon-stethoscope.svg"
import starIcon from "../../assets/icons/icon-star.svg"
import galleryIcon from "../../assets/icons/icon-gallery.svg"
import arrowIcon from "../../assets/icons/icon-arrow-mobile-menu.svg"




function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">

      <div className="header-desktop">

        <a href="/" className="header-logo" aria-label="PetCure - Página Incial">
          <img src={logo} alt="PetCure - Clínica Veterinária" />
        </a>

        <nav className="header-nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#servicos">Serviços</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#galeria">Galeria</a>
        </nav>

        <div className="header-contact">
            <WhatsAppButton className="header-desktop" />
          </div>

      </div>

      <div className="header-mobile">
        
        <a href="/" className="header-logo" aria-label="PetCure - Página Incial">
          <img src={logo} alt="PetCure - Clínica Veterinária" />
        </a>

        <button
          type="button"
          className="button-menu-mobile"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          <img src={menu_mobile} alt="" />
        </button>

        {menuAberto && (
          <nav className="mobile-menu">
            <a 
              href="#inicio"
              className="mobile-menu-item"
              onClick={() => setMenuAberto(false)}
            >
              <img src={homeIcon} alt="" className="mobile-menu-icon"/>
              <span>Início</span>
              <img src={arrowIcon} alt="" className="mobile-menu-arrow" />
            </a>

            <a 
              href="#sobre"
              className="mobile-menu-item"
              onClick={() => setMenuAberto(false)}
            >
              <img src={teamIcon} alt="" className="mobile-menu-icon"/>
              <span>Sobre nós</span>
              <img src={arrowIcon} alt="" className="mobile-menu-arrow"/>
            </a>

            <a 
              href="#servicos"
              className="mobile-menu-item"
              onClick={() => setMenuAberto(false)}
            >
              <img src={stethoscopeIcon} alt="" className="mobile-menu-icon"/>
              <span>Serviços</span>
              <img src={arrowIcon} alt="" className="mobile-menu-arrow"/>
            </a>

            <a 
              href="#depoimentos"
              className="mobile-menu-item"
              onClick={() => setMenuAberto(false)}
            >
              <img src={starIcon} alt="" className="mobile-menu-icon"/>
              <span>Depoimentos</span>
              <img src={arrowIcon} alt="" className="mobile-menu-arrow"/>
            </a>

            <a 
              href="#galeria"
              className="mobile-menu-item"
              onClick={() => setMenuAberto(false)}
            >
              <img src={galleryIcon} alt="" className="mobile-menu-icon"/>
              <span>Galeria</span>
              <img src={arrowIcon} alt="" className="mobile-menu-arrow"/>
            </a>         

            <WhatsAppButton className="header-mobile" />
          </nav>
        )}

      </div>
      
    </header>
  );
}

export default Header;