import React from "react";

const Section = ({ title, children, className = "" }) => {
    return (
        <section className={`section text-center px-6 py-16 md:py-24 mt-8 ${className}`}>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {title}
            </h2>
            <div className="max-w-3xl mx-auto text-gray-800 leading-relaxed">
                {children}
            </div>
        </section>
    );
};

export default Section;
