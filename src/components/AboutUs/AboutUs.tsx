import teamIcon from "../../assets/icons/icon-team.svg";
import heartIcon from "../../assets/icons/icon-heart.svg";
import pawIcon from "../../assets/icons/icon-dog-paw.svg";
import plusIcon from "../../assets/icons/icon-plus.svg";
import veterinarianImage from "../../assets/images/image-veterinarian-with-dog.png";
import "./AboutUs.css";

type AboutUsValue = {
    label: string;
    icon: string;
};

const ABOUT_US_VALUES: AboutUsValue[] = [
    { label: "Equipe qualificada", icon: teamIcon },
    { label: "Atendimento fechado", icon: heartIcon },
    { label: "Compromisso com o bem-estar", icon: pawIcon },
];

export default function AboutUs() {
    return (
        <section id="sobre" className="about-us">
            <div className="about-us__container">
                <h1 className="about-us__title">
                    Sobre <span>nós</span>
                </h1>

                <figure className="about-us__image">
                    <img
                        src={veterinarianImage}
                        alt="Veterinária cuidando de um cachorro"
                    />
                </figure>

                <div className="about-us__content">
                    <p className="about-us__description">
                        Na PetCure, acreditamos que cada pet merece atenção, respeito e cuidado individualizado. Com mais de 10 anos de experiência, contamos com profissionais capacitados para oferecer atendimento de qualidade, unindo conhecimento, tecnologia e carinho. Nosso compromisso é promover saúde e bem-estar em um ambiente acolhedor, proporcionando confiança e segurança aos tutores.
                    </p>

                    <aside className="about-us__purpose" aria-label="Nosso propósito">
                        <img src={plusIcon} alt="" aria-hidden="true" />
                        <p>
                            Nosso propósito é fortalecer o vínculo entre você e seu pet, com cuidado, respeito e profissionalismo.
                        </p>
                    </aside>

                    <ul className="about-us__values" aria-label="Valores da PetCure">
                        {ABOUT_US_VALUES.map(({ label, icon }) => (
                            <li className="about-us__value" key={label}>
                                <img src={icon} alt="" aria-hidden="true" />
                                <span>{label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
