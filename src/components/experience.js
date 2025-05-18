// src/components/experience.js
'use client';

import Image from 'next/image';
import { IoIosArrowDropupCircle, IoMdClose } from 'react-icons/io';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

// --- (projectsData array remains the same as previously provided) ---
const projectsData = [
  {
    id: 1,
    title: 'Sagip Pilipinas',
    imageSrc: '/projects/SagipPilipinas.svg',
    altText: 'Sagip Pilipinas',
    techStack: ['Next.js', 'Firebase', 'TailwindCSS', 'TypeScript'],
    shortDescription:
      'A disaster management platform that empowers victims to request crucial aid, such as supplies or volunteer assistance. It streamlines relief efforts for organizations by facilitating rapid and efficient donation response.',
    carouselImages: [
      {
        src: '/projects/SagipPilipinas.svg',
        alt: 'Sagip Pilipinas - Logo',
      },
      {
        src: '/projects/SGP-Home.png',
        alt: 'Sagip Pilipinas - Main View',
      },
      {
        src: '/projects/SGP-DistCenter.png',
        alt: 'Sagip Pilipinas - Distribution Center View',
      },
      {
        src: '/projects/SGP-DonationNews.png',
        alt: 'Sagip Pilipinas - Donation News View',
      },
      {
        src: '/projects/SGP-LatestNews.png',
        alt: 'Sagip Pilipinas - Latest News View',
      },
      {
        src: '/projects/SGP-NewsDeets.png',
        alt: 'Sagip Pilipinas - News Details View',
      },
      {
        src: '/projects/SGP-Map.png',
        alt: 'Sagip Pilipinas - Map',
      },
      {
        src: '/projects/SGP-Donation1.png',
        alt: 'Sagip Pilipinas - Donation 1',
      },
      {
        src: '/projects/SGP-Donation2.png',
        alt: 'Sagip Pilipinas - Donation 2',
      },
      {
        src: '/projects/SGP-RequestAid.png',
        alt: 'Sagip Pilipinas - Requst Aid Page',
      },
    ],
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/M4monski/Sagip-Pilipinas',
        icon: <FaGithub />,
      },
      {
        name: 'Live Demo',
        url: 'https://sagip-pilipinas.vercel.app/',
        icon: <FaExternalLinkAlt />,
      },
    ],
    myContributions:
      "As the frontend development lead for Sagip Pilipinas, I created key features such as the Home Page, Map Page, Request Aid forms, user authentication (Login/Registration), donation forms, and navigation components, while also engineering the site's routing architecture and ensuring full UI responsiveness.",
    fullDescription:
      'This disaster management platform empowers victims to request crucial aid, such as supplies or volunteer assistance. It streamlines relief efforts for organizations by facilitating rapid response, efficient donation handling, and strategic volunteer deployment. Additionally, it provides a centralized hub for volunteers to discover and engage with active disaster situations where their help is needed. The platform aims to enhance community resilience by providing timely information and a coordinated approach to disaster response.',
  },
  {
    id: 2,
    title: 'Swift Sail',
    imageSrc: '/projects/SwiftSail.svg',
    altText: 'Swift Sail',
    techStack: ['Reactjs', 'Javascript', 'CSS'],
    shortDescription:
      'A Ferry booking, tracking, and company partnership and ferry management website based in Cebu.',
    carouselImages: [
      { src: '/projects/SwiftSail.svg', alt: 'Swift Sail - Landing Page' },
      {
        src: '/projects/SS-Home.png',
        alt: 'Swift Sail - Landing Page',
      },
      {
        src: '/projects/SS-Book.png',
        alt: 'Swift Sail - Booking',
      },
    ],
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/M4monski/ferrybookingsystem-scamacs',
        icon: <FaGithub />,
      },
      {
        name: 'Live Demo',
        url: 'https://swiftsail-ferries.vercel.app/',
        icon: <FaExternalLinkAlt />,
      },
    ],
    myContributions:
      'For Swift Sail, I designed and developed the UI/UX for the Home page, user profile management system, and primary navigation components, in addition to implementing client-side routing and dynamic modal interactions.',
    fullDescription:
      'Swift Sail is a comprehensive platform for ferry services in Cebu, offering features like online booking, real-time ferry tracking, and tools for ferry companies to manage their operations and partnerships. The goal was to modernize and simplify the ferry travel experience for passengers and operators alike by providing a one-stop solution for ferry ticket purchases, journey management, and operational oversight for partnered ferry companies.',
  },
  {
    id: 3,
    title: 'Gourmet Gamble',
    imageSrc: '/projects/GourmetGamble.svg',
    altText: 'Gourmet Gamble',
    techStack: ['Reactjs', 'Javascript', 'CSS'],
    shortDescription:
      'A Cuisine and Recipe Sharing website that integrates written and video tutorials to prepare the food. This website also integrates a community section where people can share their recipes and cuisine pictures.',
    carouselImages: [
      { src: '/projects/GourmetGamble.svg', alt: 'Gourmet Gamble - Home Page' },
      {
        src: '/projects/GG-Home.png',
        alt: 'Gourmet Gamble - Home View',
      },
      {
        src: '/projects/GG-Recipe.png',
        alt: 'Gourmet Gamble - Recipe Page',
      },
      {
        src: '/projects/GG-RecipeDeets.png',
        alt: 'Gourmet Gamble - Recipe Details Page',
      },
      {
        src: '/projects/GG-Community.png',
        alt: 'Gourmet Gamble - Community Forum',
      },
    ],
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/M4monski/GourmentGamble',
        icon: <FaGithub />,
      },
      {
        name: 'Live Demo',
        url: 'https://gourmetgamble0.vercel.app/?fbclid=IwZXh0bgNhZW0CMTEAAR25oNtxXFAdEMOVl61cuEBbGeUqOhRvjM5VS2599WpTU4V5joKDy1oOa7Y_aem_aA-Puq8s26jvxWeZmAID5g',
        icon: <FaExternalLinkAlt />,
      },
    ],
    myContributions:
      'On the Gourmet Gamble project, I developed the primary frontend UI/UX for key pages including Home, Recipes, Community, and Profile, alongside navigation elements, and also managed page routing and implemented interactive modals to enhance user engagement.',
    fullDescription:
      'Gourmet Gamble is a dynamic platform for food enthusiasts to discover, share, and learn new recipes. It combines written instructions with embedded video tutorials for a comprehensive learning experience. A key feature is its community section, which fosters interaction by allowing users to share their own culinary creations, photos, and engage in discussions, making it a vibrant hub for amateur and experienced cooks alike.',
  },
  {
    id: 4,
    title: 'QuickShop',
    imageSrc: '/projects/BG-QS-FINAL.png',
    altText: 'QuickShop',
    techStack: ['C#', 'SQL', '.NET'],
    shortDescription:
      'A Simple POS System for business owners to easily sell, manage sales, generate sales reports, and manage stocks within the system.',
    carouselImages: [
      {
        src: '/projects/BG-QS-FINAL.png',
        alt: 'QuickShop - Main Sales Interface',
      },
      {
        src: '/projects/QuickShop_inventory.png',
        alt: 'QuickShop - Inventory Management',
      },
      {
        src: '/projects/QuickShop_sales_report.png',
        alt: 'QuickShop - Sales Report Generation',
      },
    ],
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/M4monski/QUICKSHOP-Finals-Requirement-CpE262',
        icon: <FaGithub />,
      },
    ],
    myContributions:
      'I independently designed, developed, and implemented a full-stack Point-of-Sale (POS) system using C# and .NET, building features such as sales processing, inventory management, sales reporting, and a user self-serve kiosk, which provided comprehensive experience across the software development lifecycle from concept to deployment.',
    fullDescription:
      'QuickShop is a desktop-based Point of Sale (POS) system designed to help small to medium-sized businesses streamline their sales operations. It offers robust features for product and stock management, sales processing, customer data management, and the generation of insightful sales reports to aid in business decision-making. The system aims to provide an affordable and easy-to-use solution for local businesses to improve efficiency and track performance.',
  },
];

