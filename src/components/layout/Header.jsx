// src/components/layout/Header.jsx
import { useState, useEffect } from "react";

import logo from "../../assets/images/logo.jpeg"; 

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY <= 10) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-[80px] w-full items-center justify-between px-4 sm:px-6 lg:px-10">
        
       
        <a href="/" className="flex items-center gap-2" aria-label="Wealth home">
          <img
            src={logo}                   
            alt="Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
          
        </a>

        {/* RIGHT END: Citigold Text */}
        <span className="text-[15px] md:text-[17px] font-light tracking-wide text-gray-800">
          Citigold<sup className="text-[10px]">®</sup> Private Client
        </span>
        
      </div>
    </header>
  );
}