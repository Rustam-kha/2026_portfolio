// src/pages/ContactPage.jsx
import Contact from './Contact';
import Breadcrumb from './Breadcrumb';
import HeroSection from './HeroSection';

const ContactPage = () => {
  return (
    <>
      <HeroSection
        title="Contact Me"
        subtitle="Let's Connect"
        description="Have a project in mind? Let's discuss how I can help you bring your ideas to life. I'm available for freelance work and full-time positions."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200"
        ctaText="Send Message"
        ctaLink="#contact-form"
        badge="Get in Touch"
        reversed={true}
      />
      <Breadcrumb />
      <Contact />
    </>
  );
};

export default ContactPage;
