//D:\xerago-task\xerago-task\src\components\home\Investmentoffers.jsx

import foreignExchange from "../../assets/images/foreign-exchange.jpeg";
import stockServices from "../../assets/images/stock-services.jpeg";

const defaultOffers = [
  {
    image: foreignExchange,           
    alt: "Foreign exchange rates on a trading screen",
    title: "Foreign Exchange",
    text: "Enjoy 0% spread on successful FX transactions via the Citi Mobile® App or Citibank Online within the first 6 calendar months from account opening.",
    
  },
  {
    image: stockServices,             
    alt: "Presenter explaining charts on a display",
    title: "Stock Services",
    text: "Enjoy a 3-month brokerage buy fee waiver on Hong Kong and US stock transactions after opening a new securities account.",
   
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

export default function InvestmentOffers({
  eyebrow = "Investment Offers",
  title = "Put more value into your first investment actions",
  subtitle = "Access Citigold Private Client offers that can help reduce early costs across FX and stock activity.",
  offers = defaultOffers,
  ctaLabel = "Join Citigold Private Client",
  ctaHref = "#",
}) {
  return (
    <section className="w-full bg-[#d6d6d6] px-6 py-12 text-black sm:py-14">
      <div className="mx-auto max-w-[1200px]">
        
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em]">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-normal uppercase leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        
        <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-0">
          {offers.map((offer, i) => (
            <article
              key={offer.title}
              className={`md:px-[38px] ${
                i === 0 ? "md:border-r md:border-gray-500 md:pl-0" : "md:pr-0"
              }`}
            >
              <img
                src={offer.image}
                alt={offer.alt || ""}
                className="aspect-[562/440] w-full object-cover"
              />
              <h3 className="mt-6 text-2xl font-semibold uppercase tracking-wide">
                {offer.title}
              </h3>
              <p className="mt-3 max-w-[540px] text-[15px] leading-relaxed">
                {offer.text}
              </p>
              <a
                href={offer.href}
                className="mt-5 inline-flex items-center gap-3 text-[15px] font-semibold uppercase tracking-wider text-[#a38f4f] transition-colors hover:text-black"
              >
                Know more
                <ArrowRight />
              </a>
            </article>
          ))}
        </div>

       
        <div className="mt-12 text-center">
          <a
            href={ctaHref}
            className="inline-block bg-black px-10 py-5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-gray-800"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}