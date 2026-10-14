const defaultFundTiers = [
  { range: "HK$40,000,000 or above", reward: "HK$160,000" },
  { range: "HK$30,000,000 - HK$39,999,999", reward: "HK$120,000" },
  { range: "HK$15,000,000 - HK$29,999,999", reward: "HK$60,000" },
  { range: "HK$8,000,000 - HK$14,999,999", reward: "HK$40,000" },
];

const defaultGrowthTiers = [
  { range: "HK$10,000,000 or above", reward: "HK$90,000" },
  { range: "HK$8,000,000 - HK$9,999,999", reward: "HK$65,000" },
  { range: "HK$5,000,000 - HK$7,999,999", reward: "HK$35,000" },
  { range: "HK$3,000,000 - HK$4,999,999", reward: "HK$18,000" },
  { range: "HK$1,000,000 - HK$2,999,999", reward: "HK$6,000" },
  { range: "HK$500,000 - HK$999,999", reward: "HK$3,000" },
];

function RewardTable({ leftHeading, rightHeading, rows }) {
  return (
    <table className="w-full border-collapse bg-white text-[13px] text-black sm:text-[15px]">
      <thead>
        <tr className="bg-[#d6d6d6]">
          <th className="px-3.5 py-3.5 text-left text-[15px] font-semibold sm:px-6 sm:text-lg">
            {leftHeading}
          </th>
          <th className="w-[110px] border-l border-gray-200 px-3.5 py-3.5 text-right text-[15px] font-semibold sm:w-[245px] sm:px-6 sm:text-lg">
            {rightHeading}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr
            key={row.range}
            className="border-t border-gray-200 even:bg-[#f7f7f7]"
          >
            <td className="h-11 px-3.5 sm:h-12 sm:px-6">{row.range}</td>
            <td className="h-11 border-l border-gray-200 px-3.5 text-right sm:h-12 sm:px-6">
              {row.reward}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function NewFundsRewards({
  image = "/images/rewards-bg.jpg",
  title = "How new funds and wealth growth can add up",
  text = "Here's how much you can earn by bringing in new funds or by growing your net insurance or investment balance:",
  fundTiers = defaultFundTiers,
  growthTiers = defaultGrowthTiers,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#2f3538] text-white">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-left"
      />
      <div className="absolute inset-0 bg-[#2f3538]/80" />

      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-4 py-10 sm:px-8 lg:grid-cols-[340px_1fr] lg:gap-32 lg:px-[114px] lg:py-11">
        {/* Left column */}
        <div>
          <svg
            className="mb-4 h-10 w-10"
            viewBox="0 0 42 42"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path d="M5 40V22M5 22l-3 3M5 22l3 3" />
            <path d="M13 40V26M13 26l-3 3M13 26l3 3" />
            <path d="M21 40V10M21 10l-4 4M21 10l4 4" />
            <path d="M29 40V18M29 18l-3 3M29 18l3 3" />
            <path d="M37 40V4M37 4l-3 3M37 4l3 3" />
            <path d="M1 41h40" />
          </svg>
          <h2 className="font-serif text-[34px] font-normal uppercase leading-none tracking-tight sm:text-[42px]">
            {title}
          </h2>
          <p className="mt-5 max-w-[290px] text-[17px] leading-normal sm:text-[17.5px]">
            {text}
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-[22px]">
          <RewardTable
            leftHeading="New Fund Amount"
            rightHeading="Cash Rebate"
            rows={fundTiers}
          />
          <RewardTable
            leftHeading="Net Investment and Insurance Balance Growth"
            rightHeading="Rewards"
            rows={growthTiers}
          />
        </div>
      </div>
    </section>
  );
}
