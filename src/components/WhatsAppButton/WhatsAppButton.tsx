import whatsapp from "../../assets/icons/icon-whatsapp.svg"
import arrow from "../../assets/icons/icon-arrow.svg"
import "./WhatsAppButton.css"

interface WhatsAppButtonProps {
    className?: string;
}

function WhatsAppButton({className = ""}: WhatsAppButtonProps) {
    return (
        <a 
            href="https://wa.me/55DDDNUMERO"
            className={`whatsapp-button whatsapp-button-${className}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={whatsapp} alt="" />
            <span>Agende pelo WhatsApp</span>
            <img src={arrow} alt="" className="whatsapp-arrow" />

        </a>
    )
}

export default WhatsAppButton;