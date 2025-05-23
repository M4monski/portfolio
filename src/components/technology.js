// src/components/technology.js
'use client'; // Add this if not already present for using hooks

import Image from 'next/image';
import { useState, useEffect } from 'react';

// Define all your technology items with categories
const allTechItems = [
  // Design
  {
    id: 'figma',
    name: 'Figma',
    logo: '/logos/Figma.svg', // Assuming you have or will add Figma.svg in public/logos
    link: 'https://www.figma.com/',
    category: 'design',
  },
  // Core Technology
  {
    id: 'typescript',
    name: 'TypeScript',
    logo: '/logos/Typescript.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Glossary/TypeScript',
    category: 'core',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    logo: '/logos/JavaScript.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'core',
  },
  {
    id: 'html5',
    name: 'HTML5',
    logo: '/logos/HTML5.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
    category: 'core',
  },
  {
    id: 'css',
    name: 'CSS',
    logo: '/logos/CSS.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    category: 'core',
  },
  {
    id: 'dotnet',
    name: '.NET',
    logo: '/logos/dotNET.svg',
    link: 'https://dotnet.microsoft.com/en-us/',
    category: 'core',
  },
  {
    id: 'csharp',
    name: 'C#',
    logo: '/logos/CSharp.svg',
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    category: 'core',
  },
  {
    id: 'python',
    name: 'Python',
    logo: '/logos/Python.svg',
    link: 'https://www.python.org/',
    category: 'core',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    logo: '/logos/Nodejs.svg',
    link: 'https://nodejs.org/en',
    category: 'core',
  },
  {
    id: 'reactjs',
    name: 'React.js',
    logo: '/logos/React.svg',
    link: 'https://react.dev/',
    category: 'core',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    logo: '/logos/nextjs.svg',
    link: 'https://nextjs.org/',
    category: 'core',
  },
  {
    id: 'tailwindcss',
    name: 'TailwindCSS',
    logo: '/logos/TailwindCSS.svg',
    link: 'https://tailwindcss.com/',
    category: 'core',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    logo: '/logos/Firebase.svg',
    link: 'https://firebase.google.com/',
    category: 'core',
  },
  {
    id: 'sql',
    name: 'SQL',
    logo: '/logos/SQL.svg',
    link: 'https://www.mysql.com/', // Or a more general SQL link
    category: 'core',
  },
  {
    id: 'msaccess',
    name: 'Microsoft Access',
    logo: '/logos/MSAcess.svg',
    link: 'https://www.microsoft.com/en-us/microsoft-365/access',
    category: 'core', // Categorized as core as per our discussion
  },
  {
    id: 'git',
    name: 'Git',
    logo: '/logos/Git.svg',
    link: 'https://git-scm.com/',
    category: 'core',
  },
  {
    id: 'github',
    name: 'Github',
    logo: '/logos/Github.svg',
    link: 'https://github.com/',
    category: 'core',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    logo: '/logos/Gemini.svg',
    link: 'https://gemini.google.com/app',
    category: 'core',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    logo: '/logos/ChatGPT.svg',
    link: 'https://chat.openai.com/',
    category: 'core',
  },
  // Environment
  {
    id: 'vs2022',
    name: 'Visual Studio 2022',
    logo: '/logos/VS2022.svg',
    link: 'https://visualstudio.microsoft.com/',
    category: 'environment',
  },
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    logo: '/logos/VSCode.svg',
    link: 'https://code.visualstudio.com/',
    category: 'environment',
  },
  // Communication
  {
    id: 'discord',
    name: 'Discord',
    logo: '/logos/Discord.svg',
    link: 'https://discord.com/',
    category: 'communication',
  },
  {
    id: 'msteams',
    name: 'Microsoft Teams',
    logo: '/logos/MSTeams.svg',
    link: 'https://teams.microsoft.com/v2/',
    category: 'communication',
  },
];

const filterCategories = [
  { label: 'All', value: 'all' },
  { label: 'Design', value: 'design' },
  { label: 'Core Technology', value: 'core' },
  { label: 'Environment', value: 'environment' },
  { label: 'Communication', value: 'communication' }, // Corrected spelling
];

export default function TechnologyPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(allTechItems);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(allTechItems);
    } else {
      setFilteredItems(
        allTechItems.filter((item) => item.category === activeFilter)
      );
    }
  }, [activeFilter]);

  return (
    <div className="containerBackground relative">
      <div className="relative flex items-center justify-center w-full text-[#FFB120] text-[1rem] sm:text-[1.5rem] lg:text-[2.5rem] font-extrabold top-5 z-10 mb-10">
        <h1>TECHNOLOGY STACK</h1>
      </div>
      <div className="absolute flex items-center justify-center w-full text-[#443323] opacity-50 font-extrabold text-[1.5rem] sm:text-[2.5rem] lg:text-[5rem] top-4 sm:top-3 lg:top-1">
        <h1>TECHNOLOGY STACK</h1>
      </div>
      <div className="w-full flex items-center justify-center absolute">
        <div className="absolute w-20 md:w-35 h-1 bg-[#FFB120] -top-5"></div>
        <div className="absolute w-50 md:w-65 h-0.25 bg-[#FFB120] -top-4.75"></div>
      </div>
      <main
        id="technologyPage"
        className="w-full h-full min-h-screen flex justify-center py-0 sm:py-8" // Use min-h-screen if content can be short
      >
        <div className="flex flex-col items-center w-full h-full min-h-screen max-w-4/5 rounded-4xl   my-auto">
          <div className="flex justify-center"></div>
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-4 lg:gap-8 text-[10px] md:text-[12px] lg:text-[15px] justify-center p-4">
            {' '}
            {/* Adjusted gap and padding for responsiveness */}
            {filterCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`HoverButton !px-4 md:!px-8 ${
                  activeFilter === category.value
                    ? 'bg-[#ffb120] scale-105' // Example active style
                    : 'text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="mt-8 mb-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 md:gap-6 lg:gap-8 justify-around w-full max-w-9/10 p-4 justify-items-center items-center bg-[#FFD8B5]/40 rounded-4xl transition-all duration-300">
            {' '}
            {/* Responsive grid and added gap */}
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer" // Good practice for security and SEO
                  className="technologyLabels flex flex-col items-center text-center p-2 transition-transform scale-80 md:scale-100 hover:scale-105" // Ensure this class applies desired styles
                >
                  <Image
                    src={item.logo}
                    width={75}
                    height={75}
                    alt={item.name}
                    className="object-contain scale-80 md:scale-100" // Ensures image scales nicely
                  />
                  <span className="mt-2 text-[#FFD8B5] text-sm">
                    {item.name}
                  </span>{' '}
                  {/* Added text color and margin */}
                </a>
              ))
            ) : (
              <p className="col-span-full text-white text-center text-xl">
                No items match this category.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
