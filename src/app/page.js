// src/app/page.js
'use client';

import { useEffect, useRef } from 'react';
import { useActiveSection } from './ActiveSectionContext'; // Adjust path if needed

// Import your section components
import HomePage from '@/components/home';
import BioPage from '@/components/bio';
import TechnologyPage from '@/components/technology';
import ExperiencePage from '@/components/experience';
// ... any other section components

export default function Home() {
  const { setActiveSection } = useActiveSection();

  // Create refs for the wrapper divs of your section components
  const homeRef = useRef(null);
  const bioRef = useRef(null);
  const techRef = useRef(null);
  const expRef = useRef(null);

  useEffect(() => {
    const sections = [
      // The 'id' here should match the id you expect in navBar.js for highlighting
      { id: 'homePage', ref: homeRef },
      { id: 'bioPage', ref: bioRef },
      { id: 'technologyPage', ref: techRef },
      { id: 'experiencePage', ref: expRef },
    ];

    const observerOptions = {
      root: null, // Observes intersections relative to the viewport
      rootMargin: '0px',
      // Adjust threshold: 0.5 means 50% of the element is visible.
      // You might want a lower value if your sections are tall, e.g., 0.1 or 0.2,
      // or a higher one if they are short.
      // Or use a rootMargin like '-40% 0px -60% 0px' to define an active area in the middle of the screen.
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // The 'id' of the div being observed is what we set in setActiveSection
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [setActiveSection]); // Add setActiveSection to dependency array

  return (
    <div className="w-full h-full scroll-smooth">
      {/* Wrap each section component in a div with the ref and ID */}
      {/* The ID on these divs MUST match what IntersectionObserver expects and what navBar uses */}
      <div id="homePage" ref={homeRef}>
        <HomePage />
      </div>
      <div id="bioPage" ref={bioRef}>
        <BioPage />
      </div>
      <div id="technologyPage" ref={techRef}>
        <TechnologyPage />
      </div>
      <div id="experiencePage" ref={expRef}>
        <ExperiencePage />
      </div>
    </div>
  );
}
