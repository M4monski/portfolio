'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FaCircleArrowDown } from 'react-icons/fa6';

export default function HomePage() {
  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      console.warn(`Element with Id ${sectionId} is non existent`);
    }
  };

  return (
    <div className="bg-[#4B2A12] w-full h-full">
      <main
        id="homePage"
        className="bg-[url('/images/HERO-BG.svg')] w-full h-screen bg-cover bg-no-repeat bg-center"
      >
        <div className="flex flex-col items-center justify-center w-full h-full relative">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center font-extrabold text-[5.125rem] drop-shadow-black drop-shadow-md">
              <h1>Hi, I am&nbsp;</h1>
              <h1 className="text-[#FFB120]">Keith Harvey P. Angel</h1>
            </div>
            <div>
              <h2 className="flex font-light text-[2rem] max-w-7/10 items-center justify-center text-center mx-auto">
                Frontend Developer aspiring to full-stack. I craft clean,
                impactful code with React, Next.js, JS/TS & C#/.NET. Love new
                challenges & ready to collaborate!
              </h2>
            </div>
            <div className="flex items-center gap-12 text-[50px]">
              <a
                className="hover:scale-150 transition-all duration-500 hover:rotate-360 hover:rounded-full"
                target="_blank"
                href="https://www.linkedin.com/in/keith-harvey-angel-836a07365/"
              >
                <FaLinkedin />
              </a>
              <a
                className="hover:scale-150 transition-transform duration-500 hover:rotate-360"
                target="_blank"
                href="https://github.com/M4monski"
              >
                <FaGithub />
              </a>
              <a
                className="hover:scale-150 transition-transform duration-500 hover:rotate-360"
                target="_blank"
                href="mailto:angel.keithharvey@gmail.com"
              >
                <MdOutlineMail />
              </a>
              <a
                href="/resume/resume.pdf"
                download="resume.pdf"
                className="group flex items-center gap-1 border-white border-2 rounded-3xl py-1 px-4 transition-all hover:scale-110 hover:bg-white hover:text-[#FFB120] duration-500 hover:drop-shadow-2xl"
              >
                <IoDocumentTextOutline className="group-hover:rotate-12 transition-all duration-500" />{' '}
                <span className="text-[18px]">Resume</span>
              </a>
            </div>
          </div>
          <button
            onClick={() => handleScrollTo('bioPage')}
            className="text-[40px] absolute bottom-15 hover:scale-130 duration-300 cursor-pointer transition-all animate-bounce hover:text-[#FFB120]"
          >
            <FaCircleArrowDown />
          </button>
        </div>
      </main>
    </div>
  );
}
