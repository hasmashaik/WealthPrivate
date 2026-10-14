// // src/components/layout/Header.jsx
// export default function Header() {
//   return (
//     // Fixed at top. Only Logo + Citigold text.
//     <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
//       <div className="flex h-[80px] w-full items-center justify-between px-4 sm:px-6 lg:px-10">
        
//         {/* LEFT END: Logo + Wealth */}
//         <a href="/" className="flex items-center gap-2" aria-label="Wealth home">
//           <img 
//             src="/src/assets/images/logo.jpeg" 
//             alt="Logo" 
//             className="h-8 md:h-10 w-auto object-contain" 
//           />
//           <span className="text-[18px] font-normal tracking-wide text-black">
//             Wealth
//           </span>
//         </a>

//         {/* RIGHT END: Citigold Text */}
//         <span className="text-[15px] md:text-[17px] font-light tracking-wide text-gray-800">
//           Citigold<sup className="text-[10px]">®</sup> Private Client
//         </span>
        
//       </div>
//     </header>
//   );
// }

// src/components/layout/Header.jsx
import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Scrolling DOWN past 80px → Hide Header (Slide Up)
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      }
      // 2. Scrolling UP → Show Header (Slide Down)
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // 3. At the very top → Always Show
      else if (currentScrollY <= 10) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    // 'fixed top-0 z-50' = Always fixed at top, highest layer.
    // 'transition-transform duration-300' = Smooth slide animation.
    // 'translate-y-0' = Visible; '-translate-y-full' = Hidden (slid up out of view).
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-[80px] w-full items-center justify-between px-4 sm:px-6 lg:px-10">
        
        {/* LEFT END: Logo + Wealth */}
        <a href="/" className="flex items-center gap-2" aria-label="Wealth home">
          <img
            src="/src/assets/images/logo.jpeg"
            alt="Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
          <span className="text-[18px] font-normal tracking-wide text-black">
            Wealth
          </span>
        </a>

        {/* RIGHT END: Citigold Text */}
        <span className="text-[15px] md:text-[17px] font-light tracking-wide text-gray-800">
          Citigold<sup className="text-[10px]">®</sup> Private Client
        </span>
        
      </div>
    </header>
  );
}