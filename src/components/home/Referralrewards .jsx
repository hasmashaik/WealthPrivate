//D:\xerago-task\xerago-task\src\components\home\Referralrewards .jsx

import citigoldPrivate from "../../assets/images/citigold-private.jpeg";
import citigold from "../../assets/images/citygold.jpeg";

const defaultCards = [
  {
    image: citigoldPrivate,           
    alt: "Professional reviewing documents at a desk",
    title: "Citigold Private Client",
    balance: "HK$8,000,000 or above",
    rebate: "HK$12,800",
  },
  {
    image: citigold,                  
    alt: "Colleagues meeting around a conference table",
    title: "Citigold",
    balance: "HK$1,500,000 or above",
    rebate: "HK$2,088",
  },
];

const defaultNotes = [
  "The Referrer must be an existing Citigold Private Client, Citigold or ULTIMA customer with a correspondence address in Hong Kong, Mainland China or Taiwan.",
  "Eligible referees refers to the new customers who have successfully open a Citigold Private Client / Citigold account within the Promotion Period and fulfil new fund offer requirement.",
];

function WalletIcon() {
  return (
    <svg
      className="mt-0.5 h-6 w-6 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <rect x="3" y="6" width="18" height="13" rx="1.5" />
      <path d="M3 9V6.5A1.5 1.5 0 0 1 4.5 5H17" />
      <rect x="15" y="11" width="6" height="4" rx="0.5" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg
      className="mt-0.5 h-6 w-6 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <rect x="3" y="9" width="18" height="4" />
      <path d="M4.5 13v7h15v-7M12 9v11" />
      <path d="M12 9C10 9 7.5 8.5 7.5 6.5S10 4 12 9zM12 9c2 0 4.5-.5 4.5-2.5S14 4 12 9z" />
    </svg>
  );
}

function Detail({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <p className="text-[15px]">{label}</p>
        <p className="mt-1.5 text-[15px] font-semibold text-gray-800">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function ReferralRewards({
  eyebrow = "Referral Rewards",
  title = "Get rewarded for successful wealth referrals",
  subtitle = "Extend the special status that comes with being a Citigold Private Client to your friends and family. Our referral rewards bring cash rebates to you, as well as your friends and family.",
  cards = defaultCards,
  notes = defaultNotes,
  ctaLabel = "Join Citigold Private Client",
  ctaHref = "#",
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
          <p className="mx-auto mt-4 max-w-[860px] text-base leading-relaxed sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Cards with centre divider */}
        <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-0">
          {cards.map((card, i) => (
            <article
              key={card.title}
              className={`md:px-[38px] ${
                i === 0 ? "md:border-r md:border-gray-500 md:pl-0" : "md:pr-0"
              }`}
            >
              <img
                src={card.image}
                alt={card.alt || ""}
                className="aspect-[562/258] w-full object-cover"
              />
              <div className="px-0 md:px-6">
                <h3 className="mt-6 text-2xl font-semibold uppercase tracking-wide">
                  {card.title}
                </h3>
                <div className="mt-6 flex flex-col gap-6">
                  <Detail
                    icon={<WalletIcon />}
                    label="Referee’s Banking Account Designated Balance"
                    value={card.balance}
                  />
                  <Detail
                    icon={<GiftIcon />}
                    label="Cash Rebate to Referrer for Each Successful Referral"
                    value={card.rebate}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        
        <div className="mt-10 space-y-3 text-[15px] leading-relaxed text-gray-500">
          <p>Please note:</p>
          {notes.map((note) => (
            <p key={note}>• {note}</p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
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