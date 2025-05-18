import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

export default function Footer() {
  return (
    <div className="bg-[#483423] w-full min-h-2/5 h-3/5 flex items-center justify-center p-8">
      <main>
        <div className="flex items-center justify-center pb-6 gap-12 text-[50px]">
          <a
            className="hover:scale-120 transition-all duration-500 hover:rounded-full"
            target="_blank"
            href="https://www.linkedin.com/in/keith-harvey-angel-836a07365/"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:scale-120 transition-transform duration-500"
            target="_blank"
            href="https://github.com/M4monski"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-120 transition-transform duration-500"
            target="_blank"
            href="mailto:angel.keithharvey@gmail.com"
          >
            <MdOutlineMail />
          </a>
          <a
            className="hover:scale-120 transition-transform duration-500"
            target="_blank"
            href="https://www.facebook.com/Eclipsseee/"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1>
            {' '}
            © 2025 Keith Harvey P. Angel. All Rights Reserved. |{' '}
            <a
              href="/resume/resume.pdf"
              download="resume.pdf"
              className="hover:underline"
            >
              Download Resume
            </a>
          </h1>
          <h1> Built with Next.js and Tailwind, deployed in domainname</h1>
        </div>
      </main>
    </div>
  );
}
