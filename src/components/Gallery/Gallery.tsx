import "./Gallery.css";
import img1 from "../../assets/images/image-clinic-reception.png";
import img2 from "../../assets/images/image-examination-room.png"; 
import img3 from "../../assets/images/image-clinic-waiting-area.png";

export default function Gallery() {
    const photos = [
        { src: img1, alt: "Recepção" },
        { src: img2, alt: "Lab" },
        { src: img3, alt: "Espera" },
    ];

    return (
        <section id="galeria" className="gallery">
            <div className="gallery__container">
                
                <div className="gallery__header">
                    <h2>
                        Conheça<br />
                        nosso <span>espaço</span>
                    </h2>
                    <p className="gallery__subtitle">
                        Um ambiente pensado para oferecer conforto, segurança e o melhor atendimento para o seu pet.
                    </p>
                </div>

                <div className="gallery__grid">
                    {photos.map((photo, index) => (
                        <div key={index} className="gallery__item">
                            <img 
                                src={photo.src} 
                                alt={photo.alt} 
                                loading="lazy" 
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}