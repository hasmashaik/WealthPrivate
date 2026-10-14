// src/components/home/Globaladvantages.jsx
import { useEffect, useState } from "react";

// Import images from assets
import handHolding from "../../assets/images/Hand-holding.jpeg";
import safeDeposit from "../../assets/images/Safe-deposit.jpeg";
import globalNetwork from "../../assets/images/Global-Network.jpeg";
import citiWorld from "../../assets/images/Citi-World.jpeg";

const defaultItems = [
  {
    image: handHolding,
    alt: "Hand holding a phone and a bank card",
    title: "Citibank® Global Transfer",
    text: "Transfer funds instantly between your Citibank accounts locally or overseas through online banking, without paying transfer fees.",
    tall: true,
  },
  {
    image: safeDeposit,
    alt: "Safe deposit boxes with gold keys",
    title: "Citibank Global Wallet",
    text: "Shop online or spend overseas with zero foreign transaction or conversion fees, while locking in favourable FX rates across currencies.",
    
  },
  {
    image: globalNetwork,
    alt: "Aeroplane landing at dusk",
    title: "Global Network",
    text: "Access your banking through Citibank branches, Citigold Centres, ATMs and digital channels, while using your Citibank Debit Mastercard® for fee-free withdrawals at Citibank ATMs worldwide.",
    tall: true,
  },
  {
    image: citiWorld,
    alt: "Couple watching the sunset beside a pool",
    title: "Citi World Privileges",
    text: "Access dining, hotel, retail, travel and lifestyle deals that add more value when you live, travel or spend around the world.",
    
  },
];

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

function chunk(arr, size) {
  const pages = [];
  for (let i = 0; i < arr.length; i += size) pages.push(arr.slice(i, i + size));
  return pages;
}

export default function GlobalAdvantages({
  eyebrow = "Global Advantages",
  title = "Stay connected as your wealth needs cross borders",
  subtitle = "Use your Citigold Private Client relationship to support money movement, overseas spending and global access with more ease.",
  items = defaultItems,
  perPage = 3,
  autoPlay = true,
  interval = 2000, // 2 seconds
}) {
  const pages = chunk(items, perPage);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-slide LOOP: goes forward continuously, loops back to start after last slide
  useEffect(() => {
    if (!autoPlay || paused || pages.length < 2) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      setPage((p) => (p + 1) % pages.length);
    }, interval);

    return () => clearInterval(id);
  }, [autoPlay, paused, pages.length, interval]);

  return (
    <section className="w-full bg-[#2f3438] px-6 py-12 text-white sm:py-14">
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em]">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-normal uppercase leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[660px] text-base leading-relaxed sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Slider */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="mt-10 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, p) => (
                <div
                  key={p}
                  className="grid w-full shrink-0 gap-12 md:gap-0"
                  style={{
                    gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))`,
                  }}
                  aria-hidden={p !== page}
                >
                  {group.map((item, i) => {
                    const isFirst = i === 0;
                    const hasDivider = i < perPage - 1;
                    return (
                      <article
                        key={item.title}
                        className={`${isFirst ? "md:pl-0" : "md:pl-[38px]"} ${
                          hasDivider
                            ? "md:border-r md:border-white/60 md:pr-[38px]"
                            : "md:pr-0"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.alt || ""}
                          className={`w-full object-cover ${
                            item.tall ? "aspect-[350/440]" : "aspect-[350/260]"
                          }`}
                        />
                        <h3 className="mt-6 text-2xl font-semibold uppercase leading-tight tracking-wide">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed">
                          {item.text}
                        </p>
                        {item.href && (
                          <a
                            href={item.href}
                            tabIndex={p === page ? 0 : -1}
                            className="mt-5 inline-flex items-center gap-3 text-[15px] font-semibold uppercase tracking-wider text-[#b09a55] transition-colors hover:text-white"
                          >
                            Know more
                            <ArrowRight />
                          </a>
                        )}
                      </article>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          {pages.length > 1 && (
            <div className="mt-8 flex justify-center gap-5">
              {pages.map((_, p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  aria-label={`Go to slide ${p + 1}`}
                  aria-current={p === page}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    p === page ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}