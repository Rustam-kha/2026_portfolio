// src/pages/ExperiencePage.jsx
import Experience from './Experience';
import Breadcrumb from './Breadcrumb';
import HeroSection from './HeroSection';
import CTASection from './CTASection';

const ExperiencePage = () => {
  return (
    <>
      <HeroSection
        title="My Experience"
        subtitle="Professional Journey"
        description="3+ years of professional experience in web development, working with various technologies and delivering high-quality projects for clients worldwide."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
        ctaText="View Resume"
        ctaLink="/resume"
        badge="Work Experience"
      />
      <Breadcrumb />
      <Experience />
      <CTASection />
    </>
  );
};

export default ExperiencePage;
