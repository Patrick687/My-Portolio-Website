import type React from "react";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import DarkModeToggle from "../components/DarkModeToggle";
import AboutMeSection from "../components/AboutMeSection";
import ExperienceSection from "../components/ExperienceSection";
const LandingPage: React.FC = () => {
    return (
        <div className="w-full">
            <DarkModeToggle />
            <HeroSection />
            <AboutMeSection />
            <ExperienceSection />
            {/* <Projects /> */}
            <ContactSection />
        </div>
    );
};

export default LandingPage;