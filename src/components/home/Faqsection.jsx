import { useState } from "react";

const defaultFaqs = [
  {
    question:
      "What welcome rewards can I receive with Citigold Private Client?",
    answer:
      "You can receive welcome rewards of up to HK$260,000 Cash Rebate when you begin a Citigold Private Client relationship and complete the relevant activities. The final reward depends on the actions you complete and the offer requirements that apply.",
  },
  {
    question: "What activities can contribute to my welcome cash rebate?",
    answer:
      "Your welcome cash rebate can come from bringing in new funds, growing your net investment and insurance balance, and completing additional offers such as the Engagement Offer, the Mortgage Offer and the Professional Investor Sign-up offer. Each activity adds to your total, so the more you complete, the higher your potential rebate.",
  },
  {
    question:
      "Do I need to complete every activity to receive a welcome cash rebate?",
    answer:
      "No. You can earn a cash rebate from the activities you complete, and each one is rewarded separately. The final reward depends on the actions you complete and the offer requirements that apply to each.",
  },
  {
    question: "How does bringing in new funds affect my reward?",
    answer:
      "The more new funds you bring in, the higher your cash rebate. For example, new funds of HK$8,000,000 to HK$14,999,999 earn a HK$40,000 rebate, HK$15,000,000 to HK$29,999,999 earns HK$60,000, HK$30,000,000 to HK$39,999,999 earns HK$120,000, and HK$40,000,000 or above earns HK$160,000.",
  },
  {
    question:
      "How does investment and insurance balance growth affect my reward?",
    answer:
      "Growing your net investment and insurance balance earns an additional reward, which rises with the amount of growth. Rewards start at HK$3,000 for growth of HK$500,000 to HK$999,999 and go up to HK$90,000 for growth of HK$10,000,000 or above.",
  },
  {
    question: "What does the Engagement Offer involve?",
    answer:
      "The Engagement Offer is an additional reward you can add on top of your new fund and balance growth rewards. You can select it in the calculator, and the activities required and the reward amount are set out in the offer terms and conditions.",
  },
  {
    question: "Why is the calculator result only an estimate?",
    answer:
      "The calculator shows an illustration based on the amounts and offers you select. The actual Cash Rebate you earn may differ, because it depends on the final amounts, the activities you complete and the offer requirements that apply.",
  },
  {
    question: "What investment offers can I access after account opening?",
    answer:
      "You can enjoy 0% spread on successful FX transactions via the Citi Mobile® App or Citibank Online within the first 6 calendar months from account opening. You can also enjoy a 3-month brokerage buy fee waiver on Hong Kong and US stock transactions after opening a new securities account.",
  },
  {
    question: "How do Referral Rewards work?",
    answer:
      "When a friend or family member successfully opens a Citigold Private Client or Citigold account and meets the new fund requirement, you receive a cash rebate as the referrer and they receive rewards too. The referrer must be an existing Citigold Private Client, Citigold or ULTIMA customer with a correspondence address in Hong Kong, Mainland China or Taiwan.",
  },
  {
    question: "How much can I earn from a successful referral?",
    answer:
      "You can earn a cash rebate of HK$12,800 for each successful Citigold Private Client referral, where the referee's banking account designated balance is HK$8,000,000 or above. For each successful Citigold referral, with a designated balance of HK$1,500,000 or above, you can earn HK$2,088.",
  },
  {
    question: "What global advantages can support me beyond Hong Kong?",
    answer:
      "Your relationship gives you access to Citibank Global Transfer for instant transfers between your Citibank accounts without transfer fees, Citibank Global Wallet for zero foreign transaction or conversion fees when spending overseas, the Global Network of branches, ATMs and digital channels, and Citi World Privileges for dining, hotel, retail, travel and lifestyle deals.",
  },
  {
    question: "Where can I visit a Citigold Private Client Center?",
    answer:
      "You can visit the Wheelock House Branch at 6/F, Wheelock House, 20 Pedder Street, or the K11 ATELIER Branch at Units 04 – 06, Level 10, K11 ATELIER, 18 Salisbury Road, Tsim Sha Tsui. You can also call Citigold Private Client support on (852) 2860 8888.",
  },
  {
    question: "Who is the Citigold Private Client Young Successor Program for?",
    answer:
      "It is for young adults aged 20 to 30 from Citigold Private Client families. The 3-day program, run in partnership with prestigious brands, covers finance, client-centric design thinking, leadership, negotiations and entrepreneurship, and offers networking opportunities.",
  },
];

function Chevron({ open }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 6l5 5 5-5" />
    </svg>
  );
}

export default function FaqSection({
  eyebrow = "FAQs",
  title = "How can you make the most of Citigold Private Client value?",
  subtitle = "Get clear answers that help you understand how rewards, eligibility and global benefits can work around your Citigold Private Client relationship.",
  faqs = defaultFaqs,
  defaultOpen = 0, // index of the item open on load; use null for all closed
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <section className="w-full bg-[#f2f2f2] px-6 py-12 text-black sm:py-14">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em]">
            {eyebrow}
          </p>
          <h2 className="mx-auto mt-3 max-w-[680px] font-serif text-3xl font-normal uppercase leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-base leading-relaxed sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12 sm:px-4 lg:px-0">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-[26px] text-left text-lg font-semibold tracking-wide sm:text-[20px]"
                  >
                    <span>{faq.question}</span>
                    <Chevron open={open} />
                  </button>
                </h3>

                {/* Smooth open/close */}
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[1020px] pb-6 pr-10 text-base leading-relaxed sm:text-[17px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
