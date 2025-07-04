import { useEffect, useState } from "react";

export const LoadingScreen = ({onComplete}) => {

    const [title, setTitle] = useState("");
    const fullTitle = "npm start";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTitle(fullTitle.substring(0, i));
            i++;

            if (i > fullTitle.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1300)
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-base text-primary flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl title">
                {title}<span className="animate-blink ml-1 text-secondary">| </span>
            </div>

            <div className="w-[200px] h-[2px] bg-accents rounded relative overflow-hidden">
                <div className="w-[100%] h-full bg-secondary shadow-[0_0_15px_accents] loading-bar-animation"></div>
            </div>
        </div>
    )
}