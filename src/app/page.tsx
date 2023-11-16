import Image from "next/image";
import { Heading } from "./_components/_home/heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Testimonials } from "./_components/_home/testimonials";
import { Faq } from "./_components/_home/faq";
import { CardStackIcon, BarChartIcon } from "@radix-ui/react-icons";
import { GiftIcon, CpuIcon, BrainCog, CarFront, Leaf } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
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

  const startups = [
    {
      cardIcon: <CpuIcon className="h-24 w-24 text-green-700" />,
      cardHead: "Hardware & IOT",
      cardContent: "",
      cardQuantity: "10",
    },
    {
      cardIcon: <BrainCog className="h-24 w-24 text-green-700" />,
      cardHead: "Artificial Intelligence",
      cardContent:
        "The startups need to successfully pass our comprehensive due diligence process.",
      cardQuantity: "10",
    },
    {
      cardIcon: <CarFront className="h-24 w-24 text-green-700" />,
      cardHead: "Mobility",
      cardContent:
        "Every time you invest, you earn multiple rewards in in the form of merchandise, coupons and more.",
      cardQuantity: "10",
    },
    {
      cardIcon: <Leaf className="h-24 w-24 text-green-700" />,
      cardHead: "Biotechnology",
      cardContent:
        "Every time you invest, you earn multiple rewards in in the form of merchandise, coupons and more.",
      cardQuantity: "10",
    },
  ];
  return (
    <>
      <main className="flex flex-col gap-16 px-3">
        <Heading />

        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <p className="text-2xl md:text-4xl font-semibold">
            Raise, Build, Engage & Grow!
          </p>
          <p className="text-sm md:text-lg text-muted-foreground">
            We have a wide range of startups that you can invest in. It takes
            less than a minute to get started.
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

        <div className="flex flex-col gap-4 items-center text-center">
          <p className="text-2xl md:text-4xl font-semibold">
            250+ Startups to pick from
          </p>
          <p className="text-sm md:text-lg text-muted-foreground">
            We have startups from every emerging field you can imagine. We go
            through a vetting process for each one.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-12">
            {startups.map((val, ind) => (
              <Card key={ind}>
                <CardHeader>
                  <CardTitle className="flex justify-center w-full">
                    {val.cardIcon}
                  </CardTitle>
                  <CardTitle className="text-xl line-clamp-1 sm:text-3xl">
                    {val.cardHead}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-muted-foreground">
                    {val.cardQuantity}+
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button variant="outline" className="mt-6">
            See More
          </Button>
        </div>

        <Testimonials />

        <Faq />

        <hr />
      </main>
    </>
  );
}
