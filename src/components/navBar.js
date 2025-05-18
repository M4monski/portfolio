// src/components/navBar.js
'use client';

import { useState } from 'react';
import ContactsModal from './contactsModal';
import { useActiveSection } from '@/app/ActiveSectionContext'; // Adjust path if needed

export default function NavBar() {
  const { activeSection } = useActiveSection(); // Get activeSection from context
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Element with Id ${sectionId} is non existent`);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <nav className="fixed right-10 top-5 gap-10 text-[1rem] font-semibold flex z-100">
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
      </nav>
      <ContactsModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
