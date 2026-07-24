// src/pages/ServicesPage.jsx
import Services from './Services';
import Breadcrumb from './Breadcrumb';
import HeroSection from './HeroSection';
import CTASection from './CTASection';

const ServicesPage = () => {
  return (
    <>
      <HeroSection
        title="My Services"
        subtitle="What I Can Do For You"
        description="I offer comprehensive web development services including WordPress, MERN Stack, Shopify, and more. Let me help you build your next digital project."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"
        ctaText="Get a Quote"
        ctaLink="/contact"
        badge="Professional Services"
      />
      <Breadcrumb />
      <Services />
      <CTASection />
    </>
  );
};

export default ServicesPage;
