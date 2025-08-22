import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhySection from '../components/WhySection';
import FeaturedProjects from '../components/FeaturedProjects';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

// Force complete Vercel redeploy - All latest features and fixes included
// This ensures Vercel shows the same content as localhost
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProjects />
        <WhySection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}