"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Vision = () => {
  const card = [
    {
      cardHead: "Transparent and Easy",
      cardDesc:
        "We create a secure place to transact and we provide clear information so you can make your best investment decisions.",
    },
    {
      cardHead: "Do the Right Thing",
      cardDesc:
        "We protect our reputation and do right by our customers and investors.",
    },
    {
      cardHead: "Democratize the Startup Ecosystem",
      cardDesc:
        "Opportunities should not be limited to premium clubs, we adhere to fair play.",
    },
    {
      cardHead: "Support innovator for future",
      cardDesc:
        "By giving entrepreneurs access to investors, we make it possible for businesses to get off the ground, grow, and start making things that people love.",
    },
    {
      cardHead: "Team Player - Sporty",
      cardDesc:
        "A team with unselfish players who support each other wil generally perform better than a group of indivisuals that does not play as a team",
    },
    {
      cardHead:
        "Enabling entrepreneurs and investors to work together to build value",
      cardDesc:
        "Opens line of communication keep investors updated and allow them to collaborate with entrepreneurs and accelerate innovation",
    },
  ];
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-center">
      <p className="text-2xl md:text-4xl font-semibold">Our Vision</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-12 ">
        {card.map((val, ind) => (
          <Card key={ind} className="min-h-[300px] max-w-[400px]">
            <CardHeader>
              <CardTitle className="text-xl md:text-3xl">
                {val.cardHead}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{val.cardDesc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
