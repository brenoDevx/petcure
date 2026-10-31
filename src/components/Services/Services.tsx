import syringeIcon from "../../assets/icons/icon-syringe.svg";
import microscopeIcon from "../../assets/icons/icon-microscope.svg";
import heartbeatIcon from "../../assets/icons/icon-heartbeat.svg";
import shieldIcon from "../../assets/icons/icon-shield-check.svg";
import boneIcon from "../../assets/icons/icon-bone.svg";
import groomingIcon from "../../assets/icons/icon-dog-grooming.svg";
import pawIcon from "../../assets/icons/icon-dog-paw.svg";

import "./Services.css";

type Service = {
    title: string;
    description: string;
    icon: string;
};

const SERVICES: Service[] = [
    {
        title: "Vacinação",
        icon: syringeIcon,
        description: "Proteção contra doenças por meio de protocolos de vacinação adequados às necessidades de cada animal e à orientação veterinária."
    },
    {
        title: "Exames clínicos",
        icon: microscopeIcon,
        description: "Exames e avaliações que auxiliam na investigação de sintomas, no diagnóstico de doenças e no acompanhamento da saúde animal."
    },
    {
        title: "Cirurgias veterinárias",
        icon: heartbeatIcon,
        description: "Procedimentos cirúrgicos realizados com planejamento, avaliação prévia e cuidados voltados à segurança e à recuperação do paciente."
    },
    {
        title: "Prevenção e emergências",
        icon: shieldIcon,
        description: "Cuidados preventivos para reduzir riscos à saúde e atendimento para situações que exigem avaliação veterinária imediata."
    },
    {
        title: "Orientação nutricional",
        icon: boneIcon,
        description: "Orientações sobre alimentação equilibrada, porções adequadas e necessidades nutricionais de acordo com a idade e as características do animal."
    },
    {
        title: "Banho e higiene",
        icon: groomingIcon,
        description: "Cuidados com a higiene e o bem-estar dos pets, incluindo limpeza, escovação e orientações para manter a pelagem e a pele saúdaveis."
    },
];

export default function Services() {
    return (
        <section id="servicos" className="services">
            <div className="services__container">
                <h2>
                    Nossos <span>serviços</span>
                </h2>

                <ul
                    className="services__grid"
                    aria-label="Lista de serviços veterinários"
                >
                    {SERVICES.map(({ title, description, icon }) => (
                        <li key={title} className="service-card">
                            <span className="service-card__icon">
                                <img
                                    src={icon}
                                    alt=""
                                    aria-hidden="true"
                                />
                            </span>

                            <h3>{title}</h3>

                            <p>{description}</p>

                            <img
                                className="service-card__paw"
                                src={pawIcon}
                                alt=""
                                aria-hidden="true"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
