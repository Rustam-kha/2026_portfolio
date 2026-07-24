// src/pages/CertificatesPage.jsx
import Certificates from './Certificates';
import Breadcrumb from './Breadcrumb';
import HeroSection from './HeroSection';
import CTASection from './CTASection';

const CertificatesPage = () => {
  return (
    <>
      <HeroSection
        title="Certificates"
        subtitle="Professional Certifications"
        description="My certifications reflect my commitment to continuous learning and professional development in the field of web development."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200"
        ctaText="View Resume"
        ctaLink="/resume"
        badge="Certifications"
      />
      <Breadcrumb />
      <Certificates />
      <CTASection />
    </>
  );
};

export default CertificatesPage;
