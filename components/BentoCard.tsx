import React, { ReactNode } from "react";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    href?: string;
}

export const BentoCard = ({ children, className = "", href }: BentoCardProps) => {
    const content = (
        <div className={`bento-card flex flex-col h-full w-full ${className}`}>
            {children}
        </div>
    );

    if (href) {
        return (
            <a href={href} className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-primary-light rounded-3xl">
                {content}
            </a>
        );
    }

    return content;
};
