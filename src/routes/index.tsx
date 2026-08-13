import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/tengabiz/Nav";
import { Hero } from "@/components/tengabiz/Hero";
import {
  Problem,
  HowItWorks,
  MoneySplit,
  BusinessLock,
  SmartSavings,
} from "@/components/tengabiz/SectionsA";
import {
  LoanReadiness,
  AIInsights,
  Payments,
  Transactions,
} from "@/components/tengabiz/SectionsB";
import {
  MicroBusiness,
  DashboardPreview,
  PeopleIPay,
  ValueProp,
  FutureVision,
  FinalCTA,
  Footer,
} from "@/components/tengabiz/SectionsC";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TENGABIZ — Smart Financial OS for African Micro-Businesses" },
      {
        name: "description",
        content:
          "TENGABIZ helps African micro-businesses separate business and personal money, protect operating funds, save smarter and build Loan Readiness.",
      },
      { property: "og:title", content: "TENGABIZ — Separate. Protect. Grow." },
      {
        property: "og:description",
        content:
          "Smart financial operating system for African micro and small businesses: Business Lock, savings goals, AI insights and Loan Readiness.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <MoneySplit />
        <BusinessLock />
        <SmartSavings />
        <LoanReadiness />
        <AIInsights />
        <Payments />
        <Transactions />
        <MicroBusiness />
        <DashboardPreview />
        <PeopleIPay />
        <ValueProp />
        <FutureVision />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
