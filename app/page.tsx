import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhySection from '../components/WhySection';
import FeaturedProjects from '../components/FeaturedProjects';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <FeaturedProjects />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}// Force Vercel redeploy - Fri Aug 22 02:59:24 EDT 2025
