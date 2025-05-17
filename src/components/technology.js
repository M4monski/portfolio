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
    <div className="containerBackground">
      <main
        id="technologyPage"
        className="w-full h-full min-h-screen flex justify-center py-8" // Use min-h-screen if content can be short
      >
        <div className="flex flex-col items-center w-full h-full min-h-screen max-w-4/5 bg-white/25 rounded-4xl border-white border-2 my-auto">
          <div className="flex justify-center">
            <h1 className="text-white font-bold text-[36px] p-4">
              Technology Stack
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 text-[15px] justify-center p-4">
            {' '}
            {/* Adjusted gap and padding for responsiveness */}
            {filterCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`HoverButton !px-4 md:!px-8 ${
                  activeFilter === category.value
                    ? 'bg-white text-purple-900 scale-105' // Example active style
                    : 'text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="mt-8 mb-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-around w-full max-w-9/10 px-4 justify-items-center items-center">
            {' '}
            {/* Responsive grid and added gap */}
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer" // Good practice for security and SEO
                  className="technologyLabels flex flex-col items-center text-center p-2 transition-transform hover:scale-110" // Ensure this class applies desired styles
                >
                  <Image
                    src={item.logo}
                    width={75}
                    height={75}
                    alt={item.name}
                    className="object-contain" // Ensures image scales nicely
                  />
                  <span className="mt-2 text-white text-sm">{item.name}</span>{' '}
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
