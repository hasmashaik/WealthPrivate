// src/components/layout/NavBar.jsx
import { SiClaude, SiPerplexity, SiGooglegemini } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FiSlash } from "react-icons/fi";

const NAV_LINKS = [
  "Wealth", "Banking", "Invest", "Insurance", 
  "Credit Cards", "Loans", "Mortgage", "Services & Help",
];

const AI_TOOLS = [
  { label: "ChatGPT", Icon: RiOpenaiFill, color: "text-emerald-600" },
  { label: "Claude", Icon: SiClaude, color: "text-orange-500" },
  { label: "Perplexity", Icon: SiPerplexity, color: "text-teal-500" },
  { label: "Gemini", Icon: SiGooglegemini, color: "text-blue-500" },
  { label: "Grok", Icon: FiSlash, color: "text-gray-800" },
];

export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b border-black">
      <div className="flex h-[56px] w-full items-center justify-between px-4 sm:px-6 lg:px-10">
        <ul className="hidden items-center gap-x-6 lg:flex xl:gap-x-[40px]">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href="#" className="text-[15px] font-medium tracking-wide text-black transition-colors hover:text-blue-700">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <div className="hidden items-center rounded-sm bg-gray-100 px-3 py-2 md:flex">
            <span className="pr-3 text-[13px] font-medium">Ask AI</span>
            <span className="h-5 w-px bg-gray-300" />
            <div className="flex items-center gap-3 pl-3">
              {AI_TOOLS.map(({ label, Icon, color }) => (
                <button key={label} type="button" aria-label={`Ask ${label}`} title={label} className={`${color} transition-transform hover:scale-110`}>
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          <button type="button" className="border border-black bg-white px-6 md:px-10 py-2 text-[14px] font-semibold tracking-wider transition-colors hover:bg-black hover:text-white whitespace-nowrap">
            LOG ON
          </button>
        </div>
      </div>
    </nav>
  );
}