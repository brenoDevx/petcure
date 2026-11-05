import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import "./Hero.css";

import heroImage from "../../assets/images/image-dog-and-cat-hero.png";
import pawIcon from "../../assets/icons/icon-dog-paw.svg";
import heartIcon from "../../assets/icons/icon-heart.svg";

function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">Saúde, bem-estar e qualidade de vida</p>

          <h1 id="hero-titulo" className="hero__title">
            Cuide do seu pet com <span>amor e dedicação</span>
          </h1>

          <p className="hero__text">
            Na PetCure, oferecemos um atendimento completo, ético e humanizado
            para todas as fases da vida do seu pet.
          </p>

          <div className="hero__actions">
            <WhatsAppButton className="hero" />
            <a href="#servicos" className="hero__secondary-button">
              Conheça nossos serviços
            </a>
          </div>
        </div>

        <div className="hero__media">
          <p className="hero__note">
            <img src={pawIcon} alt="" aria-hidden="true" className="hero__note-paw" />
            <span>Mais saúde para quem faz parte da sua família</span>
            <img src={heartIcon} alt="" aria-hidden="true" className="hero__note-heart" />
          </p>

          <img
            src={heroImage}
            alt="Cachorro golden retriever e gato deitados juntos sobre uma manta cinza"
            className="hero__image"
            width={2393}
            height={1831}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
