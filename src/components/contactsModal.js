import { useState, useEffect } from 'react';
import { FaGithub, FaFacebook, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export default function ContactsModal({ isOpen, onClose }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let originalBodyOverflow;
    let originalPaddingRight;

    if (isOpen) {
      originalBodyOverflow = document.body.style.overflow;
      originalPaddingRight = document.body.style.paddingRight;

      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      setIsMounted(true);
    } else {
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }

    return () => {
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = originalBodyOverflow || 'unset';
      }
      if (
        document.body.style.paddingRight &&
        parseInt(document.body.style.paddingRight, 10) > 0
      ) {
        document.body.style.paddingRight = originalPaddingRight || '0px';
      }
    };
  }, [isOpen]);
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  if (!isMounted && !isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-[200] p-4
                  transition-opacity duration-300 ease-in-out
                  ${
                    isOpen && isMounted
                      ? 'opacity-100 backdrop-blur-sm bg-black/30'
                      : 'opacity-0 pointer-events-none'
                  }`}
      onClick={onClose}
    >
      <div
        className={`bg-[#6E4F33] p-6 sm:p-8 md:p-10 rounded-lg shadow-xl w-full max-w-3xl relative
                    transform transition-all duration-300 ease-in-out
                    ${
                      isOpen && isMounted
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95'
                    }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 sm:top-6 sm:right-8 text-[#FFD8B5] cursor-pointer hover:text-white hover:scale-125 transition-all duration-200 text-3xl z-10"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="relative mb-6 pb-3 border-b border-[#FFD8B5]/50">
          <h2 className="text-2xl sm:text-3xl text-[#FFD8B5] font-bold text-center">
            Contact Information
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1">
            <div className="space-y-3">
              <a
                href="tel:+639275767079"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 hover:scale-[1.02] hover:bg-[#86674d] rounded-md transition-all duration-200 group"
              >
                <div className="text-[#FFD8B5] text-2xl group-hover:text-white transition-colors duration-200">
                  <FaPhoneAlt />
                </div>
                <div className="flex flex-col ml-4 text-[#FFD8B5] gap-0.5">
                  <span className="text-xs opacity-60 group-hover:opacity-80 transition-opacity duration-200">
                    Phone
                  </span>
                  <span className="group-hover:text-white transition-colors duration-200">
                    +63 927 576 7079
                  </span>
                </div>
              </a>

              <a
                href="mailto:angel.keithharvey@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 hover:scale-[1.02] hover:bg-[#86674d] rounded-md transition-all duration-200 group"
              >
                <div className="text-[#FFD8B5] text-3xl group-hover:text-white transition-colors duration-200">
                  <IoIosMail />
                </div>
                <div className="flex flex-col ml-4 text-[#FFD8B5] gap-0.5">
                  <span className="text-xs opacity-60 group-hover:opacity-80 transition-opacity duration-200">
                    Personal Email
                  </span>
                  <span className="group-hover:text-white transition-colors duration-200">
                    angel.keithharvey@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="mailto:keithharvey.angel@cit.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 hover:scale-[1.02] hover:bg-[#86674d] rounded-md transition-all duration-200 group"
              >
                <div className="text-[#FFD8B5] text-3xl group-hover:text-white transition-colors duration-200">
                  <IoIosMail />
                </div>
                <div className="flex flex-col ml-4 text-[#FFD8B5] gap-0.5">
                  <span className="text-xs opacity-60 group-hover:opacity-80 transition-opacity duration-200">
                    School Email
                  </span>
                  <span className="group-hover:text-white transition-colors duration-200">
                    keithharvey.angel@cit.edu
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/M4monski"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 hover:scale-[1.02] hover:bg-[#86674d] rounded-md transition-all duration-200 group"
              >
                <div className="text-[#FFD8B5] text-2xl group-hover:text-white transition-colors duration-200">
                  <FaGithub />
                </div>
                <div className="flex flex-col ml-4 text-[#FFD8B5] gap-0.5">
                  <span className="text-xs opacity-60 group-hover:opacity-80 transition-opacity duration-200">
                    Github
                  </span>
                  <span className="group-hover:text-white transition-colors duration-200">
                    M4monski
                  </span>
                </div>
              </a>

              <a
                href="https://www.facebook.com/Eclipsseee/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 hover:scale-[1.02] hover:bg-[#86674d] rounded-md transition-all duration-200 group"
              >
                <div className="text-[#FFD8B5] text-2xl group-hover:text-white transition-colors duration-200">
                  <FaFacebook />
                </div>
                <div className="flex flex-col ml-4 text-[#FFD8B5] gap-0.5">
                  <span className="text-xs opacity-60 group-hover:opacity-80 transition-opacity duration-200">
                    Facebook
                  </span>
                  <span className="group-hover:text-white transition-colors duration-200">
                    Keith Harvey Porcil Angel
                  </span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/eclipse._.k/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 hover:scale-[1.02] hover:bg-[#86674d] rounded-md transition-all duration-200 group"
              >
                <div className="text-[#FFD8B5] text-2xl group-hover:text-white transition-colors duration-200">
                  <FaInstagram />
                </div>
                <div className="flex flex-col ml-4 text-[#FFD8B5] gap-0.5">
                  <span className="text-xs opacity-60 group-hover:opacity-80 transition-opacity duration-200">
                    Instagram
                  </span>
                  <span className="group-hover:text-white transition-colors duration-200">
                    eclipse._.k
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
