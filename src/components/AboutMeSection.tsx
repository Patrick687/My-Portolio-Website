import React from "react";

const AboutMeSection: React.FC = () => (
    <section className="w-full flex flex-col items-center py-12 bg-gray-50 dark:bg-gray-900 transition-colors">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            About Me
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl w-full text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
            <p className="mb-4">
                I’m <b>Patrick Klein</b>, a <b>full stack web developer</b> based in <b>Austin, Texas</b> with a <b>B.S. in Computer Science from UT Dallas</b>. I build <b>scalable, user-centric applications</b> with <b>React, TypeScript, Node.js, Express,</b> and <b>PostgreSQL</b>.
            </p>
            <p>
                I’m looking for a <b>full stack developer role</b> where I can keep <b>solving real-world problems</b>, contribute to <b>great teams</b>, and <b>grow as a builder</b>.
            </p>
        </div>
    </section>
);

export default AboutMeSection;