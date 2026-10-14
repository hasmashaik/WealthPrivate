// src/pages/Home.jsx
import HeroBanner from "../components/home/HeroBanner";
import ValueSection from "../components/home/ValueSection";
import RebateCalculator from "../components/home/RebateCalculator";
import NewFundsRewards from "../components/home/Newfundsrewards";
import InvestmentOffers from "../components/home/Investmentoffers";
import ReferralRewards from "../components/home/Referralrewards ";
import FaqSection from "../components/home/Faqsection";
import SupportSection from "../components/home/Supportsection ";
import GlobalAdvantages from "../components/home/Globaladvantages";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ValueSection />
      <RebateCalculator />
      <NewFundsRewards />
      <InvestmentOffers />
      <ReferralRewards />
      <GlobalAdvantages />
      <SupportSection />
      <FaqSection />
    </>
  );
}