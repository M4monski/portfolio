import BioPage from '@/components/bio';
import TechnologyPage from '@/components/technology';
import ExperiencePage from '@/components/experience';
import HomePage from '@/components/home';
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="w-full h-full scroll-smooth ">
      {/* NAVBAR */}
      <NavBar />

      {/* HOME PAGE */}
      <HomePage />

      {/* BIO PART */}
      <BioPage />

      {/* TECHNOLOGY */}
      <TechnologyPage />

      {/* EXPERIENCE */}
      <ExperiencePage />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
