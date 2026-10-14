import { useMemo, useState } from "react";
import {
  LuHandCoins,
  LuShieldCheck,
  LuGift,
  LuHouse,
  LuTrendingUp,
} from "react-icons/lu";
import {
  CALC_STEPS,
  FUNDS,
  INVESTMENT,
  EXTRA_OFFERS,
} from "../../data/homeData";

const hk = (n) => `HK$${n.toLocaleString("en-US")}`;

// Illustrative rules only - replace with your real ones
const fundsRebate = (amount) =>
  amount >= FUNDS.min ? Math.floor(amount / 1_500_000) * 10_000 : 0;
const investmentRebate = (amount) => Math.floor(amount / 500_000) * 2_000;

/* ---------- Heading ---------- */
function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-black">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-3xl font-normal uppercase leading-tight tracking-tight text-black sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-[900px] text-base leading-relaxed text-black sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}

/* ---------- Stepper ---------- */
function Stepper({ step }) {
  return (
    <div className="mx-auto flex max-w-[1000px] items-start justify-between px-2">
      {CALC_STEPS.map((label, i) => {
        const n = i + 1;
        const active = n === step;
        const done = n < step;
        return (
          <div
            key={label}
            className="relative flex flex-1 flex-col items-center"
          >
            {i < CALC_STEPS.length - 1 && (
              <span
                className={`absolute left-1/2 top-5 h-[3px] w-full ${
                  done ? "bg-slate-800" : "bg-gray-300"
                }`}
              />
            )}
            <span
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold ${
                active || done
                  ? "border-slate-800 bg-slate-800 text-white"
                  : "border-gray-400 bg-white text-black"
              }`}
            >
              {n}
            </span>
            <span className="mt-2 text-center text-sm font-medium text-black">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Slider ---------- */
function RangeSlider({ value, onChange, min, max, step }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="citi-range w-full"
        style={{
          background: `linear-gradient(to right, #2d3338 ${pct}%, #d6d6d6 ${pct}%)`,
        }}
        aria-label="Amount"
      />
      <div className="mt-4 flex justify-between text-[14px] font-medium text-gray-800">
        <span>{hk(min)}</span>
        <span>{hk(max)}</span>
      </div>
    </div>
  );
}

/* ---------- Main ---------- */
export default function RebateCalculator({
  image = "/images/hk-skyline.jpg",
  eyebrow = "Welcome Offers",
  title = "Turn your Citigold Private Client start into rewards",
  subtitle = "Begin your Citigold Private Client relationship with welcome rewards of up to HK$260,000 Cash Rebate.",
}) {
  const [step, setStep] = useState(1);
  const [funds, setFunds] = useState(FUNDS.initial);
  const [investment, setInvestment] = useState(INVESTMENT.initial);
  const [extras, setExtras] = useState({});

  const rows = useMemo(() => {
    const extraValue = (key) =>
      extras[key] ? EXTRA_OFFERS.find((o) => o.key === key).value : 0;
    return [
      {
        label: "Bring in New Funds",
        Icon: LuHandCoins,
        value: fundsRebate(funds),
      },
      {
        label: "Investment & Insurance Balance",
        Icon: LuShieldCheck,
        value: step >= 2 ? investmentRebate(investment) : 0,
      },
      {
        label: "Engagement Offer",
        Icon: LuGift,
        value: step >= 3 ? extraValue("engagement") : 0,
      },
      {
        label: "Mortgage Offer",
        Icon: LuHouse,
        value: step >= 3 ? extraValue("mortgage") : 0,
      },
      {
        label: "Professional Investor Sign-up offer",
        Icon: LuTrendingUp,
        value: step >= 3 ? extraValue("professional") : 0,
      },
    ];
  }, [funds, investment, extras, step]);

  const total = rows.reduce((sum, r) => sum + r.value, 0);

  const nextLabel =
    step === 1
      ? "NEXT: INVESTMENT & INSURANCE"
      : step === 2
        ? "NEXT: ADDITIONAL REWARDS"
        : "START OVER";

  const onNext = () => (step === 3 ? setStep(1) : setStep(step + 1));

  return (
    <section id="rebate" className="bg-slate-200 py-10">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="mt-10">
          <Stepper step={step} />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_490px]">
          {/* Left panel */}
          <div className="bg-white">
            <div className="relative flex min-h-[130px] items-center overflow-hidden border-b border-gray-100 px-6">
              <div className="relative z-10">
                <h3 className="text-[24px] font-semibold uppercase tracking-wide">
                  {step === 1 && "Bring new funds"}
                  {step === 2 && "Investment & insurance"}
                  {step === 3 && "Additional rewards"}
                </h3>
                <p className="mt-2 text-[15px]">
                  {step === 1 &&
                    "Bring in your new funds to your Citigold account"}
                  {step === 2 &&
                    "Tell us your investment and insurance balance"}
                  {step === 3 && "Select any extra offers you qualify for"}
                </p>
              </div>
              <img
                src={image}
                alt=""
                className="absolute right-0 top-0 hidden h-full w-[210px] object-cover sm:block"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 45%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 45%)",
                }}
              />
            </div>

            <div className="px-6 pb-10 pt-12">
              {step === 1 && (
                <>
                  <p className="text-[15px]">
                    Select the amount of new funds you will bring in
                  </p>
                  <p className="mb-6 mt-4 text-[32px] font-semibold">
                    {hk(funds)}
                  </p>
                  <RangeSlider value={funds} onChange={setFunds} {...FUNDS} />
                  <p className="mt-10 flex items-center gap-3 text-[15px]">
                    <LuShieldCheck size={22} className="shrink-0" />
                    Bring in {hk(FUNDS.min)} or above to be eligible for welcome
                    rewards
                  </p>
                </>
              )}

              {step === 2 && (
                <>
                  <p className="text-[15px]">
                    Select your investment &amp; insurance balance
                  </p>
                  <p className="mb-6 mt-4 text-[32px] font-semibold">
                    {hk(investment)}
                  </p>
                  <RangeSlider
                    value={investment}
                    onChange={setInvestment}
                    {...INVESTMENT}
                  />
                </>
              )}

              {step === 3 && (
                <ul className="space-y-4">
                  {EXTRA_OFFERS.map(({ key, label, value }) => (
                    <li key={key}>
                      <label className="flex cursor-pointer items-center justify-between border border-gray-200 px-4 py-4">
                        <span className="flex items-center gap-3 text-[15px]">
                          <input
                            type="checkbox"
                            checked={!!extras[key]}
                            onChange={(e) =>
                              setExtras({ ...extras, [key]: e.target.checked })
                            }
                            className="h-4 w-4 accent-black"
                          />
                          {label}
                        </span>
                        <span className="font-semibold">{hk(value)}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-10 flex justify-end gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="border border-black px-8 py-4 text-[15px] font-semibold tracking-wide hover:bg-gray-100"
                  >
                    BACK
                  </button>
                )}
                <button
                  type="button"
                  onClick={onNext}
                  className="bg-black px-8 py-4 text-[15px] font-semibold tracking-wide text-white transition-colors hover:bg-gray-800"
                >
                  {nextLabel}
                </button>
              </div>
            </div>
          </div>

          {/* Right panel: summary */}
          <aside className="bg-white">
            <div className="bg-[#2d3338] px-6 py-6 text-white">
              <h3 className="text-[24px] font-medium uppercase tracking-wide">
                Total cash rebate earned
              </h3>
              <p className="mt-6 text-[56px] font-semibold leading-none">
                {total.toLocaleString("en-US")}
              </p>
            </div>

            <ul className="space-y-3 p-3">
              {rows.map(({ label, Icon, value }) => (
                <li
                  key={label}
                  className="flex items-center justify-between gap-4 bg-gray-50 px-4 py-4"
                >
                  <span className="flex items-center gap-4 text-[15px]">
                    <Icon size={22} className="shrink-0" />
                    {label}
                  </span>
                  <span className="whitespace-nowrap font-semibold">
                    {hk(value)}
                  </span>
                </li>
              ))}
            </ul>

            <p className="flex items-start gap-3 px-6 pb-6 pt-2 text-[13px] leading-5">
              <LuShieldCheck size={22} className="mt-0.5 shrink-0" />
              The estimate shown is for illustrative purposes only and may
              differ from the actual Cash Rebate earned.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
