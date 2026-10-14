// src/components/layout/Footer.jsx
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


import footerLogo from "../../assets/images/logo.jpeg"; 

const COLUMNS = [
  {
    title: "TERMS AND CONDITIONS",
    links: ["Privacy", "Disclaimers", "Notices"],
  },
  { title: "SECURITY", links: ["Security Tips", "Credit Card and Fraud"] },
  {
    title: "BANKING INFORMATION",
    links: ["Fees & Rates", "Application Forms"],
  },
  {
    title: "ABOUT CITI",
    links: [
      "About Citi in Singapore",
      "Supporting the Community",
      "Newsroom",
      "Careers",
      "Awards",
      "Financial Education",
      "Philanthropy",
    ],
  },
  {
    title: "CONTACT US",
    links: [
      "Contact Information",
      "Wealth Centre & ATM Locator",
      "Find My Citi",
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", Icon: FaInstagram, href: "#" },
  { label: "YouTube", Icon: FaYoutube, href: "#" },
  { label: "Facebook", Icon: FaFacebookF, href: "#" },
  { label: "X", Icon: FaXTwitter, href: "#" },
];

export default function Footer({ logoSrc = footerLogo }) {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-10 lg:px-0">
        <img src={logoSrc} alt="Logo" className="h-7 w-auto" />

        {/* Link columns */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <h3 className="text-[14px] font-medium tracking-wide">{title}</h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12px] tracking-wide text-gray-200 transition-colors hover:text-white hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="mt-10 border-gray-800" />

        {/* App download + Social */}
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h4 className="text-[13px] font-semibold tracking-wide">
              DOWNLOAD THE CITI MOBILE® APP
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="flex h-10 items-center gap-2 rounded-md border border-gray-400 px-3 transition-colors hover:bg-gray-900"
              >
                <FaGooglePlay size={20} className="text-green-400" />
                <span className="leading-none">
                  <span className="block text-[8px] uppercase">Get it on</span>
                  <span className="block text-[15px] font-medium">
                    Google Play
                  </span>
                </span>
              </a>
              <a
                href="#"
                className="flex h-10 items-center gap-2 rounded-md border border-gray-400 px-3 transition-colors hover:bg-gray-900"
              >
                <FaApple size={22} />
                <span className="leading-none">
                  <span className="block text-[8px]">Download on the</span>
                  <span className="block text-[15px] font-medium">
                    App Store
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold tracking-wide">
              FOLLOW US ON
            </h4>
            <div className="mt-4 flex items-center gap-5">
              {SOCIALS.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-opacity hover:opacity-70"
                >
                  <Icon size={26} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-800" />

        {/* Terms note */}
        <div className="py-8">
          <a href="#" className="text-[12px] tracking-wide">
            TERMS &amp; CONDITIONS
          </a>
          <p className="mt-3 text-[11px] tracking-tight text-gray-200">
            All offers are subject to terms and conditions. For details, please
            reach out to branch staff. FX trading and investment involve risks,
            rates may go up or down.
          </p>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-gray-700 px-6 py-6 text-center text-[12px] leading-5 text-gray-100">
        <p>
          Citigroup.com is the global source of information about and access to
          financial services provided by the Citigroup family of companies.
        </p>
        <p>
          Copyright © {new Date().getFullYear()} Citigroup Inc. All rights
          reserved.
        </p>
        <p>
          Citi, Citibank, Citi and Arc Design used herein are service marks of
          Citigroup Inc., Citibank (Hong Kong) Limited, Citibank, N.A. Organized
          under the laws of U.S.A. with limited liability.
        </p>
      </div>
    </footer>
  );
}