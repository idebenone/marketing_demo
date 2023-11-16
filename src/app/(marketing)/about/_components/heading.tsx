"use client";

import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <>
      <div className="min-h-[900px] flex flex-col justify-center items-center gap-4">
        <div className="w-2/3 flex flex-col gap-4 justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Opening up access of Angel Investing to Everyone
          </h1>
          <p className="text-md md:text-2xl font-medium text-muted-foreground">
            Pepcorns enables everyday people to become angel investors by giving
            them access to startup investment opportunities
          </p>
          <div className="flex flex-row gap-3">
            <Button className="mt-2" variant="outline">
              Learn More
            </Button>
            <Button className="mt-2">Get Started</Button>
          </div>
        </div>
      </div>

      <div className="min-h-[900px] flex flex-col justify-center items-center gap-4 ">
        <div className="w-2/3 flex flex-col gap-4 justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Opening oppurtunities
          </h1>
          <p className="text-md md:text-2xl font-medium text-muted-foreground">
            Pepcorns helps businesses raise capital from everyday people - their
            customers, friends, family and the peppy investors who believe in
            common goals. Pepcorns is solely reward based funding platform, and
            startup raise funds by rewarding investors. SAFE notes are among
            other rewards served by the incorporated company to accredited
            investors.
          </p>
          <div className="flex flex-row gap-3">
            <Button className="mt-2" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
