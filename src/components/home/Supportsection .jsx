// src/components/home/Supportsection .jsx

// Import images from assets
import wheelockHouse from "../../assets/images/Wheelock-House.jpeg";
import salisburyRoad from "../../assets/images/SalisburyRoad.jpeg";

const defaultBranches = [
  {
    name: "Wheelock House Branch",
    lines: ["6/F, Wheelock House,", "20 Pedder Street"],
  },
  {
    name: "K11 ATELIER Branch",
    lines: [
      "Units 04 – 06, Level 10, K11 ATELIER,",
      "18 Salisbury Road,",
      "Tsim Sha Tsui",
    ],
  },
];

const defaultProgramPoints = [
  "In partnership with prestigious brands, this 3-day program is a unique opportunity for young adults (aged 20 to 30) from Citigold Private Client families to plan for their future.",
  "Prepare your next generation with key insights into finance, cases on client centric design thinking, courses on leadership, negotiations, entrepreneurship, and more.",
  "This program also offers exciting network opportunities that will open their doors to the future.",
];

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 8.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export default function SupportSection({
  eyebrow = "Dedicated Service Line",
  title = "Speak to Citigold Private Client support",
  subtitle = "Connect with Citigold Private Client support whenever you need assistance. (852) 2860 8888",
  guidance = {
    image: wheelockHouse,             // <-- Imported variable
    alt: "Two wealth specialists reviewing documents",
    title: "Private Wealth Management Guidance",
    text: "Meet dedicated wealth specialists in spaces designed for more focused conversations around your personal and business wealth needs.",
    visitLabel: "Visit a Citigold Private Client Center:",
    branches: defaultBranches,
  },
  program = {
    image: salisburyRoad,             // <-- Imported variable
    alt: "Young professional looking up in a modern building",
    title: "Citigold Private Client Young Successor Program",
    points: defaultProgramPoints,
    ctaLabel: "Speak to us today",
    ctaHref: "#",
  },
}) {
  return (
    <section className="w-full bg-white px-6 py-12 text-black sm:py-14">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em]">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-normal uppercase leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-base leading-relaxed sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Row 1: image left, guidance right */}
        <div className="mt-12 grid items-center gap-8 md:grid-cols-2 md:gap-16 lg:gap-[64px]">
          <img
            src={guidance.image}
            alt={guidance.alt || ""}
            className="aspect-[589/415] w-full object-cover"
          />
          <div>
            <h3 className="max-w-[460px] text-2xl font-semibold uppercase leading-tight tracking-wide">
              {guidance.title}
            </h3>
            <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed">
              {guidance.text}
            </p>
            <p className="mt-4 text-[15px] font-semibold">
              {guidance.visitLabel}
            </p>
            {guidance.branches.map((branch) => (
              <address
                key={branch.name}
                className="mt-4 text-[15px] not-italic leading-relaxed"
              >
                {branch.name}
                {branch.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            ))}
          </div>
        </div>

        {/* Row 2: program left, image right */}
        <div className="mt-12 grid items-center gap-8 md:grid-cols-2 md:gap-16 lg:mt-16 lg:gap-[64px]">
          <div className="order-2 md:order-1">
            <h3 className="max-w-[440px] text-2xl font-semibold uppercase leading-tight tracking-wide">
              {program.title}
            </h3>
            <ul className="mt-4 space-y-3.5">
              {program.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-[15px] leading-relaxed"
                >
                  <CheckIcon />
                  <span className="max-w-[460px]">{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={program.ctaHref}
              className="mt-6 inline-flex items-center gap-3 text-[15px] font-semibold uppercase tracking-wider transition-opacity hover:opacity-70"
            >
              {program.ctaLabel}
              <ArrowRight />
            </a>
          </div>
          <img
            src={program.image}
            alt={program.alt || ""}
            className="order-1 aspect-[589/415] w-full object-cover md:order-2"
          />
        </div>
      </div>
    </section>
  );
}