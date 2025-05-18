// src/components/navBar.js
'use client';

import { useState, useEffect } from 'react';
import ContactsModal from './contactsModal';
import { useActiveSection } from '@/app/ActiveSectionContext'; // Adjust path if needed

export default function NavBar() {
  const { activeSection } = useActiveSection();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for burger menu

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Element with Id ${sectionId} is non existent`);
    }
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsMobileMenuOpen(false); // Close mobile menu if contacts modal is opened
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Optional: Close mobile menu if window resizes to a larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Tailwind's 'md' breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = (
    <>
      <button
        onClick={() => handleScrollTo('homePage')}
        className={`navButton ${
          activeSection === 'homePage' ? 'navButtonActive' : ''
        }`}
      >
        Home
      </button>
      <button
        onClick={() => handleScrollTo('bioPage')}
        className={`navButton ${
          activeSection === 'bioPage' ? 'navButtonActive' : ''
        }`}
      >
        Bio
      </button>
      <button
        onClick={() => handleScrollTo('technologyPage')}
        className={`navButton ${
          activeSection === 'technologyPage' ? 'navButtonActive' : ''
        }`}
      >
        Technology
      </button>
      <button
        onClick={() => handleScrollTo('experiencePage')}
        className={`navButton ${
          activeSection === 'experiencePage' ? 'navButtonActive' : ''
        }`}
      >
        Experience
      </button>
      <button onClick={toggleModal} className="navButton">
        Contacts
      </button>
    </>
  );

  return (
    <div>
      {/* Burger Menu Button - Visible on small screens */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-5 right-5 z-[101] md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <span className="sr-only">Open main menu</span>
        {isMobileMenuOpen ? (
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Desktop Navigation - Hidden on small screens, visible on medium and up */}
      <nav className="fixed md:right-10 top-5 gap-10 text-[0.5rem] md:text-[1rem] font-semibold hidden md:flex z-[100]">
        {navLinks}
      </nav>

      {/* Mobile Menu - Slides in or appears */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[99] bg-background/95 backdrop-blur-sm md:hidden" // Covers screen, adjust styling as needed
        >
          <div className="flex flex-col items-center justify-center h-full gap-6 text-xl font-semibold">
            {navLinks}
          </div>
        </div>
      )}

      <ContactsModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
