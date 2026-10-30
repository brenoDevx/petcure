import { useEffect, useRef, useState } from "react";

import stethoscopeIcon from "../../assets/icons/icon-stethoscope.svg";
import syringeIcon from "../../assets/icons/icon-syringe.svg";
import microscopeIcon from "../../assets/icons/icon-microscope.svg";
import heartbeatIcon from "../../assets/icons/icon-heartbeat.svg";
import shieldIcon from "../../assets/icons/icon-shield-check.svg";
import boneIcon from "../../assets/icons/icon-bone.svg";

import "./Services.css";

type Service = {
    title: string;
    description: string;
    icon: string;
};

const SERVICES: Service[] = [
    {
        title: "Consultas veterinárias",
        icon: stethoscopeIcon,
        description: "Avaliação completa da saúde do seu pet, com diagnóstico e orientação personalizada em cada fase da vida."
    },
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
];

export default function Services() {
    const carouselRef = useRef<HTMLUListElement>(null);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const updateProgress = () => {
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;

            if (maxScroll <= 0) {
                setProgress(100);
                return;
            }

            const currentProgress =
                (carousel.scrollLeft / maxScroll) * 100;

            setProgress(currentProgress);
        };

        updateProgress();

        carousel.addEventListener("scroll", updateProgress);

        const resizeObserver = new ResizeObserver(updateProgress);
        resizeObserver.observe(carousel);

        return () => {
            carousel.removeEventListener("scroll", updateProgress);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <section id="servicos" className="services">
            <div className="services__container">
                <h2>Nossos <span>serviços</span></h2>

                <ul
                    className="services__grid"
                    ref={carouselRef}
                    tabIndex={0}
                    aria-label="Lista de serviços veterinários"
                >
                    {SERVICES.map(({ title, description, icon }) => (
                        <li key={title} className="service-card">
                            <span className="service-card__icon">
                                <img src={icon} alt="" aria-hidden="true" />
                            </span>

                            <h3>{title}</h3>
                            <p>{description}</p>
                        </li>
                    ))}
                </ul>

                <div
                    className="services__progress"
                    role="progressbar"
                    aria-label="Progresso da navegação pelos serviços"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(progress)}
                >
                    <div
                        className="services__progress-bar"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </section>
    );
}
