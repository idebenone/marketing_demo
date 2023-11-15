"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  const faq = [
    {
      q: "Who are we?",
      a: "Pepcorns is a fundraising platform, through which startups can raise capital from anybody, providing a medium for potential startups/brands and investors to collaborate, work, and grow together.",
    },
    {
      q: "When was Pepcorns founded? Where is Pepcorns incorporated/registered?",
      a: "On ideation of 1.5 years, Pepcorns is now registered as Pepcorns Technologies Pvt Ltd since July 2022 at the Registrar of Companies, Kanpur",
    },
    {
      q: "As an investor, what do I get if I invest in a startup?",
      a: "It depends on the instrument against which you are investing. The types of compensation range from owning equity, to equity benefits, to rewards and payouts.",
    },
    {
      q: "What is the safe amount to invest?",
      a: "Anybody can invest in their favorite startup, starting with as little as ₹1000 through Pepcorns. This token size varies depending on your risk appetite, the sky is the limit. However, we recommend making several small investments each company rather than putting large in one.",
    },
    {
      q: "How are the returns determined on an investment?",
      a: "Straight answer is valuation. The post-money valuation of your invested amount in the start-up determines your return. A company's valuation aims to estimate its worth in the broader sense, and the value of a company can be determined by looking at many factors, such as the number of founders, business moat, potential growth trends, assets owned, cash flow, customer acquisition rate, and many more.",
    },
    {
      q: "As a startup, how is our application evaluated?",
      a: "Pepcorns conducts extensive scrutiny and due diligence to help us find quality business and a good fit for the investors. Industry, future scope, customer engagement, marketing budget, and previous funding are some factors that we consider for eligibility.",
    },
  ];
  return (
    <>
      <div className="flex flex-col lg:items-center">
        {faq.map((val, ind) => (
          <Accordion key={ind} type="single" collapsible className="lg:w-3/6">
            <AccordionItem value="item-1">
              <AccordionTrigger>{val.q}</AccordionTrigger>
              <AccordionContent>{val.a}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
};
