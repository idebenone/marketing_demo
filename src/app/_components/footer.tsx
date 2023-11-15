"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="px-3 md:px-6 lg:px-12 mt-8 lg:mt-16">
      <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between py-4">
        <div className="w-1/2">
          <Logo />
        </div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-3 justify-between">
          <div className="flex flex-col gap-2">
            <p className="py-2 font-bold">Investors</p>
            <p>
              <a href="">Start Investing</a>
            </p>
            <p>
              <a href=""> How investing works?</a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="py-2 font-bold">For Startups</p>
            <p>Raise Capital</p>
            <p>How it works</p>
            <p>Instruments</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="py-2 font-bold">Company</p>
            <p>About</p>
            <p>Blog</p>
            <p>FAQ</p>
            <p>Contact</p>
            <p>Careers</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-lg text-muted-foreground">
            Get Notified about new Startups
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2 mt-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-12">
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <p>Refund policy</p>
          <p>Risks</p>
        </div>
      </div>

      <div className="py-4">
        <p className="text-muted-foreground text-justify">
          <a href="https://www.pepcorns.com" className="">
            www.pepcorns.com
          </a>
          (<q>Platform</q>) is a website owned and operated by Pepcorns
          Technologies Private Limited (<q>Pepcorns</q>), which is neither a
          registered stock exchange, an investment advisor nor a funding portal
          and is not registered with the Securities Exchange Board of India (
          <q>SEBI</q>). Nothing contained on this Platform shall be construed as
          an authorization by the SEBI to solicit investments nor should the
          Platform be construed as a SEBI authorized crowdfunding platform or a
          stock exchange, or their equivalent. The securities offered by any
          company registered on Platform are not traded on any stock exchange
          recognised by SEBI. Pepcorns does not allow any secondary market
          trading of securities on the Platform. By accessing this Platform and
          any pages thereof, you agree to be bound by the
          <a href="/terms" className="">
            Terms of Use
          </a>
          and
          <a href="/privacy" className="">
            Privacy Policy
          </a>
          . Investing in start-ups and early-stage businesses involves risks,
          including illiquidity, lack of dividends, loss of investment and
          dilution, and it should be done only as part of a diversified
          portfolio. Pepcorns is targeted exclusively at investors who are
          sufficiently sophisticated to understand these risks and make their
          own investment decisions. Please read our&nbsp;
          <a href="/risks" className="">
            RISK POLICY
          </a>
          .
        </p>
      </div>
    </div>
  );
};
