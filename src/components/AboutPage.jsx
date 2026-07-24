// src/pages/AboutPage.jsx
import About from './About';
import Breadcrumb from './Breadcrumb';
import HeroSection from './HeroSection';
import CTASection from './CTASection';

const AboutPage = () => {
  return (
    <>
      <HeroSection
        title="About Me"
        subtitle="Full Stack Developer & WordPress Expert"
        description="I'm Rustam Khan, a passionate Full Stack Developer with 3+ years of experience in building web applications. I specialize in WordPress development and the MERN stack, creating scalable and user-friendly solutions."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
        ctaText="Hire Me"
        ctaLink="/contact"
        badge="Know Me Better"
      />
      <Breadcrumb />
      <About />
      <CTASection />
    </>
  );
};

export default AboutPage;
