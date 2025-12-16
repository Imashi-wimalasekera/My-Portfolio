import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
      </main>
    </div>
  );
}
