import starsIcon from "../../assets/icons/icon-five-stars.svg";
import dogPhoto from "../../assets/images/image-dog-testimonial.png";
import catPhoto from "../../assets/images/image-cat-testimonial.png";
import rabbitPhoto from "../../assets/images/image-rabbit-testimonial.png";

import "./Testimonials.css";

type Testimonial = {
    name: string;
    role: string;
    text: string;
    photo: string;
    photoAlt: string;
};

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Mariana S.",
        role: "Tutora da Mel",
        text: "Desde a primeira consulta, senti que minha cachorrinha estava em boas mãos. O atendimento foi atencioso, e todas as minhas dúvidas foram esclarecidas com muito carinho.",
        photo: dogPhoto,
        photoAlt: "Mel, cachorra golden retriever",
    },
    {
        name: "Rafael M.",
        role: "Tutor do Tom",
        text: "Gostei muito da atenção e da clareza nas orientações. É importante encontrar um lugar onde nosso pet seja tratado com cuidado e respeito.",
        photo: catPhoto,
        photoAlt: "Tom, gato rajado",
    },
    {
        name: "Fernanda L.",
        role: "Tutora do Floquinho",
        text: "Levei meu coelhinho para uma avaliação e fiquei muito satisfeita com o atendimento. A equipe foi cuidadosa, paciente e explicou tudo com clareza.",
        photo: rabbitPhoto,
        photoAlt: "Floquinho, coelho",
    },
];

export default function Testimonials() {
    return (
        <section
            id="depoimentos"
            className="testimonials"
            aria-labelledby="depoimentos-titulo"
        >
            <div className="testimonials__container">
                <h2 id="depoimentos-titulo">
                    O que nossos clientes <span>dizem</span>
                </h2>

                <p className="testimonials__subtitle">
                    Histórias reais de tutores que confiam no nosso trabalho.
                </p>

                <ul
                    className="testimonials__grid"
                    aria-label="Depoimentos de clientes"
                >
                    {TESTIMONIALS.map(({ name, role, text, photo, photoAlt }) => (
                        <li key={name} className="testimonial-card">
                            <img
                                src={starsIcon}
                                alt="Avaliação: 5 de 5 estrelas"
                                className="testimonial-card__stars"
                            />

                            <blockquote className="testimonial-card__text">
                                <p>“{text}”</p>
                            </blockquote>

                            <footer className="testimonial-card__author">
                                <img
                                    src={photo}
                                    alt={photoAlt}
                                    className="testimonial-card__photo"
                                    loading="lazy"
                                />
                                <div>
                                    <strong>{name}</strong>
                                    <span>{role}</span>
                                </div>
                            </footer>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
