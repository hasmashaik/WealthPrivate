import { LuGift, LuChartPie, LuUsers, LuGlobe } from "react-icons/lu";

export const VALUE_CARDS = [
  {
    title: ["WELCOME", "OFFERS"],
    text: "Start your Citigold Private Client relationship with value built into your first steps.",
    Icon: LuGift,
    href: "#",
  },
  {
    title: ["INVESTMENT", "OFFERS"],
    text: "Start selected market activity with lower initial costs across FX and stock services.",
    Icon: LuChartPie,
    href: "#",
  },
  {
    title: ["REFERRAL", "REWARDS"],
    text: "Share Citigold Private Client with family and friends, and earn when they qualify.",
    Icon: LuUsers,
    href: "#",
  },
  {
    title: ["GLOBAL", "ADVANTAGES"],
    text: "Stay connected to your money, access and lifestyle value beyond Hong Kong.",
    Icon: LuGlobe,
    href: "#",
  },
];

export const CALC_STEPS = [
  "Bring in new funds",
  "Investment & Insurance Balance",
  "Additional Rewards",
];

export const FUNDS = {
  min: 1_500_000,
  max: 6_000_000,
  step: 100_000,
  initial: 4_500_000,
};
export const INVESTMENT = { min: 0, max: 3_000_000, step: 100_000, initial: 0 };

export const EXTRA_OFFERS = [
  { key: "engagement", label: "Engagement Offer", value: 6_500 },
  { key: "mortgage", label: "Mortgage Offer", value: 40_000 },
  {
    key: "professional",
    label: "Professional Investor Sign-up offer",
    value: 20_000,
  },
];
