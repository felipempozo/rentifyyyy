
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import SuccessStorySection from '@/components/SuccessStorySection';
import FeatureSection from '@/components/FeatureSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SolutionSection />
      <FeatureSection />
      <HowItWorksSection />
      <SuccessStorySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
