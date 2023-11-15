"use client";

import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="min-h-[600px] flex flex-col justify-center items-center gap-4">
      <div className="w-full flex flex-col gap-4 justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Invest in startups</h1>
        <p className="text-md md:text-2xl font-medium text-muted-foreground">
          Start your investing journey with just ₹1000, cutting out all the crap
          involved.
        </p>
        <Button className="mt-2">Join Pepcorns</Button>
      </div>

      <div className="flex flex-row justify-center items-center gap-8 text-center mt-8">
        <span>
          <p className="text-3xl font-bold">3K+</p>
          <p className="text-lg text-muted-foreground">Investors</p>
        </span>
        <span>
          <p className="text-3xl font-bold">250+</p>
          <p className="text-lg text-muted-foreground">Startups</p>
        </span>
        <span>
          <p className="text-3xl font-bold">10+</p>
          <p className="text-lg text-muted-foreground">Sectors</p>
        </span>
      </div>
    </div>
  );
};
