"use client";
import { CardStackIcon, BarChartIcon } from "@radix-ui/react-icons";
import { GiftIcon, CpuIcon, BrainCog, CarFront, Leaf } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CardsSec1 = () => {
  const card = [
    {
      cardHead: "Free for Investors",
      cardContent:
        "We charge no hidden fees for investing and provide top service. Enjoy a hassle free process.",
      cardIcon: <CardStackIcon className="h-32 w-32 text-blue-700" />,
    },
    {
      cardHead: "Highly Vetted Startups",
      cardContent:
        "The startups need to successfully pass our comprehensive due diligence process.",
      cardIcon: <BarChartIcon className="h-32 w-32 text-blue-700" />,
    },
    {
      cardHead: "Earn Rewards",
      cardContent:
        "Every time you invest, you earn multiple rewards in in the form of merchandise, coupons and more.",
      cardIcon: <GiftIcon className="h-32 w-32 text-blue-700" />,
    },
  ];
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-center">
      <p className="text-2xl md:text-4xl font-semibold">
        Raise, Build, Engage & Grow!
      </p>
      <p className="text-sm md:text-lg text-muted-foreground">
        We have a wide range of startups that you can invest in. It takes less
        than a minute to get started.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-12 ">
        {card.map((val, ind) => (
          <Card key={ind} className="min-h-[150px] max-w-[400px]">
            <CardHeader>
              <CardTitle className="flex justify-center w-full">
                {val.cardIcon}
              </CardTitle>
              <CardTitle className="text-xl md:text-3xl">
                {val.cardHead}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{val.cardContent}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
