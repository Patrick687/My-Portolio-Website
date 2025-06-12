import React from "react";

const ExperienceSection: React.FC = () => (
    <section className="w-full flex flex-col items-center py-12 bg-gray-50 dark:bg-gray-900 transition-colors">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Experience
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl w-full text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
            <div className="mb-2 flex flex-col md:flex-row md:justify-between md:items-center">
                <span className="font-bold text-xl">Logic Information Systems</span>
                <span className="text-gray-500 dark:text-gray-400 text-base mt-1 md:mt-0">Software Developer &nbsp;|&nbsp; Apr 2021 – Aug 2024</span>
            </div>
            <div className="mb-2">
                <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs font-semibold mr-2 mb-2">
                    Associate Consultant of the Year (2021)
                </span>
            </div>
            <ul className="list-disc pl-5 space-y-2">
                <li>
                    <b>Developed and maintained scalable backend services</b> for Oracle Xstore POS, extending functionality and resolving bugs for <b>1000+ retail stores</b> using <b>Java, Spring, and SQL</b>.
                </li>
                <li>
                    <b>Integrated Xstore POS with external Order Management, Promotion, and Loyalty systems</b> via <b>RESTful and SOAP APIs</b>, enabling secure, real-time service communication with robust error handling.
                </li>
                <li>
                    <b>Led debugging and resolution of EFTLink payment issues</b> by analyzing logs and collaborating with external authorization providers, <b>reducing transaction failures by 85%</b>.
                </li>
                <li>
                    <b>Designed and delivered PDF operational reports</b> using BI Publisher and Word templates, authoring and optimizing custom SQL queries in Oracle and SQL Server to provide actionable retail insights.
                </li>
                <li>
                    <b>Improved code quality and team productivity</b> through active code reviews, Agile Scrum practices, and workflow management in Jira and GitHub.
                </li>
                <li>
                    <b>Translated client requirements into clear specs, user stories, and dev tasks</b>, accelerating feature delivery through daily client interactions and cross-team collaboration.
                </li>
            </ul>
        </div>
    </section>
);

export default ExperienceSection;