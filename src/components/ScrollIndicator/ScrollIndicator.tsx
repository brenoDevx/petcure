import { useEffect, useState } from "react";
import "./ScrollIndicator.css";

function ScrollIndicator() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollableHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            if (scrollableHeight <= 0) {
                setProgress(0);
                return;
            }

            const currentProgress =
                (window.scrollY / scrollableHeight) * 100;

            setProgress(Math.min(100, Math.max(0, currentProgress)));
        };

        updateProgress();

        window.addEventListener("scroll", updateProgress, {
            passive: true,
        });

        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <div
            className="scroll-indicator"
            role="progressbar"
            aria-label="Progresso da página"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
        >
            <div
                className="scroll-indicator__bar"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

export default ScrollIndicator;