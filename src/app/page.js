import BioPage from '@/components/bio';
import TechnologyPage from '@/components/technology';
import ExperiencePage from '@/components/experience';

export default function Home() {
  return (
    <div className="w-full h-full scroll-smooth ">
      <header></header>
      {/* BIO PART */}
      <BioPage />

      {/* TECHNOLOGY */}
      <TechnologyPage />

      {/* EXPERIENCE */}
      <ExperiencePage />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