// Helper function to get scrollbar width
const getScrollbarWidth = () => {
  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // Force scrollbar
  outer.style.msOverflowStyle = 'scrollbar'; // For IE 10+
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
};

const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev disabled:opacity-30 absolute top-1/2 left-1 md:left-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
    disabled={!enabled}
    aria-label="Previous image"
  >
    <FiChevronLeft size={24} />
  </button>
);

const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next disabled:opacity-30 absolute top-1/2 right-1 md:right-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
    disabled={!enabled}
    aria-label="Next image"
  >
    <FiChevronRight size={24} />
  </button>
);

export default function ExperiencePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollbarWidth, setScrollbarWidth] = useState(0); // State to store scrollbar width

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      if (emblaApi) {
        emblaApi.off('select', onSelect);
        emblaApi.off('reInit', onSelect);
      }
    };
  }, [emblaApi, onSelect]);

  const openModal = (project) => {
    const currentScrollbarWidth = getScrollbarWidth();
    setScrollbarWidth(currentScrollbarWidth);

    // Check if body is scrollable before hiding scrollbar
    const bodyIsScrollable = document.body.scrollHeight > window.innerHeight;

    if (bodyIsScrollable) {
      document.body.style.paddingRight = `${currentScrollbarWidth}px`;
      // Adjust navbar if it's fixed and affected
      const navbar = document.querySelector('nav.fixed'); // More specific selector if needed
      if (navbar) {
        navbar.style.paddingRight = `${currentScrollbarWidth}px`;
      }
    }
    document.body.style.overflow = 'hidden';

    setSelectedProject(project);
    setIsModalOpen(true);
    requestAnimationFrame(() => {
      setIsMounted(true);
    });
    if (emblaApi) {
      setTimeout(() => emblaApi.reInit(), 50);
    }
  };

  const closeModal = () => {
    setIsMounted(false);
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = ''; // Reset body padding
      // Reset navbar padding
      const navbar = document.querySelector('nav.fixed'); // More specific selector if needed
      if (navbar) {
        navbar.style.paddingRight = '';
      }

      setIsModalOpen(false);
      setSelectedProject(null);
      // setScrollbarWidth(0); // Optionally reset
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isModalOpen || !isMounted) return;

      if (event.key === 'Escape') {
        closeModal();
      } else if (
        selectedProject &&
        selectedProject.carouselImages &&
        selectedProject.carouselImages.length > 1 &&
        emblaApi
      ) {
        if (event.key === 'ArrowRight') {
          scrollNext();
        } else if (event.key === 'ArrowLeft') {
          scrollPrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    isModalOpen,
    isMounted,
    selectedProject,
    scrollNext,
    scrollPrev,
    emblaApi,
    closeModal,
  ]);

  return (
    <div className="containerBackground relative pb-16">
      <div className="relative flex items-center justify-center w-full text-[#FFB120] text-[1.5rem] md:text-[2.5rem] font-extrabold top-5 z-10 mb-10">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="absolute flex items-center justify-center w-full text-[#443323] opacity-50 font-extrabold text-[2.5rem] md:text-[5rem] top-3.25 md:top-1">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="w-full flex items-center justify-center absolute">
        <div className="absolute w-20 md:w-35 h-1 bg-[#FFB120] -top-5 md:-top-4"></div>
        <div className="absolute w-50 md:w-65 h-0.25 bg-[#FFB120] -top-4.75 md:-top-3.75"></div>
      </div>
      <main
        id="experiencePage"
        className="w-full md:max-w-6xl lg:max-w-7xl h-full p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-stretch justify-center mx-auto"
      >
        {projectsData.map((project) => (
          <button
            key={project.id}
            onClick={() => openModal(project)}
            className="flex flex-col h-full items-start w-full p-4 bg-[#FFD8B5]/40 rounded-xl group cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb120]"
          >
            <div className="lg:flex items-start w-full">
              <div className="flex-shrink-0 mr-4 flex justify-center items-center mt-1">
                <Image
                  width={180}
                  height={180}
                  alt={project.altText}
                  src={project.imageSrc}
                  className="rounded-md object-cover mb-8 md:mb-0"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-semibold text-left text-[var(--foreground)] group-hover:text-[#c48a20] transition-colors duration-300">
                    {project.title}
                  </h2>
                  <span className="text-2xl text-[var(--foreground)]/70 group-hover:text-[#ffb120] group-hover:rotate-90 transition-all duration-300 ml-2">
                    <IoIosArrowDropupCircle />
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#473525] text-xs text-[#EDEDED] py-1 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-start">
                  <p className="text-sm text-[var(--foreground)]/90 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </main>

      {isModalOpen && (
        <div
          className={`fixed inset-0 flex justify-center items-center z-[200] p-4
                      transition-opacity duration-300 ease-in-out
                      ${
                        isMounted
                          ? 'opacity-100 backdrop-blur-sm bg-black/30'
                          : 'opacity-0 pointer-events-none'
                      }`}
          onClick={closeModal}
        >
          <div
            className={`bg-[#6E4F33] text-[var(--foreground)] rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative
                        transform transition-all duration-300 ease-in-out
                        ${
                          isMounted
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-95'
                        }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-3xl hover:text-[#ffb120] hover:scale-120 cursor-pointer transition-all z-20"
              aria-label="Close project details"
            >
              <IoMdClose />
            </button>

            {selectedProject && (
              <>
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-6 md:mb-8">
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    {selectedProject.carouselImages &&
                    selectedProject.carouselImages.length > 0 ? (
                      <Image
                        width={600}
                        height={400}
                        alt={selectedProject.carouselImages[0].alt}
                        src={selectedProject.carouselImages[0].src}
                        className="rounded-lg object-contain w-full h-auto max-h-80 md:max-h-[400px]"
                      />
                    ) : (
                      <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                        Main Image Not Available
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col mt-4 md:mt-0">
                    <h2 className="text-3xl font-bold text-[#FFB120] mb-4">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-6">
                      {selectedProject.socialLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-[var(--foreground)] hover:text-[#FFB120] transition-colors py-1 px-3 border border-[var(--foreground)]/30 hover:border-[#FFB120] rounded-full"
                        >
                          {link.icon &&
                            React.cloneElement(link.icon, {
                              className: 'text-lg',
                            })}
                          <span>{link.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#c48a20] mb-2">
                      My Contributions
                    </h3>
                    <p className="text-base leading-relaxed text-[var(--foreground)]/90">
                      {selectedProject.myContributions}
                    </p>
                  </div>

                  {selectedProject.carouselImages &&
                    selectedProject.carouselImages.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-[#c48a20] mb-3">
                          Project Gallery
                        </h3>
                        <div
                          className="embla relative overflow-hidden"
                          ref={emblaRef}
                        >
                          <div className="embla__container flex">
                            {selectedProject.carouselImages.map(
                              (img, index) => (
                                <div
                                  className="embla__slide flex-[0_0_100%] min-w-0 relative aspect-video flex items-center justify-center bg-white rounded-md"
                                  key={index}
                                >
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="rounded-md"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  />
                                </div>
                              )
                            )}
                          </div>
                          {selectedProject.carouselImages.length > 1 && (
                            <>
                              <PrevButton
                                onClick={scrollPrev}
                                enabled={prevBtnEnabled}
                              />
                              <NextButton
                                onClick={scrollNext}
                                enabled={nextBtnEnabled}
                              />
                            </>
                          )}
                        </div>
                        {selectedProject.carouselImages.length > 1 && (
                          <div className="embla__dots flex justify-center items-center mt-3 space-x-2">
                            {selectedProject.carouselImages.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  scrollTo(index);
                                }}
                                className={`embla__dot w-2.5 h-2.5 rounded-full transition-colors ${
                                  index === selectedIndex
                                    ? 'bg-[var(--foreground)]'
                                    : 'bg-[var(--foreground)]/30'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                  <div>
                    <h3 className="text-xl font-semibold text-[#c48a20] mb-2">
                      Project Overview
                    </h3>
                    <p className="text-base leading-relaxed text-[var(--foreground)]/90">
                      {selectedProject.fullDescription}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
