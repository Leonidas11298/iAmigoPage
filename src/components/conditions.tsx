import { useEffect } from "react";

import Navbar from "./elements/Navbar";
import { Footer } from "./elements/Footer";

interface ConditionsProps {
    title: string;
    children: React.ReactNode;
}

export const ConditionsPage = ({ title, children }: ConditionsProps) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <>
            <Navbar />

                <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
                {children}
                </main>

            <Footer />
        </>
    )
}