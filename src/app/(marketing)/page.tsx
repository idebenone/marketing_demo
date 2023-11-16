"use client";

import { Heading } from "./_components/heading";

import { Testimonials } from "./_components/testimonials";
import { Faq } from "./_components/faq";

import React from "react";
import { CardsSec1 } from "./_components/cards.sec-1";
import { StartupsSec } from "./_components/startups-sec";

export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col gap-16 px-3">
        <Heading />
        <CardsSec1 />
        <StartupsSec />
        <Testimonials />
        <Faq />
      </main>
    </>
  );
}
