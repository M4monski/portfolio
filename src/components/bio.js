import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';

export default function BioPage() {
  return (
    <div className="containerBackground relative">
      <div className="flex items-center justify-center absolute w-full text-[#FFB120] text-[2.5rem] font-extrabold top-5 z-10">
        <h1>ABOUT ME</h1>
      </div>
      <div className="absolute flex items-center justify-center w-full text-[#443323] opacity-50 font-extrabold text-[8rem] -top-4">
        <h1>ABOUT ME</h1>
      </div>
      <div className="w-full flex items-center justify-center absolute">
        <div className="absolute w-35 h-1 bg-[#FFB120] top-20"></div>
        <div className="absolute w-65 h-0.25 bg-[#FFB120] top-20.25"></div>
      </div>

      <main
        id="bioPage"
        className="flex md:flex-row flex-col w-full md:max-w-4/5 mx-auto py-4 h-screen items-center justify-center text-white"
      >
        {/* LEFT AREA */}
        <div className="w-3/5 md:order-1 order-2 rounded-4xl">
          <h1 className="font-bold text-[4rem] text-[#ECB176] drop-shadow-sm drop-shadow-black">
            Keith Harvey P. Angel
          </h1>
          <div className="flex gap-4 items-center">
            <h2 className="text-[2.5rem] text-[#FFD8B5]">
              Frontend Developer{' '}
            </h2>
            <div className="flex items-center gap-4 text-[30px] text-[#FFD8B5]">
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
                href="/resume/resume.pdf"
                download="resume.pdf"
                className="group flex items-center gap-1 border-white border-2 rounded-3xl px-2 py-1 transition-all hover:scale-110 hover:bg-[#ECB176] hover:text-white duration-500 hover:drop-shadow-2xl"
              >
                <IoDocumentTextOutline className="group-hover:rotate-12 transition-all duration-500" />{' '}
                <span className="text-[18px]">Resume</span>
              </a>
            </div>
          </div>

          <p className="text-[1.25rem] mt-2">
            Frontend Developer eager to expand into full-stack roles, with
            foundational experience in C# and .NET. I love transforming designs
            into reality and continuously learning to overcome new hurdles.
            Proficient in React.js, Next.js, JavaScript/TypeScript, HTML,
            CSS/Tailwind, Node.js, and Firebase, I&apos;m committed to
            developing clean, impactful code. Excited to collaborate and build
            innovative solutions!
          </p>
        </div>

        {/* RIGHT AREA */}
        <div className="w-2/5 md:order-2 order-1">
          <div className="flex items-center justify-center">
            <Image
              className="border-blue-50 drop-shadow-2xl"
              src="/images/formalPicture.svg"
              width={700}
              height={700}
              alt="Character Picture"
            ></Image>
          </div>
        </div>
      </main>
    </div>
  );
}
